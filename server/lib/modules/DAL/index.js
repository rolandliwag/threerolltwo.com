var PostgresAdapter = require('./PostgresAdapter'),
	EmailAccess = require('./EmailAccess'),
    ArticleAccess = require('./ArticleAccess');

function DAL(dbConfig) {
	var db = new PostgresAdapter(dbConfig);

	this.email = new EmailAccess(db);
    this.article = new ArticleAccess(db);
}

module.exports = DAL;
