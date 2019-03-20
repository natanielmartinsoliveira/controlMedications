app.config(function ($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "view/list.html",
		controller: "medicationsCtrl",
		resolve: {
			list: function (medicationService) {
				return medicationService.getItem();
			},
			units: function (medicationService) {
				return medicationService.getUnits();
			}
		}
	});

	$routeProvider.when("/new", {
		templateUrl: "view/new.html",
		controller: "medicationsCtrl",
		resolve: {
			list: function (medicationService) {
				return medicationService.getItem();
			},
			units: function (medicationService) {
				return medicationService.getUnits();
			}
		}
	});

	$routeProvider.when("/edit/:id", {
		templateUrl: "view/edit.html",
		controller: "editmedicationsCtrl",
		resolve: {
			list: function (medicationService, $route) {
				return medicationService.getItembyid($route.current.params.id);
			},
			units: function (medicationService) {
				return medicationService.getUnits();
			}
		}
	});

	$routeProvider.when("/delete/:id", {
		controller: "medicationsCtrl",
		resolve: {
			contato: function (medicationService, $route) {
				return medicationService.deleteItem($route.current.params.id);
			},
			units: function (medicationService) {
				return medicationService.getUnits();
			}
		}
	});

	$routeProvider.otherwise({redirectTo: "/"});
});