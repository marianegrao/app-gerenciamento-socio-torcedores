const { addMonths, parseISO } = require("date-fns");
const knex = require("../connection");
const {
	schemaRegisterNextInvoices,
} = require("../validations/schemasSubscriptions");

const generateNextInvoices = async (
	due_date,
	monthly_subscription,
	idSubscription,
	club_name
) => {
	const response = { error: false, message: "", status: 200, data: "" };

	const dataInvoice = {
		due_date: "2022-10-29",
		id_subscription: 10,
		monthly_payment: 55,
		club_name: "Ceará SC	",
	};
	try {
		for (let i = 0; i < 12; i++) {
			const dueDateFormated = parseISO(dataInvoice.due_date);

			const nextDueDate = addMonths(dueDateFormated, i);

			dataInvoice.due_date = nextDueDate;
			await schemaRegisterNextInvoices.validate(dataInvoice);

			const invoiceRegistered = await knex("monthy_subscriptions_invoices")
				.insert(dataInvoice)
				.returning("*");

			if (!invoiceRegistered) {
				response.error = true;
				response.message = `Não foi possível gerar a fatura de número ${i}.`;
				response.status = 400;
				return;
			}
		}

		return response;
	} catch (error) {
		response.error = true;
		response.message = error.message;
		response.status = 500;
		return response;
	}
};
generateNextInvoices();
module.exports = generateNextInvoices;
