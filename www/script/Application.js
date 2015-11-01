define([
    'knockout',
    'script/Backend',
    'script/components/EmailForm',
    'script/components/Main'
], function (ko, Backend) {
    function Application() {
        var that = this;

        this.backend = new Backend();

        ko.components.loaders.unshift({
            loadViewModel: function (name, viewModelConfig, next) {
                if (typeof(viewModelConfig) !== 'function') {
                    return next(null);
                }

                next(function (params, componentInfo) {
                    var viewModel = new viewModelConfig(that.backend);
                    return viewModel;
                });
            }
        });
    }

    return Application;
});
