var express = require('express');

module.exports = function createHandler(config, dal) {
	var app = express();

	app.get('/', function (req, res, next) {
		res.send()
	});
	
	return app;
}