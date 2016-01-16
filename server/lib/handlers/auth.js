var express = require('express'),
    jwt = require('jsonwebtoken'),
	validation = require('one-validation'),
    requireAuth = require('../middleware/requireAuth');

module.exports = function createHandler(config) {
    var app = express(),
        authConfig = config.auth,
        maxAge = authConfig.maxAge;

    app
        .get('/', requireAuth(authConfig))
        .post('/', function (req, res, next) {
            var email = req.body.email,
                password = req.body.password;

            var token = jwt.sign({
                    email: email,
                    password: password
                }, authConfig.secret, maxAge);

            res.cookie(authConfig.cookieName, token, maxAge);
            res.status(200).send();
        });

    return app;
};
