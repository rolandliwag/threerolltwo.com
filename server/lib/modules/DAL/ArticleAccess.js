var Article = require('./ArticleModel');

function ArticleAccess(db) {
	this.getLatestInShort = function (number) {
		return db.query({
			text: 'SELECT url, title, shortcontent, topimage FROM article ORDER BY created DESC LIMIT $1',
			values: [number]
		});
	};
	
	this.add = function (article) {
		return db.query({
			text: 'INSERT INTO article VALUES()',
			values: []
		})
	}
}

module.exports = ArticleAccess;