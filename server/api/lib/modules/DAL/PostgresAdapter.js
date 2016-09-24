'use strict';

var pg = require('pg'),
    passError = require('passerror'),
    async = require('async'),
    Promise = require('bluebird');

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

    this.runTransaction = function (queries) {
        return new Promise(function (resolve, reject) {
            pg.connect(dbConfig.url, passError(reject, function (client, done) {
                client.query('BEGIN TRANSACTION', function (err, result) {
                    if (err) {
                        done();
                        return reject(err);
                    }

                    function rollback(err) {
                        client.query('ROLLBACK', function (rollbackErr) {
                            if (rollbackErr) {
                                done(true);
                            }

                            reject(err);
                        });
                    }

                    async.eachSeries(queries, client.query.bind(client), function (err, result) {
                        if (err) {
                            return rollback(err);
                        }

                        client.query('COMMIT', function (commitErr) {
                            if (commitErr) {
                                return rollback(err);
                            }

                            done();
                            resolve(result);
                        });
                    });
                });
            }));
        });
    };
}

module.exports = PostgresAdapter;
