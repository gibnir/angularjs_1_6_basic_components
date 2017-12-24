(function () {

	var app = angular.module('app-controllers', [
		'app-services',
		'app-directives'
		]);

	app.controller('appController', [
		'appService',
		function (appService) {
			var store = this;
			store.products = [];

			appService().then(function (data) {
				store.products = data;
			});
		}]);

})();
