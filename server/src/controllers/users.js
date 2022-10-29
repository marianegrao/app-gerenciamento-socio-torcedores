const detailUser = async (req, res) => {
	try {
		return res.status(200).json("detailUser is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const updateUser = async (req, res) => {
	try {
		return res.status(200).json("updateUser is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const deleteUser = async (req, res) => {
	try {
		return res.status(200).json("deleteUser is working");
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

module.exports = {
	detailUser,
	updateUser,
	deleteUser,
};
