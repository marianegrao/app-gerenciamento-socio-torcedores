const yup = require("./settings");
const schemaRegisterClub = yup.object().shape({
	name: yup.string().required(),
	monthly_subscription: yup.number().required(),
	insignia: yup.string().required(),
	instagram: yup.string(),
	twitter: yup.string(),
	website: yup.string(),
});
module.exports = { schemaRegisterClub };
