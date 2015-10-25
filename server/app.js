var express = require('express'),
    morgan = require('morgan'),
    pathModule = require('path'),
	DAL = require('./lib/modules/DAL');

module.exports = function createServer(config) {
    var app = express(),
		dal = new DAL(config.db),
        resolvedPublicdir = pathModule.resolve(__dirname, config.publicDir);

    app.use(morgan('combined'));

    if (config.compiless) {
        app.use(require('express-compiless')({root: resolvedPublicdir}));
    }

    app.use(express.static(resolvedPublicdir));

	app.use(require('./lib/handlers')(config));
	
    return app;
};
