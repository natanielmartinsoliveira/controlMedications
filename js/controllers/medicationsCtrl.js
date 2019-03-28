app.controller("medicationsCtrl", function ($scope, list, metadata, units, medicationService, $location) {
	$scope.app = "Medications";
	$scope.list = list.data;
	$scope.listTable = list.data;
	$scope.units = units.data;
    $scope.json = metadata.list;

	// i.e. the rows
	if($scope.listTable){
     $scope.listTable.forEach(function(item){ item.units = item.units.name; });
    }

	
});