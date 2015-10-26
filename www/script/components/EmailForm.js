define([
    'knockout',
    '3rdparty/one-validation'
], function (ko, validation) {
    function EmailFormViewModel(backend) {
        var that = this;

        this.backend = backend;

        this.email = ko.observable();
        this.displaySuccess = ko.observable(false);
        this.error = ko.observable();

        this.disableSubscribeButton = ko.computed(function () {
            return !validation.email.test(that.email());
        });
    }

    EmailFormViewModel.prototype.subscribe = function () {
        var that = this,
            email = this.email();

        this.email('');

        this.backend.subscribeToNewsletter(email)
            .then(function (res) {
                that.displaySuccess(true);
            })
            .catch(function (res) {
                that.error('Your email address could not be added at this time. Please try again later');
            });
    };

    return ko.components.register('cmp-email-form', {
        viewModel: EmailFormViewModel,
        template: {
            require: 'text!components/EmailForm.ko'
        }
    });
});
