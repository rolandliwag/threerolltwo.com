define([
    'knockout',
    '3rdparty/page',
    'script/routes/PageState',
    'script/routes/createIndexHandler',
    'script/routes/article',
    'script/routes/login',
    'script/routes/admin'
], function (ko, page, PageState, createIndexHandler, article, login, admin) {
    function Router(backend, initialRoute) {
        var that = this;

        /**
         * @public
         */
        this.currentRoute = new PageState();

        page('/', createIndexHandler(backend, this.currentRoute));
    }

    Router.prototype.start = function () {
        page.start();
    };

    return Router;
});
