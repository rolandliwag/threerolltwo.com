'use strict';

var pg = require('pg');

function PostgresAdapter(dbConfig) {

	this.query = function (config) {
        return new Promise(function (resolve, reject) {
            pg.connect(dbConfig.url, function (err, client, done) {
                console.log('yay');
                done();
                resolve();
            });
        });
	};
};

module.exports = PostgresAdapter;
