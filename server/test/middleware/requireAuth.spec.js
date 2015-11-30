var expect = require('unexpected'),
    requireAuth = require('../../lib/middleware/requireAuth');

describe('requireAuth', function () {
    it('should require config.secret and config.maxAge', function () {
        expect(requireAuth.bind(null, {}), 'to throw');
    });

    it('should return a function', function () {
        expect(requireAuth.bind(null, {
            secret: '123',
            maxAge: '1h'
        }), 'to be a function');
    });
});
