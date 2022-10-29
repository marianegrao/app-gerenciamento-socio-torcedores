const registerClub = () => {
	try {
		return res.status(200).json("registerClub is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const listClubs = () => {
	try {
		return res.status(200).json("listClubs is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const detailClub = () => {
	try {
		return res.status(200).json("detailClub is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const updateClub = () => {
	try {
		return res.status(200).json("updateClub is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const deleteClub = () => {
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
