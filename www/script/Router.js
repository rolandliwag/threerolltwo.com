define([
    'knockout',
    '3rdparty/page',
    'script/routes/PageState',
    'script/routes/createIndexHandler',
    'script/routes/createArticleHandler',
    'script/routes/createLoginHandler',
    'script/routes/createAdminHandler',
    'script/routes/create404Handler'
], function (ko, page, PageState, createIndexHandler, createArticleHandler, createLoginHandler, createAdminHandler, create404Handler) {
    function Router(backend, initialRoute) {
        var that = this;

        /**
         * @public
         */
        this.currentRoute = ko.observable({
            template: '',
            data: null
        });

        page('/login', createLoginHandler(backend, this.currentRoute));
        page('/admin', createAdminHandler(backend, this.currentRoute));

        page('/', createIndexHandler(backend, this.currentRoute));
        page('/:url', createArticleHandler(backend, this.currentRoute));

        page('*', create404Handler(backend, this.currentRoute));
    }

    Router.prototype.start = function () {
        page.start();
    };

    return Router;
});
