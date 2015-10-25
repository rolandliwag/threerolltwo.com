var express = require('express');

module.exports = function createHandlers(config, dal) {
	var app = express();
	
	app.use('/article', require('./article')(config));

	return app;
};