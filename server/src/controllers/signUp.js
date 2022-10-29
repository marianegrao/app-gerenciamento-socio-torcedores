const bcrypt = require("bcrypt");
const knex = require("../connection");
const schemaSignUp = require("../validations/schemaSignUp");

const signUp = async (req, res) => {
	const { email, password } = req.body;
	try {
		return res.status(201).json("sign up is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = signUp;
