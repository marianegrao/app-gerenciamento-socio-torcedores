const { addMonths, parseISO } = require("date-fns");
const knex = require("../connection");
const {
	schemaRegisterNextInvoices,
} = require("../validations/schemasSubscriptions");

const generateNextInvoices = async (
	due_date,
	monthly_subscription,
	id_subscription,
	club_name
) => {
	const response = { error: false, message: "", status: 200, data: "" };

	let dataToBeRegistered = [];
	try {
		for (let i = 1; i < 13; i++) {
			let dataInvoice = {
				due_date,
				id_subscription,
				club_name,
				monthly_payment: monthly_subscription,
			};

			let dueDateFormated = parseISO(dataInvoice.due_date);

			dataInvoice.due_date = addMonths(dueDateFormated, i);

			await schemaRegisterNextInvoices.validate(dataInvoice);

			dataToBeRegistered.push(dataInvoice);
		}

		const invoiceRegistered = await knex("monthy_subscriptions_invoices")
			.insert(dataToBeRegistered)
			.returning("*");

		if (!invoiceRegistered) {
			response.error = true;
			response.message = `Não foi possível gerar uma(s) fatura(s)`;
			response.status = 400;
		}

		return response;
	} catch (error) {
		response.error = true;
		response.message = error.message;
		response.status = 500;
		return response;
	}
};

module.exports = generateNextInvoices;
