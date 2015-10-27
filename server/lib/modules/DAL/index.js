var PostgresAdapter = require('./PostgresAdapter'),
	EmailAccess = require('./EmailAccess');

function DAL(dbConfig) {
	var db = new PostgresAdapter(dbConfig);
	this.email = new EmailAccess(db);
}

module.exports = DAL;