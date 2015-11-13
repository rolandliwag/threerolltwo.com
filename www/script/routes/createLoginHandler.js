define([
    'knockout',
    '3rdparty/page',
    'tpl!script/views/login.ko'
], function (ko, page) {
    function createHandler(backend, pageState) {
        function LoginViewModel() {
            this.email = ko.observable();
            this.password = ko.observable();
            this.requesting = ko.observable();
        }

        LoginViewModel.prototype.submit = function () {
            var that = this;

            this.requesting(true);
            backend.login(this.email(), this.password()).then(function (response) {
                that.requesting(false);

                page('/admin');
            })
            .catch(function (err) {
            });
        };

        return function (context, next) {
            pageState.template('login');
            pageState.data(new LoginViewModel());
        };
    };

    return createHandler;
});
