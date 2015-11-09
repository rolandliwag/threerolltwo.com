require([
    'jquery',
    'knockout',
    'script/Application'
], function ($, ko, Application) {
    var app = new Application();

    app.init();
    ko.applyBindings(app, document.body);
});
