define([
    'knockout'
], function (ko) {
    function Article(backend) {
        this.backend = backend;

        this.title = ko.observable();
        this.subheading = ko.observable();
        this.topImage = ko.observable();
        this.content = ko.observable();
        this.shortContent = ko.observable();
    }

    return Article;
});
