const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("../connection");
const secret = require("../secret/secret");
const signInValidate = require("../validations/schemaSignIn");

const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		await signInValidate.validate(req.body);
		const user = await knex("users").where({ email }).first();

		if (!user) {
			return res.status(404).json("O usuário não foi encontrado");
		}

		const passwordCorrect = await bcrypt.compare(password, user.password);
		if (!passwordCorrect) {
			return res.status(400).json("Email e/ou senha não conferem");
		}

		const token = jwt.sign({ id: user.id }, secret, {
			expiresIn: "8h",
		});

		const { password: passwordUser, ...dataUser } = user;

		return res.status(200).json({
			user: dataUser,
			token,
		});
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = signIn;
