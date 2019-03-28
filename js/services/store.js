app.factory("store", function ($http, $rootScope) {
	var _getItem = function () {
		return $rootScope.page;
	};

	var _setItem= function (item) {
		return $rootScope.page = item;
	};

	return {

		getItem: _getItem,
		setItem: _setItem
	};
});