var express = require('express');

module.exports = function createHandlers(config, dal) {
	var app = express();

	app.use('/article', require('./article')(config));
	app.use('/email', require('./email')(config));

	return app;
};
