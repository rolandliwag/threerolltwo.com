define([
    'knockout'
], function (ko) {
    function Article(backend) {
        this.backend = backend;

        this.url = ko.observable();
        this.title = ko.observable();
        this.subheading = ko.observable();
        this.topImageAlt = ko.observable();
        this.topImageSrc = ko.observable();
        this.content = ko.observable();
        this.shortContent = ko.observable();
    }

    return Article;
});
