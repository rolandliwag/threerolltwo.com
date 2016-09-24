define([
    'knockout',
    '3rdparty/page',
    'script/routes/PageState',
    'script/routes/createIndexHandler',
	'script/routes/createSearchHandler',
    'script/routes/createArticleHandler',
    'script/routes/createLoginHandler',
    'script/routes/createAdminHandler',
    'script/routes/create404Handler',
    'tpl!script/views/401.ko'
], function (ko, page, PageState, createIndexHandler, createSearchHandler, createArticleHandler, createLoginHandler, createAdminHandler, create404Handler) {
    function Router(backend, initialRoute) {
        var that = this;

        /**
         * @public
         */
        this.currentRoute = ko.observable({
            template: '',
            data: null
        });

        function requireAuth(context, next) {
            backend.getAuth().then(next).catch(function () {
                that.currentRoute({
                    template: '401',
                    data: {}
                });
            });
        }

        page('/login', createLoginHandler(backend, this.currentRoute));
        page('/admin', requireAuth, createAdminHandler(backend, this.currentRoute));

        page('/', createIndexHandler(backend, this.currentRoute));
		page('/search/:query', createSearchHandler(backend, this.currentRoute));
        page('/:url', createArticleHandler(backend, this.currentRoute));

        page('*', create404Handler(backend, this.currentRoute));
    }

    Router.prototype.start = function () {
        page.start();
    };

    return Router;
});
