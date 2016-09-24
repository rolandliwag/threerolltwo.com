const PostgresAdapter = require('./PostgresAdapter');
const EmailAccess = require('./EmailAccess');
const ArticleAccess = require('./ArticleAccess');
const PageAccess = require('./PageAccess');

function DAL(dbConfig) {
	const db = new PostgresAdapter(dbConfig);

	this.email = new EmailAccess(db);
    this.article = new ArticleAccess(db);
	this.page = new PageAccess(db);
}

module.exports = DAL;
