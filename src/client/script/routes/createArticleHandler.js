define([
    'script/models/Article',
    'tpl!script/views/article.ko'
], function (Article) {
    function createHandler(backend, pageState) {
        return function (context, next) {
            backend.getArticle(context.params.url).then(function (response) {
                pageState({
                    template: 'article',
                    data: new Article(backend, response.data)
                });
            })
            .catch(function (err) {
                next('Unable to load article');
            });
        };
    };

    return createHandler;
});
