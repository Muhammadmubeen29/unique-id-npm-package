function generateUniqueID(length = 10) {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=";
	let uniqueID = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		uniqueID += characters.charAt(randomIndex);
	}

	return uniqueID;
}

module.exports = {
	generateUniqueID,
};
