const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("../connection");
const signInValidate = require("../validations/schemaSignIn");

const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		return res.status(200).json("sign in is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = signIn;
