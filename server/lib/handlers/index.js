var express = require('express'),
    bodyParser = require('body-parser');

module.exports = function createHandlers(config, dal) {
	var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/article', require('./article')(config, dal));
	app.use('/email', require('./email')(config, dal));

	return app;
};
