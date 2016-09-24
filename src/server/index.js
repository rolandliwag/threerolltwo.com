require('babel-register')();

const express = require('express');
const morgan = require('morgan');
const pathModule = require('path');
const DAL = require('./lib/modules/DAL');

module.exports = function createServer(config) {
    const app = express();
    const dal = new DAL(config.db);
    
    const resolvedPublicdir = pathModule.resolve(__dirname, config.publicDir);

    app.use(morgan('combined'));

    if (config.compiless) {
        app.use(require('express-compiless')({root: resolvedPublicdir}));
    }

    app.use(require('./lib/handlers')(config, dal));

    app.use(express.static(resolvedPublicdir));

    return app;
};
