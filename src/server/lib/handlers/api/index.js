const express = require('express');

module.exports = function createHandlers(config, dal) {
    const app = express();

    app.get('/page/:pageUrl', (req, res, next) => {
        res.send(req.params.pageUrl);
    });

    return app;
};
