app.controller("panelmedicationsCtrl", function ($scope, list, units, metadata, medicationService, $location, store, $routeParams) {
  $scope.app = 'DB Panel';
	$scope.item = list.data;
	$scope.units = units.data;
	$scope.listTable = list.data;
	$scope.json = metadata;
	$scope.listTable.forEach(function(item){ item.units = item.units.name; });
	$scope.new = {'name':null, 'orientation':null, 'quantity':null, 'units':null};
	$scope.handler = $scope;
	
});