define([
    'script/models/Article',
    'tpl!script/views/index.ko'
], function (Article) {
    function createHandler(backend, pageState) {
        return function (context, next) {
            backend.getArticles().then(function (articles) {
                pageState.template('index');
                pageState.data(articles.map(function (data) {
                    return new Article(data);
                }));
            })
            .catch(function () {
                next('Unable to load articles');
            });
        };
    };

    return createHandler;
});
