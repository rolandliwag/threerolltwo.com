define([
    'knockout',
    'script/models/Article',
    'tpl!script/views/index.ko'
], function (ko, Article) {
    function createHandler(backend, pageState) {
        function IndexViewModel() {
            this.latestArticle = ko.observable();
            this.articles = ko.observableArray();

            this.init();
        }

        IndexViewModel.prototype.init = function () {
            var that = this;

            backend.getArticles().then(function (response) {
                var articles = response.data,
                    latestArticle = new Article(backend, articles.shift());

                that.latestArticle(latestArticle);
                that.articles(articles.map(function (article) {
                    return new Article(backend, article);
                }));
            })
        };

        return function (context, next) {
            pageState({
                template: 'index',
                data: new IndexViewModel()
            });
        };
    };

    return createHandler;
});
