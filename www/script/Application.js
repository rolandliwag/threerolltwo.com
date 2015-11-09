define([
    'knockout',
    '3rdparty/bluebird',
    'script/Backend',
    'script/Router',
    'script/components/EmailForm'
], function (ko, Promise, Backend, Router) {
    function Application() {
        var that = this;

        this.backend = new Backend({
            hostname: CONFIG.api.hostname
        });

        this.router = new Router(this.backend, window.location.pathname);

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

    Application.prototype.init = function () {
        this.router.start();
    };

    return Application;
});
