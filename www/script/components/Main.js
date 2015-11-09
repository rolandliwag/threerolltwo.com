define([
    'knockout',
    'tpl!script/components/Main.ko'
], function (ko) {
    function MainViewModel(backend) {
        this.backend = backend;
    }

    return ko.components.register('cmp-main', {
        viewModel: MainViewModel,
        template: {
            element: 'Main'
        }
   });
});
