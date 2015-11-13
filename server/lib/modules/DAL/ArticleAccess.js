var Article = require('./ArticleModel');

function ArticleAccess(db) {
	this.getLatestInShort = function (number) {
		return db.query({
			text: 'SELECT * FROM article ORDER BY created_date DESC LIMIT $1',
			values: [number]
		}).then(function (result) {
            return result.rows.map(function (row) {
                return new Article(row);
            });
        });
	};

	this.add = function (article) {
		return db.query({
			text: 'INSERT INTO article (url, title, subheading, top_image, short_content, content) VALUES($1, $2, $3, $4, $5, $6)',
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
				reject(err);
			});
		});
	}

	this.get = function (url) {
		return db.query({
			text: 'SELECT * FROM article WHERE url = $1',
			values: [url]
		}).then(function (result) {
			return new Promise(function (resolve, reject) {
                if (result.rows.length) {
                    resolve(new Article(result.rows[0]));
                }
			});
		});
	};
}

module.exports = ArticleAccess;
