define([
    'tpl!script/views/404.ko'
], function () {
    function createHandler(backend, pageState) {
        return function (context, next) {
            pageState({
                template: '404',
                data: {}
            });
        };
    };

    return createHandler;
});
