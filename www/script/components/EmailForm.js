define([
    'knockout'
], function (ko) {
    function EmailFormViewModel() {
        this.email = ko.observable();
    }

    return ko.components.register('cmp-email-form', {
        viewModel: EmailFormViewModel,
        template: {
            require: 'text!components/EmailForm.ko'
        }
    });
});
