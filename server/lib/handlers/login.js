var jwt = require('jsonwebtoken'),
	validation = require('one-validation');

module.exports = function createHandler(config) {
    var authConfig = config.auth,
        maxAge = authConfig.maxAge;

    return function (req, res, next) {
        var email = req.body.email,
            password = req.body.password;

        var token = jwt.sign({
                email: email,
                password: password
            }, authConfig.secret, maxAge);

        res.cookie(authConfig.cookieName, token, maxAge);
        res.status(200).send();
    };
};
