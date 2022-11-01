const knex = require("knex")({
	client: "pg",
	connection: {
		host: "ec2-35-170-21-76.compute-1.amazonaws.com",
		user: "spxaapzdigvmfy",
		password:
			"63a42b4b833446ba2b1f3d6c485188567c71de58d306d41be9ca6716d4ad44f3",
		port: 5432,
		database: "df814h4cudpc8u",
		ssl: {
			rejectUnauthorized: false,
		},
	},
});

module.exports = knex;
