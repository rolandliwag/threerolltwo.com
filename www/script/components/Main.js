define([
    'knockout'
], function (ko) {
    function MainViewModel() {
    }

    return ko.components.register('cmp-main', {
        viewModel: MainViewModel,
        template: {
            require: 'text!components/Main.ko'
        }
    });
});
