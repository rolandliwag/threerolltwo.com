define([
    'knockout',
    '3rdparty/bluebird',
    '3rdparty/axios',
    'underscore'
], function (ko, Promise, request, _) {
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

    Backend.prototype.login = function (email, password) {
        return this.request({
            url: '/login',
            method: 'POST',
            data: {
                email: email,
                password: password
            }
        });
    };

    Backend.prototype.getArticles = function (offset) {
        return this.request({
            url: '/article'
        });
    };

    Backend.prototype.getArticle = function (url) {
        return this.request({
            url: '/article/' + url
        });
    };

    Backend.prototype.add = function (article) {
        console.log(article.url());
        return this.request({
            url: '/article/' + article.url(),
            method: 'PUT',
            data: ko.utils.unwrapObservable(article)
        });
    };

    return Backend;
});
