define([
    'knockout'
], function (ko) {
    function EditorViewModel() {
    }

    return ko.components.register('cmp-editor', {
        viewModel: EditorViewModel,
        template: {
            require: 'text!components/Editor.ko'
        }
    });
});
