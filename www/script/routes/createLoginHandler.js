define([
    'knockout',
    'tpl!script/views/login.ko'
], function (ko) {
    function createHandler(backend, pageState) {
        function LoginViewModel() {
            this.email = ko.observable();
            this.password = ko.observable();
        }

        LoginViewModel.prototype.submit = function () {
            backend.login(this.email(), this.password());
        };

        return function (context, next) {
            pageState.template('login');
            pageState.data(new LoginViewModel());
        };
    };

    return createHandler;
});
