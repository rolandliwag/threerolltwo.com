const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = function createHandlers(config, dal) {
	const app = express();

    if (config.cors) {
        app.use(cors(config.cors));
    }

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', require('./api')(config, dal));
    app.use('/', require('./pages')(config, dal));

	return app;
};
