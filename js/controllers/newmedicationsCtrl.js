app.controller("newmedicationsCtrl", function ($scope, list, units, metadata, medicationService, $location, $routeParams) {
  $scope.app = 'Update';
	$scope.item = list.data;
	$scope.units = units.data;
  $scope.listTable = list.data;
  	
  $scope.json = metadata.new;
  $scope.listTable.forEach(function(item){ item.units = item.units.name; });
  $scope.new = {'name':null, 'orientation':null, 'quantity':null, 'units':null};

	
	
});