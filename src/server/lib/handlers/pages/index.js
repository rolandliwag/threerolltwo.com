const express = require('express');

module.exports = function createHandlers(config, dal) {
	const app = express();

    app.use('/article', require('./article')(config, dal));
	app.use('/search', require('./search')(config, dal));
    app.use('/', require('./home')(config, dal));

	return app;
};
