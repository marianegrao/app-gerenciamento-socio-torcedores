const knex = require("../connection");
const foundElementIfIdExists = async (id, table) => {
	try {
		const idExists = await knex(table).where({ id }).first();
		if (!idExists) {
			return "Não foi encontrado elemento com o id informado.";
		}
		//TODO: retirar os erros do console em caso de id não existir

		return idExists;
	} catch (error) {
		return error.message;
	}
};
module.exports = foundElementIfIdExists;
