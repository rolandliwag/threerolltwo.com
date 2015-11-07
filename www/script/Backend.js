define([
    '3rdparty/bluebird',
    '3rdparty/axios',
    'underscore'
], function (Promise, request, _) {
    function Backend(config) {
        var hostname = config.hostname;

        this.request = function (opts) {
            opts = _.defaults({url: hostname + opts.url}, opts);
            return request(opts);
        };
    }

    Backend.prototype.subscribeToNewsletter = function (email) {
        return this.request({
            url: '/email',
            method: 'POST',
            data: {
                email: email
            }
        });
    };

    Backend.prototype.getArticles = function (offset) {
    };

    return Backend;
});
