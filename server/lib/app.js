var express = require('express'),
    morgan = require('morgan'),
    pathModule = require('path'),
	DAL = require('./modules/DAL');

module.exports = function createServer(config) {
    var app = express(),
		dal = new DAL(config.db),
        resolvedPublicdir = pathModule.resolve(__dirname, config.publicDir);

    app.use(morgan('combined'));

    if (config.compiless) {
        app.use(require('express-compiless')({root: resolvedPublicdir}));
    }

    app.use(require('./handlers')(config));

    if (config.notYetLaunched) {
        app.get('/', function (req, res, next) {
            res.sendFile(pathModule.resolve(resolvedPublicdir, 'index-maintenance.html'));
        });
    }

    app.use(express.static(resolvedPublicdir));

    return app;
};
