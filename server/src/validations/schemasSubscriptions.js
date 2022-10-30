const yup = require("./settings");
const schemaRegisterSubscription = yup.object().shape({
	id_club: yup.number().required(),
	id_user: yup.number().required(),
	start_date: yup.date().required(),
});

const schemaRegisterNextInvoices = yup.object().shape({
	id_subscription: yup.number().required(),
	club_name: yup.string().required(),
	monthly_payment: yup.number().required(),
	due_date: yup.date().required(),
	status: yup.string(),
});

module.exports = { schemaRegisterSubscription, schemaRegisterNextInvoices };
