require([
    'jquery',
    'knockout',
    'script/Application'
], function ($, ko, Application) {
    var app = new Application();

    $(function () {
        ko.applyBindings(app, document.body);
    });
});
