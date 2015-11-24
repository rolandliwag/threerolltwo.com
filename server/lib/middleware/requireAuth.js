var jwt = require('jsonwebtoken'),
    httpErrors = require('httperrors');

/**
 * This middleware should be placed before private routes.
 */
module.exports = function createMiddleware(authConfig) {
    if (!('secret' in authConfig) || !('maxAge' in authConfig)) {
        throw new Error('secret and maxAge must be provided');
    }

    var secret = authConfig.secret,
        maxAge = authConfig.maxAge;

    return function (req, res, next) {
        var token = req.cookies[authConfig.cookieName];

        if (!token) {
            return next(new httpErrors.Unauthorized());
        }

        if (!jwt.verify(token, secret, {maxAge: maxAge})) {
            return next(new httpErrors.Unauthorized());
        }

        next();
    };
};
