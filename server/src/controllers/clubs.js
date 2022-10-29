const knex = require("../connection");
const foundElementIfIdExists = require("../utils/foundElementIfIdExists");
const {
	schemaRegisterClub,
	schemaUpdateClub,
} = require("../validations/schemasClubs");

const registerClub = async (req, res) => {
	const { name } = req.body;
	try {
		await schemaRegisterClub.validate(req.body);

		const club = await knex("clubs").where({ name }).first();
		if (club) {
			return res.status(400).json("Esse clube já está registrado");
		}

		const clubRegistered = await knex("clubs").insert(req.body).returning("*");
		if (!clubRegistered) {
			return res.status(400).json("Não foi possível cadastrar clube.");
		}

		return res.status(201).json("O clube foi cadastrado com sucesso!");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const detailClub = async (req, res) => {
	const { id } = req.params;
	try {
		const clubFound = await foundElementIfIdExists(id, "clubs");
		return res.status(200).json(clubFound);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const listClubs = async (req, res) => {
	try {
		const clubsListed = await knex("clubs").select("*");

		if (!clubsListed) {
			return res.status(404).json("Não foi possível listar clubes");
		}

		return res.json(clubsListed);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const updateClub = async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	try {
		await schemaUpdateClub.validate(req.body);

		await foundElementIfIdExists(id, "clubs");

		if (name) {
			const clubAlreadyExists = await knex("clubs")
				.where({ name })
				.whereNot({ id })
				.first();
			if (clubAlreadyExists)
				return res.status(404).json("Já existe clube com esse nome.");
		}

		const clubUpdated = await knex("clubs").update(req.body).where({ id });
		if (!clubUpdated) {
			res.status(404).json("Clube não foi atualizado");
		}

		res.status(200).json("Clube foi atualizado com sucesso!");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const deleteClub = async (req, res) => {
	const { id } = req.params;
	try {
		await foundElementIfIdExists(id, "clubs");

		const clubDeleted = await knex("clubs").del().where({ id });
		if (!clubDeleted) {
			res.status(404).json("Clube não foi deletado");
		}

		res.status(200).json("Clube deletado com sucesso!");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = {
	listClubs,
	registerClub,
	detailClub,
	updateClub,
	deleteClub,
};
