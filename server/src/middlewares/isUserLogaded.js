const jwt = require("jsonwebtoken");
const knex = require("../connection");

const isUserLogaded = async (req, res, next) => {
	const { authorization } = req.headers;

	try {
		next();
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = isUserLogaded;
