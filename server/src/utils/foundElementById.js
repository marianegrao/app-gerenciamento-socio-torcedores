const knex = require("../connection");
const foundElementById = async (elemtents, id) => {
	const response = { error: false, message: "", data: "" };
	try {
		const elmentFound = await knex(elemtents).where({ id }).first();

		if (!elmentFound) {
			response.error = true;
			response.message = "Não foi encontrado elemento com o id informado.";
		}

		response.data = elmentFound;
		return response;
	} catch (error) {
		response.error = true;
		response.message = error.message;

		return response;
	}
};
module.exports = foundElementById;
