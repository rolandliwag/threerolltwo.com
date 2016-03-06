var jwt = require('jsonwebtoken');

module.exports = function createHandler(config) {
    var authConfig = config.auth,
        maxAge = authConfig.maxAge;

    return function (req, res, next) {
        var email = req.body.email,
            password = req.body.password;

        if (!authConfig.acceptAnyPassword && (email !== authConfig.email || password !== authConfig.password)) {
            return res.status(403).send();
        }

        var token = jwt.sign({
                email: email,
                password: password
            }, authConfig.secret, maxAge);

        res.cookie(authConfig.cookieName, token, maxAge);
        res.status(200).send();
    };
};
