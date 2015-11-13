define([
    'knockout',
    'script/models/Article',
    'tpl!script/views/admin.ko'
], function (ko, Article) {
    function createHandler(backend, pageState) {
        function AdminViewModel() {
            this.article = new Article();
            this.requesting = ko.observable();
        }

        AdminViewModel.prototype.submit = function () {
            var that = this;

            this.requesting(true);
            backend.add(this.article).then(function () {
                that.requesting(false);
            })
            .catch(function () {
                that.requesting(false);
            });
        };

        return function (context, next) {
            pageState.template('admin');
            pageState.data(new AdminViewModel());
        };
    };

    return createHandler;
});
