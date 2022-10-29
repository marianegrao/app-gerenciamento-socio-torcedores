const yup = require("./settings");

const schemaSignIn = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required().min(5),
});

module.exports = schemaSignIn;
