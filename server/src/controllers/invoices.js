const knex = require("../connection");
const foundElementById = require("../utils/foundElementById");

const listInvoices = async (req, res) => {
	const { id: id_user } = req.user;
	try {
		const invoices = await knex("monthy_subscriptions_invoices")
			.select("monthy_subscriptions_invoices.*")
			.where("subscriptions.id_user", id_user)
			.leftJoin(
				"subscriptions",
				"subscriptions.id",
				"monthy_subscriptions_invoices.id_subscription"
			);

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
	const { id: id_invoice } = req.params;
	const { id: id_user } = req.user;
	try {
		const { error, message, status } = await foundElementById(
			"monthy_subscriptions_invoices",
			id_invoice
		);

		if (error) {
			return res.status(status).json(message);
		}

		const invoiceFound = await knex("monthy_subscriptions_invoices")
			.select("monthy_subscriptions_invoices.*")
			.where("subscriptions.id_user", id_user)
			.andWhere("monthy_subscriptions_invoices.id", id_invoice)
			.leftJoin(
				"subscriptions",
				"subscriptions.id",
				"monthy_subscriptions_invoices.id_subscription"
			)
			.first();

		if (invoiceFound) {
			const invoiceUpdated = await knex("monthy_subscriptions_invoices")
				.update("status", "paid")
				.where("id", id_invoice)
				.returning("*");
			if (!invoiceUpdated) {
				res.status(400).json("Fatura não foi possivel pagar");
			}
			return res.status(200).json("Fatura paga com sucesso!");
		} else {
			res.status(401).json("Fatura não pertence ao usuário logado");
		}
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = {
	listInvoices,
	payInvoice,
};
