/**
 * @param {dbAdapter} db
 */
function EmailAccess(db) {
	/**
	 * @param {String} email
	 * @returns {Promise} 
	 */
	this.add = function (email) {
		return db.query({
			text: 'INSERT INTO email VALUES ($1)',
			values: [email]
		});
	};
}

module.exports = EmailAccess;