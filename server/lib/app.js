var express = require('express'),
    morgan = require('morgan'),
    pathModule = require('path'),
    fs = require('fs'),
    httpErrors = require('httperrors'),
	DAL = require('./modules/DAL');

module.exports = function createServer(config) {
    var app = express(),
		dal = new DAL(config.db),
        resolvedPublicdir = pathModule.resolve(__dirname, config.publicDir);

    app.use(morgan('combined'));

    if (config.compiless) {
        app.use(require('express-compiless')({root: resolvedPublicdir}));
    }

    app.use(require('./handlers')(config, dal));

    if (config.notYetLaunched) {
        app.get('/', function (req, res, next) {
            var Htmlizer = require('htmlizer');

            fs.readFile(pathModule.resolve(resolvedPublicdir, 'index-maintenance.html'), 'utf8', function (err, data) {
                if (err) {
                    return next(new httpErrors.InternalServerError(err));
                }

                res.send(new Htmlizer(data, {noConflict: true}).toString({
                    bootstrapConfig: "<script>window.CONFIG = " + JSON.stringify(config) + ';</script>'
                }));
            });
        });
    }

    app.use(express.static(resolvedPublicdir));

    return app;
};
