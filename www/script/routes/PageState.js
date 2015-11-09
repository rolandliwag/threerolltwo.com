define([
    'knockout'
], function (ko) {
    function PageState() {
        this.template = ko.observable('');
        this.data = ko.observable();
    }

    return PageState;
});
