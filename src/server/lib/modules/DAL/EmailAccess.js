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
            })
            .catch(function (err) {
                return new Promise(function (resolve, reject) {
                    // If insertion fails due to email already existing, then treat it as a success
                    if (err.constraint === 'email_pkey' && err.routine === '_bt_check_unique') {
                        resolve();
                    } else {
                        reject(err);
                    }
                });
            });
	};
}

module.exports = EmailAccess;
