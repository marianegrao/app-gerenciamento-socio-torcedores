const knex = require("../connection");
const foundElementById = require("../utils/foundElementById");
const generateNextInvoices = require("../utils/generateNextInvoices");
const {
	schemaRegisterSubscription,
} = require("../validations/schemasSubscriptions");

const registerSubscription = async (req, res) => {
	const { due_date } = req.body;
	const { id: id_user } = req.user;
	const { id: id_club } = req.params;
	const dataSubscription = { ...req.body, id_user, id_club };
	try {
		const {
			error,
			message,
			status,
			data: dataClub,
		} = await foundElementById("clubs", id_club);
		if (error) {
			return res.status(status).json(message);
		}

		await schemaRegisterSubscription.validate(dataSubscription);

		if (due_date > new Date()) {
			return res
				.status(404)
				.json("A data de vencimento não pode ser anterior a data atual.");
		}

		const subscriptionRegistered = await knex("subscriptions")
			.insert(dataSubscription)
			.returning("*");
		if (!subscriptionRegistered) {
			return res.status(400).json("Não foi possível realizar assinatura.");
		}

		const { errorGenerete, messageGenerete, statusGenerete } =
			await generateNextInvoices(
				due_date,
				dataClub.monthly_subscription,
				subscriptionRegistered[0].id,
				dataClub.name
			);

		if (errorGenerete) {
			return res.status(statusGenerete).json(messageGenerete);
		}

		return res.status(201).json("Assinatura anual foi realizada com sucesso!");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};
module.exports = {
	registerSubscription,
};
