define([
    'tpl!script/views/index.ko'
], function () {
    function createHandler(backend, pageState) {
        return function (context, next) {
            backend.getArticle(context.params.url).then(function (article) {
                pageState.template('article');
                pageState.data(article);
            })
            .catch(function () {
                next('Unable to load articles');
            });
        };
    };

    return createHandler;
});
