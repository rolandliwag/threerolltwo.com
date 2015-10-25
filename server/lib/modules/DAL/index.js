var PostgresAdapter = require('./PostgresAdapter');

function DAL(dbConfig) {
	this.db = new PostgresAdapter(dbConfig);
}

module.exports = DAL;