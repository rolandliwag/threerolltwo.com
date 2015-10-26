define([
    '3rdparty/bluebird',
    '3rdparty/axios'
], function (Promise, request) {
    function Backend(config) {
        this.request = request;
    }

    Backend.prototype.subscribeToNewsletter = function (email) {
        return this.request({
            url: '/email',
            method: 'POST',
            data: email
        });
    };

    return Backend;
});
