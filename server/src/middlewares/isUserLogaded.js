const jwt = require("jsonwebtoken");
const knex = require("../connection");
const secret = require("../secret/secret");

const isUserLogaded = async (req, res, next) => {
	const { authorization } = req.headers;

	try {
		if (!authorization) {
			return res.status(401).json("Não autorizado");
		}

		const token = authorization.replace("Bearer ", "").trim();

		const { id } = jwt.verify(token, secret);

		const user = await knex("users").select("*").where({ id }).first();

		if (!user) {
			return res.status(404).json("Usuário não encontrado");
		}

		const { password, ...dataUser } = user;

		req.user = dataUser;

		next();
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = isUserLogaded;
