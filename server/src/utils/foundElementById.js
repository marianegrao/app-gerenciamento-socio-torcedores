const knex = require("../connection");
const foundElementById = async (elemtents, id) => {
	const response = { error: false, message: "", data: "", status: 200 };
	try {
		const elementFound = await knex(elemtents).where({ id }).first();

		if (!elementFound) {
			response.error = true;
			response.message = "Não foi encontrado elemento com o id informado.";
			response.status = 404;
		}

		response.data = elementFound;
		return response;
	} catch (error) {
		response.error = true;
		response.message = error.message;
		response.status = 500;
		return response;
	}
};
module.exports = foundElementById;
