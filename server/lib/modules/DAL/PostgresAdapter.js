'use strict';

var pg = require('pg'),
    passError = require('passerror');

function PostgresAdapter(dbConfig) {

	this.query = function (config) {
        return new Promise(function (resolve, reject) {
            pg.connect(dbConfig.url, passError(reject, function (client, done) {
                client.query(config, function (err, result) {
                    done();

                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }));
        });
	};
};

module.exports = PostgresAdapter;
