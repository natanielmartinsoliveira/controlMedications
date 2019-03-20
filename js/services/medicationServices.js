app.factory("medicationService", function ($http) {
	var _getItem = function () {
		return $http.get("http://localhost:4000/list");
	};

	var _getItembyid = function (id) {
		return $http.get("http://localhost:4000/edit/" + id);
	};

	var _getUnits= function (id) {
		return $http.get("http://localhost:4000/units/");
	};

	var _saveItem = function (item) {
		return $http.post("http://localhost:4000/list", item);
	};

	var _deleteItem = function (id) {
		return $http.delete("http://localhost:4000/list/"+ id);
	};

	var _putStock = function (id, item) {
		return $http.put("http://localhost:4000/stock/"+ id, item);
	};

	var _putItem = function (id, item) {
		return $http.put("http://localhost:4000/list/"+ id, item);
	};

	return {

		getItem: _getItem,
		getItembyid: _getItembyid,
		getUnits: _getUnits,
		saveItem: _saveItem,
		deleteItem: _deleteItem,
		putStock: _putStock,
		putItem: _putItem
	};
});