define([
    'knockout'
], function (ko) {
    function MainViewModel() {
    }

    return ko.components.register('cmp-main', {
        viewModel: MainViewModel,
        template: GETTEXT('script/components/Main.ko')
   });
});
