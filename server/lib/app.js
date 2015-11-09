var express = require('express'),
    morgan = require('morgan'),
    pathModule = require('path'),
    fs = require('fs'),
    httpErrors = require('httperrors'),
    passError = require('passerror'),
    Htmlizer = require('htmlizer'),
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
	app.use('/prerender', require('./prerender')(config, dal));

    function renderWithHtmlizer(path, cb) {
        fs.readFile(path, 'utf8', passError(cb, function (data) {
            cb(null, new Htmlizer(data, {noConflict: true}).toString({
                bootstrapConfig: "<script>window.CONFIG = " + JSON.stringify(config) + ';</script>'
            }));
        }));
    }

    if (config.notYetLaunched) {
        app.get('/', function (req, res, next) {
            renderWithHtmlizer(pathModule.resolve(resolvedPublicdir, 'index-maintenance.html'), function (err, html) {
                if (err) {
                    return next(new httpErrors.InternalServerError(err));
                }

                res.send(html);
            });
        });
    } else if (config.renderWithHtmlizer) {
        app.get('/', function (req, res, next) {
            renderWithHtmlizer(pathModule.resolve(resolvedPublicdir, 'index.html'), function (err, html) {
                if (err) {
                    return next(new httpErrors.InternalServerError(err));
                }

                res.send(html);
            });
        });
    }

    app.use(express.static(resolvedPublicdir));

    return app;
};
