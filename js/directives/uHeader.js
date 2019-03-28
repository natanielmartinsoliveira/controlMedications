

app.directive('uContent', function(RecursionHelper) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      panelitems: '=',
      data:'=',
      units:'=',
      filterSearch:'=',
      handler:'='
    },
    template: "<header name='{{panelitems.header}}'> " + '<div style="height: 60px; margin:20px 20px;">' +
      "<u-header parentform='panelitems.header' items='panelitems' data='data' unit='units' filter-search='filterSearch' handler='handler' ></u-header>" + '</div>'+
      "</header>",
    compile: function(element) {
      return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn) {});
    },
    controller: function($scope, medicationService, $location) {

      $scope.add_panel = function () {
        $scope.handler.item_selecionado($scope.handler.new, 'new');
        $scope.handler.add('new');
      }

    },
    link: function(scope, element, attr, controller) {
      //console.log(scope);
    }
  };
});

app.directive('uHeader', function(RecursionHelper) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      items: '=',
      parentform: '=',
      unit:'=',
      filterSearch:'=',
      handler:'='
    },
    controller: function ($scope, $rootScope) {


    },
    link: function(scope, element, attr, controller) {
      //scope.handler.add('new');
      
      scope.handler.open('list');

    },
    template: '<div ng-repeat="item in items.children" class="d-inline">' +
      '<u-header parentform="parentform" items="item"></u-header>' +

      '<div ng-if="item.type == ' + "'input'" + '" class="d-inline" style="{{item.style}}">' +
      '<u-text u-type="{{item.input_type}}" u-model="filterSearch" u-name="filterSearch" placeholder={{item.infotext}} u-class="{{item.class}}"></u-text>' +
      '</div>' +
      '<div ng-if="item.type == ' + "'select'" + '">' +
      '<u-select u-model="data[item.key]" u-data="units"></u-select>' +
      '</div>' +
      '<div ng-if="item.type == ' + "'header'" + '" class="d-inline" >' +
      '<h3 class="{{item.class}}">{{item.infotext}}</h3>' +
      '</div>' +
      '<div ng-if="item.type == ' + "'button'" + '" class="d-inline">' +
      '<u-button u-type="{{item.type}}" u-color="{{item.color}}" u-class="{{item.class}}" handler="handler" ng-click="add_panel()" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
      '</div>' +
      '</div>'
  };
});
