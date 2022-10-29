const bcrypt = require("bcrypt");
const knex = require("../connection");
const { schemaUpdateUser } = require("../validations/schemasUsers");
const jwt = require("jsonwebtoken");
const detailUser = (req, res) => {
	try {
		return res.json(req.user);
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const updateUser = async (req, res) => {
	const { email, password } = req.body;
	const { id } = req.user;
	let userData = { ...req.body };
	try {
		await schemaUpdateUser.validate(req.body);

		if (email) {
			const emailAlreadyExists = await knex("users")
				.where({ email })
				.whereNot({ id })
				.first();
			if (emailAlreadyExists)
				return res.status(404).json("Já existe usuário com esse e-mail.");
		}

		if (password) {
			const passwordEncrypted = await bcrypt.hash(password, 10);
			userData = { ...req.body, password: passwordEncrypted };
		}

		const userUpdated = await knex("users").update(userData).where({ id });
		if (!userUpdated) {
			res.status(404).json("Usuário não foi atualizado");
		}

		res.status(200).json("Usuário foi atualizado com sucesso!");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const deleteUser = async (req, res) => {
	const { id } = req.user;

	try {
		if (!id) {
			return;
		}
		const userDeleted = await knex("users").del().where({ id });
		if (!userDeleted) {
			res.status(404).json("Usuário não foi deletado");
		}

		res.status(200).json("Usuário deletado com sucesso!");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = {
	detailUser,
	updateUser,
	deleteUser,
};
