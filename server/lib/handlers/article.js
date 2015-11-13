var express = require('express'),
    httpErrors = require('httperrors'),
	requireAuth = require('../middleware/requireAuth'),
	Article = require('../modules/DAL/ArticleModel');

module.exports = function createHandler(config, dal) {
	var app = express();

	app
		.get('/', function (req, res, next) {
			dal.article.getLatestInShort(20).then(function (articles) {
				res.send(articles);
			})
			.catch(function (err) {
                console.log(err);
				next(new httpErrors.InternalServerError());
			});
		})
		.get('/:url', function (req, res, next) {
			dal.article.get(req.params.url).then(function (article) {
				if (!article) {
					return next(new httpErrors.NotFound());
				}

				res.send(article);
			})
			.catch(function (err) {
				next(new httpErrors.InternalServerError(err));
			})

		})
		.put('/:url', requireAuth(config.auth), function (req, res, next) {
			var article = new Article(req.body);

			if (!article.isValid()) {
				return next(new httpErrors.BadRequest());
			}

			dal.article.add(article).then(function (result) {
				res.status(201).send();
			})
			.catch(function (err) {
				next(new httpErrors.InternalServerError(err));
			})
		});

	return app;
}
