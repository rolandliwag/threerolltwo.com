var jwt = require('jsonwebtoken'),
	validation = require('one-validation');

module.exports = function createHandler(config) {
    return function (req, res, next) {
        var email = req.body.email,
            password = req.body.password;

        console.log(email, password);

        setTimeout(function () {
            res.status(200).send();
        }, 5000);
    };
};
