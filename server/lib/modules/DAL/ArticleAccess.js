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
        var tagQueryValues = [],
            tagQueryValuesEnumerated = [],
            url = article.url;

        article.tags.forEach(function (tag, index) {
            tagQueryValues.push(url, tag);
            tagQueryValuesEnumerated.push('$' + (index + 1), '$' + (index + 2));
        });

		return db.runTransaction([{
			text: 'INSERT INTO article (url, title, subheading, top_image, short_content, content) VALUES($1, $2, $3, $4, $5, $6)',
			values: [
				article.url,
				article.title,
				article.subheading,
				article.topImage,
				article.shortContent,
				article.content
			]
		}, {
            text: 'INSERT INTO article_tag VALUES(' + tagQueryValuesEnumerated.join(',') + ')',
            values: tagQueryValues
        }]).catch(function (err) {
			return new Promise(function (resolve, reject) {
				reject(err);
			});
		});
	};

	this.get = function (url) {
		return db.query({
			text: 'SELECT * FROM article WHERE url = $1',
			values: [url]
		}).then(function (result) {
			return new Promise(function (resolve, reject) {
                if (result.rows.length) {
                    resolve(new Article(result.rows[0]));
                } else {
                    resolve();
                }
			});
		});
	};

    this.getLatestByTag = function (tag, offset, limit) {
        return db.query({
            text: 'SELECT * FROM article INNER JOIN article_tag ON url WHERE article_tag.tag = $1',
            values: [tag]
        }).then(function (result) {
            return result.rows.map(function (row) {
                return new Article(row);
            });
        });
    };
}

module.exports = ArticleAccess;
