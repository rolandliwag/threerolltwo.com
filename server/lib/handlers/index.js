var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    cors = require('cors');

module.exports = function createHandlers(config, dal) {
	var app = express();

    if (config.cors) {
        app.use(cors(config.cors));
    }

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/article', require('./article')(config, dal));
	app.use('/email', require('./email')(config, dal));
    app.post('/login', require('./login')(config));

	return app;
};
