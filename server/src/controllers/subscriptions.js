const knex = require("../connection");
const foundElementById = require("../utils/foundElementById");
const generateNextInvoices = require("../utils/generateNextInvoices");
const {
	schemaRegisterSubscription,
} = require("../validations/schemasSubscriptions");

const registerSubscription = async (req, res) => {
	const { start_date } = req.body;
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

		const subscriptionRegistered = await knex("subscriptions")
			.insert(dataSubscription)
			.returning("*");
		if (!subscriptionRegistered) {
			return res.status(400).json("Não foi possível realizar assinatura.");
		}

		const { errorGenerete, messageGenerete, statusGenerete } =
			await generateNextInvoices(
				start_date,
				dataClub.monthly_subscription,
				subscriptionRegistered[0].id,
				dataClub.name
			);

		if (errorGenerete) {
			return res.status(statusGenerete).json(messageGenerete);
		}

		const userStatusUpdated = await knex("users")
			.update("status", "active")
			.where("id", id_user);
		if (!userStatusUpdated) {
			res.status(404).json("Status do usuário não foi atualizado");
		}

		return res.status(201).json("Assinatura foi realizada com sucesso!");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const listSubscriptions = async (req, res) => {
	try {
		const subscriptionsListed = await knex("subscriptions").select("*");

		if (!subscriptionsListed) {
			return res.status(400).json("Não foi possível listar assinaturas");
		}

		return res.json(subscriptionsListed);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const detailSubscriptions = async (req, res) => {
	const { id } = req.params;
	try {
		const { error, message, data, status } = await foundElementById(
			"subscriptions",
			id
		);
		if (error) {
			return res.status(status).json(message);
		}

		return res.status(200).json(data);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = {
	registerSubscription,
	listSubscriptions,
	detailSubscriptions,
};
