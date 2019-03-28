
app.directive('uForm', function(RecursionHelper) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      panelitems: '=',
      data:'=',
      units:'=',
      handler:'='
    },
    template: "<div><form name='{{panelitems.component}}'> " +
                  "<u-formitems parentform='panelitems.component' items='panelitems' data='data' unit='units'></u-formitems>" +
                  "</form>"+
                  "<div ng-show='itemForm.orientation.$error.required && itemForm.orientation.$dirty' class='alert alert-danger'>"+
                  '  Por favor, preencha o campo orientatação!'+
                  '</div>'+
                   "<div ng-show='itemForm.name.$dirty' ng-messages='itemForm.name.$error'>" + 
                    '<div ng-message="required" class="alert alert-danger">'+
                    '  Por favor, preencha o campo nome!'+
                    '</div>'+
                  '</div>'+
              '</div>',
    compile: function(element) {
      return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn) {});
    },
    controller: function($scope, medicationService, $location, $window) {

      $scope.updt = function (id, item) {
        medicationService.putItem(id, item).success(function (data) {
          $location.path("/");
          $scope.handler.open('list');
        });
      };
      $scope.add = function (item) {

        medicationService.saveItem(item).success(function (data) {
          delete $scope.task;
          $scope.itemForm.$setPristine();
          $location.path("/");
          $scope.handler.open('list');
          $window.location.reload();

        });
      };

    },link: function(){

    }
  };
});

app.directive('uFormitems', function(RecursionHelper) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      items: '=',
      parentform: '=',
      unit:'='
    },
    template: '<div ng-repeat="item in items.children">' +
      '<u-formitems parentform="parentform" items="item"></u-formitems>' +

      '<div ng-if="item.type == ' + "'input'" + '">' +
      '<u-text u-type="{{item.input_type}}" u-model="data[item.key]" u-name="{{item.key}}" u-required="{{item.required}}" placeholder={{item.name}} ></u-text>' +
      '</div>' +
      '<div ng-if="item.type == ' + "'select'" + '">' +
      '<u-select u-model="data[item.key]" u-data="units"></u-select>' +
      '</div>' +
        '<div ng-if="item.type == ' + "'button'" + ' || item.type == ' + "'submit'" + '" >' +
            '<div ng-if="item.function == ' + "'upt'" + '" >' +
              '<u-button u-type="{{item.type}}" u-color="{{item.color}}" u-class="{{item.class}}" ng-click="updt(data.id, data)" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
            '</div>' +
            '<div ng-if="item.function == ' + "'add'" + '" >' +
              '<u-button u-type="{{item.type}}" u-color="{{item.color}}" u-class="{{item.class}}" ng-click="add(data)" u-disable="itemForm.$invalid"><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
            '</div>' +
            '<div ng-if="!item.function" >' +
              '<u-button u-type="{{item.type}}" u-color="{{item.color}}" u-class="{{item.class}}" u-link="{{item.link}}{{line.id}}" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
            '</div>' +
        '</div>' +
      '</div>'
  };
});
