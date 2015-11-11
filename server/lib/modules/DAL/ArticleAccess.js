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
			text: 'INSERT INTO article (url, title, subheading, topimage, shortcontent, content) VALUES($1, $2, $3, $4, $5, $6)',
			values: [
				article.url,
				article.title,
				article.subheading,
				article.topImage,
				article.shortContent,
				article.content
			]
		}).catch(function (err) {
			return new Promise(function (resolve, reject) {
				reject();
			});
		});
	}
	
	this.get = function (url) {
		return db.query({
			text: 'SELECT * FROM article WHERE url = $1',
			values: [url]
		}).then(function (result) {
			return new Promise(function (resolve, reject) {
				resolve(new Article(result));
			});
		});
	};
}

module.exports = ArticleAccess;