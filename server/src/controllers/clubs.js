const registerClub = async (req, res) => {
	try {
		return res.status(200).json("registerClub is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const listClubs = async (req, res) => {
	try {
		return res.status(200).json("listClubs is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const detailClub = async (req, res) => {
	try {
		return res.status(200).json("detailClub is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const updateClub = async (req, res) => {
	try {
		return res.status(200).json("updateClub is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const deleteClub = async (req, res) => {
	try {
		return res.status(200).json("deleteClub is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = {
	listClubs,
	registerClub,
	detailClub,
	updateClub,
	deleteClub,
};
