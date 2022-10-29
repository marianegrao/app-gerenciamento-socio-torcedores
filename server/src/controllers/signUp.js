const bcrypt = require("bcrypt");
const knex = require("../connection");
const schemaSignUp = require("../validations/schemaSignUp");

const signUp = async (req, res) => {
	const { email, password } = req.body;
	try {
		await schemaSignUp.validate(req.body);
		const user = await knex("users").where({ email }).first();
		if (user) {
			return res.status(400).json("O email já existe");
		}

		const passwordEncrypted = await bcrypt.hash(password, 10);
		const dataUser = { ...req.body, password: passwordEncrypted };
		const registerUser = await knex("users").insert(dataUser).returning("*");

		if (!registerUser) {
			return res.status(400).json("Não foi possível cadastrar usuário.");
		}

		return res.status(201).json("O usuário foi cadastrado com sucesso!");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = signUp;
