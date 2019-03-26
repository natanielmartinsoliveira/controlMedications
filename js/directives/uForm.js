
app.directive('uForm', function(RecursionHelper) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      panelitems: '=',
      data:'=',
      units:'='
    },
    template: "<form name='{{panelitems.form}}'> " +
      "<u-formitems parentform='panelitems.form' items='panelitems' data='data' unit='units'></u-formitems>" +
      "</form>",
    compile: function(element) {
      return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn) {});
    },
    controller: function($scope, medicationService, $location) {
      $scope.submit = function(form) {

      };

      $scope.redirect = function(destination) {

      };
      $scope.updt = function (id, item) {
        medicationService.putItem(id, item).success(function (data) {
          $location.path("/");
        });
      };
      $scope.add = function (item) {
        console.log($scope,item);
        medicationService.saveItem(item).success(function (data) {
          delete $scope.task;
          $scope.itemForm.$setPristine();
          $location.path("/");
        });
      };

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
      '<u-text u-type="{{item.input_type}}" u-model="data[item.key]" u-name="{{item.key}}" placeholder={{item.name}}></u-text>' +
      '</div>' +
      '<div ng-if="item.type == ' + "'select'" + '">' +
      '<u-select u-model="data[item.key]" u-data="units"></u-select>' +
      '</div>' +
        '<div ng-if="item.type == ' + "'button'" + '" >' +
            '<div ng-if="item.function == ' + "'upt'" + '" >' +
              '<u-button u-color="{{item.color}}" u-class="{{item.class}}" ng-click="updt(data.id, data)" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
            '</div>' +
            '<div ng-if="item.function == ' + "'add'" + '" >' +
              '<u-button u-color="{{item.color}}" u-class="{{item.class}}" ng-click="add(data)"  ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
            '</div>' +
            '<div ng-if="!item.function" >' +
              '<u-button u-color="{{item.color}}" u-class="{{item.class}}"  u-link="{{item.link}}{{line.id}}" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
            '</div>' +
        '</div>' +
      '</div>'
  };
});
