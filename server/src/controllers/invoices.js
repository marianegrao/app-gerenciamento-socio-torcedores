const knex = require("../connection");
const foundElementById = require("../utils/foundElementById");

const listInvoices = async (req, res) => {
	try {
		const invoices = await knex("monthy_subscriptions_invoices").select("*");

		if (!invoices) {
			return res.status(400).json("Não foi possível listar faturas");
		}

		invoices.forEach(async (invoice) => {
			if (invoice.due_date <= new Date() && invoice.status !== "paid") {
				await knex("monthy_subscriptions_invoices")
					.update("status", "overdue")
					.where("id", invoice.id);
			}
		});

		return res.status(200).json(invoices);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const payInvoice = async (req, res) => {
	const { id } = req.params;
	try {
		const { error, message, status } = await foundElementById(
			"monthy_subscriptions_invoices",
			id
		);

		if (error) {
			return res.status(status).json(message);
		}

		const invoiceUpdated = await knex("monthy_subscriptions_invoices")
			.update("status", "paid")
			.where({ id });
		if (!invoiceUpdated) {
			res.status(400).json("Fatura não foi atualizada");
		}

		return res.status(200).json("Fatura paga com sucesso!");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = {
	listInvoices,
	payInvoice,
};
