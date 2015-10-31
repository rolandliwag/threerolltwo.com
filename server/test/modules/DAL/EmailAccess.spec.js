var expect = require('unexpected'),
    sinon = require('sinon'),
    EmailAccess = require('../../../lib/modules/DAL/EmailAccess');

require('sinon-as-promised');

describe('DAL/EmailAccess', function () {
    var db = {
            query: sinon.stub()
        },
        email;

    expect = expect.clone().installPlugin(require('unexpected-sinon'));

    beforeEach(function () {
        email = new EmailAccess(db);
    });

    it('should call db.query with email when calling .add()', function () {
        db.query.resolves();

        return email.add('valid@example.com').then(function () {
            expect(db.query, 'was called with', {values: ['valid@example.com']});
        });
    });

    afterEach(function () {
        db.query.reset();
    });
});
