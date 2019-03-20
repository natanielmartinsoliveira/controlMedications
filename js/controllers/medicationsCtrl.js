app.controller("medicationsCtrl", function ($scope, list, units, medicationService, $location) {
	$scope.app = "Medications";
	$scope.list = list.data;
	$scope.units = units.data;
	console.log(list.data);

	$scope.add = function (item) {
		medicationService.saveItem(item).success(function (data) {
			delete $scope.task;
			$scope.itemForm.$setPristine();
			$location.path("/");
		});
	};
	$scope.del = function (id) {

		$scope.list.forEach(function (item) {
			if (item.id == id) {
				medicationService.deleteItem(item.id).success(function (data) {
					$scope.list = data;
					$location.path("/");
				});
			}	
		});
	};

	$scope.updtStock = function (item, status) {
		listServices.putStock(item, status).success(function (data) {
			$location.path("/");
		});
	};

	$scope.hasSelected = function (items) {
		return items.some(function (item) {
			return item.selectedValue;
		});
	};


	
});