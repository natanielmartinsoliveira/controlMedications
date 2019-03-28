app.directive("uAlert", function () {
	return {
		templateUrl: "view/component/alert.html",
		replace: true,
		restrict: "AE",
		scope: {
			title: "@"
		},
		transclude: true
	};
});