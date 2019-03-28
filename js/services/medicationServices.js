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

		var metadata = {};

		var metadataNew = [{
			    "component": "itemForm",
			    "type": "itemgroup",
			    "component_type": "form",
			    "visible_panel" : 'false',
			    "name_parent" : 'Novo Medicamento',
			    "id" : 'panel_1',
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
			        "type": "submit",
			        "color": "primary",
			        "class": "btn-block btn-lg marginTop-20",
			        "link": "edit/",
			        "input_type": "click",
			        "function":'add'
			      }]
			    }]
			  },{
			    "component": "itemList",
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


			  var metadataEdit = [{
			    "component": "itemForm",
			    "type": "itemgroup",
			    "component_type": "form",
			    "visible_panel" : 'false',
			    "name_parent" : 'Editar Medicamento',
			    "id" : 'panel_2',
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
			    "component": "itemList",
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

			  var metadataList = [{
			    "component": "itemList",
			    "type": "itemgroup",
			    "component_type": "grid",
			    "visible_panel" : 'true',
			    "name_parent" : 'Lista de dados',
			    "id" : 'panel_3',
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
			    "component": "itemList",
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

		if(reference == 'new'){

			metadata['new'] = metadataNew;	

		}else if(reference == 'edit'){

			metadata['edit'] = metadataEdit;

		}else if(reference == 'list'){

			metadata['list'] = metadataList;

		}else{

			metadata['new'] = metadataNew;
			metadata['edit'] = metadataEdit;
			metadata['list'] = metadataList;
			metadata['header'] = [{
			    "component": "itemList",
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