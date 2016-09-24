define([
    'knockout'
], function (ko) {
    function Article(backend, data) {
        var backend = backend;

        data = data || {};

        this.url = ko.observable(data.url);
        this.title = ko.observable(data.title);
        this.subheading = ko.observable(data.subheading);
        this.topImageAlt = ko.observable(data.topImageAlt);
        this.topImageSrc = ko.observable(data.topImageSrc);
        this.content = ko.observable(data.content);
        this.shortContent = ko.observable(data.shortContent);
    }

    Article.prototype.toData = function () {
        return {
            url: this.url(),
            title: this.title(),
            subheading: this.subheading(),
            topImageAlt: this.topImageAlt(),
            topImageSrc: this.topImageSrc(),
            content: this.content(),
            shortContent: this.shortContent()
        };
    };

    return Article;
});
