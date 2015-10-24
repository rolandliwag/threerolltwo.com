require([
    'jquery',
    'knockout',
    'Application'
], function ($, ko, Application) {
    var app = new Application();

    $(function () {
        ko.applyBindings(app, document.body);
    });
});
