var express = require('express'),
	purify = require('purify'),
	httpErrors = require('httperrors');

module.exports = function createHandler(config, dal) {
	var app = express();
	
	app.post('/', function (req, res, next) {
		var query = purify.printableAscii(req.query.query);
	
		if (!query) {
			return next(new httpErrors.BadRequest());
		}
		
		dal.search(query).then(function (results) {
			res.send(results);
		})
		.catch(function (err) {
			next(new httpErrors.InternalServerError());
		});
	});
	
	return app;
};
