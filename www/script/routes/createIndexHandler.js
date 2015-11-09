define([
    'tpl!script/views/index.ko'
], function () {
    return function createHandler(backend, pageState) {

        return function (context, next) {
            pageState.template('index');
            pageState.data({});

            console.log(context);
        };
    };
});
