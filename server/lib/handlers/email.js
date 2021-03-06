var express = require('express'),
	httpErrors = require('httperrors'),
	validation = require('one-validation');

module.exports = function createHandler(config, dal) {
	var app = express();

	app.post('/', function (req, res, next) {
		var email = req.body.email;

		if (!validation.email.test(email)) {
			return next(new httpErrors.BadRequest({
				data: 'Invalid email'
			}));
		}

		dal.email.add(email)
            .then(function () {
                res.status(200).send();
            })
            .catch(function (err) {
                next(new httpErrors.InternalServerError(err));
            });
	});

	app.use(function (req, res, next) {
		next(new httpErrors.MethodNotAllowed());
	});

	return app;
};
