app.controller("editmedicationsCtrl", function ($scope, list, units, medicationService, $location, $routeParams) {

	$scope.item = list.data;
	$scope.units = units.data;
	$scope.app = 'Update';

	$scope.updt = function (id, item) {
		console.log(id, item);
		medicationService.putItem(id, item).success(function (data) {
			$location.path("/");
		});
	};
	
});