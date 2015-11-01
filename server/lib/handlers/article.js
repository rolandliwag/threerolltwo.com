var express = require('express');

module.exports = function createHandler(config, dal) {
	var app = express();

	app.get('/', function (req, res, next) {
		dal.article.getLatestInShort(20)
			.then(function (results) {
				res.send(results);
			})
			.error(function () {
				next(new httpErrors.InternalServerError());
			});
	});
	
	return app;
}