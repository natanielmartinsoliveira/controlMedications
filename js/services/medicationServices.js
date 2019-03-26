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

	var _putItem = function (id, item) {
		return $http.put("http://localhost:4000/list/"+ id, item);
	};

	var _getMetadata = function (reference) {

		if(reference == 'new'){

			var metadata = [{
			    "form": "itemForm",
			    "type": "itemgroup",
			    "children": [{
			      "type": "itemgroup",
			      "children": [{
			        "tooltip": "",
			        "name": "Name",
			        "required": "true",
			        "key": "name",
			        "of": "itemForm",
			        "type": "input",
			        "input_type": "text"
			      }, {
			        "tooltip": "",
			        "name": "Orientation",
			        "required": "true",
			        "key": "orientation",
			        "of": "itemForm",
			        "type": "input",
			        "input_type": "text"
			      },{
			        "tooltip": "",
			        "name": "Quantity",
			        "required": "true",
			        "key": "quantity",
			        "of": "itemForm",
			        "type": "input",
			        "input_type": "number"
			      }, {
			        "tooltip": "",
			        "name": "New password",
			        "required": "true",
			        "key": "units",
			        "of": "itemForm",
			        "type": "select",
			        "input_type": "select"
			      }, {
			        "infotext": "Save Form",
			        "of": "itemForm",
			        "type": "button",
			        "color": "primary",
			        "class": "btn-block btn-lg marginTop-20",
			        "link": "edit/",
			        "input_type": "click",
			        "function":'add'
			      }]
			    }]
			  },{
			    "list": "itemList",
			    "page": "Medication - Control",
			    "type": "itemgroup",
			    "children": [{
			        "infotext": "Medication control",
			        "name": "text",
			        "required": "true",
			        "key": "#",
			        "of": "itemForm",
			        "class": "d-inline p-2 col-md-2",
			        "type": "header",
			        "input_type": "text"
			      }, {
			        "infotext": " New Medication",
			        "icon" : "fa-plus",
			        "of": "itemForm",
			        "type": "button",
			        "color": "primary",
			        "class": "btn-lg float-right",
			        "link": "new",
			        "parentStyle" : "padding:0; padding-top:15px;",
			        "input_type": "click"
			      }]
			  }];

		}else if(reference == 'edit'){

			var metadata = [{
			    "form": "itemForm",
			    "type": "itemgroup",
			    "children": [{
			      "type": "itemgroup",
			      "children": [{
			        "tooltip": "",
			        "name": "Name",
			        "required": "true",
			        "key": "name",
			        "of": "itemForm",
			        "type": "input",
			        "input_type": "text"
			      }, {
			        "tooltip": "",
			        "name": "Orientation",
			        "required": "true",
			        "key": "orientation",
			        "of": "itemForm",
			        "type": "input",
			        "input_type": "text"
			      },{
			        "tooltip": "",
			        "name": "Quantity",
			        "required": "true",
			        "key": "quantity",
			        "of": "itemForm",
			        "type": "input",
			        "input_type": "number"
			      }, {
			        "tooltip": "",
			        "name": "Units",
			        "required": "true",
			        "key": "units",
			        "of": "itemForm",
			        "type": "select",
			        "input_type": "select"
			      }, {
			        "infotext": "Save Form",
			        "of": "itemForm",
			        "type": "button",
			        "color": "primary",
			        "class": "btn-block btn-lg marginTop-20",
			        "link": "edit/",
			        "input_type": "click",
			        "function" : "upt"
			      }]
			    }]
			  },{
			    "list": "itemList",
			    "page": "Medication - Control",
			    "type": "itemgroup",
			    "children": [{
			        "infotext": "Medication control",
			        "name": "text",
			        "required": "true",
			        "key": "#",
			        "of": "itemForm",
			        "class": "d-inline p-2 col-md-2",
			        "type": "header",
			        "input_type": "text"
			      }, {
			        "infotext": " New Medication",
			        "icon" : "fa-plus",
			        "of": "itemForm",
			        "type": "button",
			        "color": "primary",
			        "class": "btn-lg float-right",
			        "link": "/new",
			        "parentStyle" : "padding:0; padding-top:15px;",
			        "input_type": "click"
			      }]
			  }];

		}else{

			var metadata = [{
			    "list": "itemList",
			    "type": "itemgroup",
			    "children": [{
			        "tooltip": "",
			        "name": "#",
			        "required": "true",
			        "key": "#",
			        "of": "itemForm",
			        "type": "text",
			        "input_type": "text"
			      },{
			        "tooltip": "",
			        "name": "Name",
			        "required": "true",
			        "key": "name",
			        "of": "itemForm",
			        "type": "text",
			        "input_type": "text"
			      }, {
			        "tooltip": "",
			        "name": "Orientation",
			        "required": "true",
			        "key": "orientation",
			        "of": "itemForm",
			        "type": "text",
			        "input_type": "text"
			      },{
			        "tooltip": "",
			        "name": "Quantity",
			        "required": "true",
			        "key": "quantity",
			        "of": "itemForm",
			        "type": "number",
			        "input_type": "number"
			      }, {
			        "tooltip": "",
			        "name": "Units",
			        "required": "true",
			        "key": "units",
			        "of": "itemForm",
			        "type": "text",
			        "input_type": "text"
			      }, {
			        "infotext": "",
			        "icon" : "fa-pen-square",
			        "of": "itemForm",
			        "type": "button",
			        "color": "success",
			        "class": "",
			        "parentStyle" : "padding:0; padding-top:15px;",
			        "link": "edit/",
			        "input_type": "click",
			        "function" : "upt"
			       }, {
			        "infotext": "",
			        "icon" : "fa-trash",
			        "of": "itemForm",
			        "type": "button",
			        "color": "danger",
			        "class": "",
			        "link": "",
			        "parentStyle" : "padding:0; padding-top:15px;",
			        "input_type": "click",
			        "function" : "del"
			      }]
			  },{
			    "list": "itemList",
			    "page": "Medication - Control",
			    "type": "itemgroup",
			    "children": [{
			        "infotext": "Medication control",
			        "name": "text",
			        "required": "true",
			        "key": "#",
			        "of": "itemForm",
			        "class": "d-inline p-2 col-md-2",
			        "type": "header",
			        "input_type": "text"
			      },{
			        "tooltip": "",
			        "name": "Name",
			        "required": "true",
			        "key": "name",
			        "of": "itemForm",
			        "type": "input",
			        "style":"margin-left: 40px;",
			        "class": "d-inline p-2 col-md-2",
			        "input_type": "text"
			      }, {
			        "infotext": " New Medication",
			        "icon" : "fa-plus",
			        "of": "itemForm",
			        "type": "button",
			        "color": "primary",
			        "class": "btn-lg float-right",
			        "link": "new",
			        "parentStyle" : "padding:0; padding-top:15px;",
			        "input_type": "click"
			      }]
			  }];

		}

		return metadata;
	};

	return {

		getItem: _getItem,
		getItembyid: _getItembyid,
		getUnits: _getUnits,
		saveItem: _saveItem,
		deleteItem: _deleteItem,
		putItem: _putItem,
		getMetadata : _getMetadata
	};
});