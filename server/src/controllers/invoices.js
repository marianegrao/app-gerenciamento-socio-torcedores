const knex = require("../connection");

const listInvoices = async (req, res) => {
	try {
		const invoices = await knex("monthy_subscriptions_invoices").select("*");

		if (!invoices) {
			return res.status(400).json("Não foi possível listar faturas");
		}

		return res.status(200).json(invoices);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
module.exports = {
	listInvoices,
};
