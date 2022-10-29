const knex = require("../connection");
const { schemaRegisterClub } = require("../validations/schemasClubs");

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
		const clubFound = await knex("clubs").where({ id }).first();
		if (!clubFound) {
			return res
				.status(404)
				.json("Não foi encontrado clube com o id informado.");
		}

		return res.json(clubFound);
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
	try {
		return res.status(200).json("updateClub is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const deleteClub = async (req, res) => {
	try {
		return res.status(200).json("deleteClub is working");
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
