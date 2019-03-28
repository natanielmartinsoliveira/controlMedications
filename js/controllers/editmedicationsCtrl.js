app.controller("editmedicationsCtrl", function ($scope, list, units, metadata, medicationService, $location, $routeParams) {

	$scope.item = list.data;
	$scope.units = units.data;
	$scope.app = 'Update';
	console.log(metadata);
    $scope.json = metadata.edit;

	
});