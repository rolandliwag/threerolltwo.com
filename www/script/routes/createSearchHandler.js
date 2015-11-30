define([
	'knockout',
	'3rdparty/page',
    'tpl!script/views/search.ko'
], function (ko, page) {
	function createHandler(backend, pageState) {
		function SearchViewModel() {
			this.query = ko.observable();
			this.results = ko.observableArray([]);
		}
		
		SearchViewModel.prototype.search = function () {
			page.show('/search/' + this.query());
		};
		
		SearchViewModel.prototype.handleBackendResponse = function (response) {
		};
		
		SearchViewModel.prototype.handleBackendError = function (err) {
		};
		
        return function (context, next) {
			var viewModel = new SearchViewModel();

			pageState({
				template: 'search',
				data: viewModel
			});

			backend.search(context.params.query).then(viewModel.handleBackendResponse.bind(viewModel))
            .catch(viewModel.handleBackendError.bind(viewModel));
        };
	}
	
	return createHandler;
});