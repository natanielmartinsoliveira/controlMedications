app.config(function ($routeProvider) {

	$routeProvider.when("/", {
		templateUrl: "view/index.html",
		controller: "panelmedicationsCtrl",
		resolve: {
			list: function (medicationService) {
				return medicationService.getItem();
			},
			units: function (medicationService) {
				return medicationService.getUnits();
			},
			metadata: function (medicationService) {
				return medicationService.getMetadata();
			}
		}
	});

	$routeProvider.when("/list", {
		templateUrl: "view/list.html",
		controller: "medicationsCtrl",
		resolve: {
			list: function (medicationService) {
				return medicationService.getItem();
			},
			units: function (medicationService) {
				return medicationService.getUnits();
			},
			metadata: function (medicationService) {
				return medicationService.getMetadata('list');
			}
		}
	});

	$routeProvider.when("/new", {
		templateUrl: "view/new.html",
		controller: "newmedicationsCtrl",
		resolve: {
			list: function (medicationService) {
				return medicationService.getItem();
			},
			units: function (medicationService) {
				return medicationService.getUnits();
			},
			metadata: function (medicationService) {
				return medicationService.getMetadata('new');
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
			},
			metadata: function (medicationService) {
				return medicationService.getMetadata('edit');
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
			},
			metadata: function (medicationService) {
				return medicationService.getMetadata();
			}
		}
	});

	$routeProvider.otherwise({redirectTo: "/"});
});