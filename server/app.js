var express = require('express'),
    morgan = require('morgan'),
    pathModule = require('path');

module.exports = function createServer(config) {
    var app = express(),
        resolvedPublicdir = pathModule.resolve(__dirname, config.publicDir);

    app.use(morgan('combined'));

    if (config.compiless) {
        app.use(require('express-compiless')({root: resolvedPublicdir}));
    }
console.log(config.publicDir);
    app.use('/', express.static(resolvedPublicdir));

    return app;
};
