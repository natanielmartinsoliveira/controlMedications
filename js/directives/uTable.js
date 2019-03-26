
app.directive('uTable', function (RecursionHelper) {
  return {
    restrict: 'E',
    scope:{
      uClass:'@', 
      uLink:'@',
      uModel:'=',
      panelitems: '=',
      data: '=',
      units:'=',
      filterSearch:'='
    },
    template: " " +
      "<u-trtd panelitems='panelitems' data='data' units='units' filter-search='filterSearch' >" +
      "</u-trtd>" ,
    compile: function(element) {
      return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn) {});
    },
    controller: function($scope , medicationService) {
      $scope.submit = function(form) {
      };

      $scope.redirect = function(destination) {
      };
    }

  }
});


app.directive('uTrtd', function (RecursionHelper) {
  return {
    restrict: 'E',
    scope:{
      uClass:'@', 
      uLink:'@',
      uModel:'=',
      panelitems: '=panelitems',
      datatr: '=data',
      units:'=',
      filterSearch: '='
    },
    controller: function($scope, medicationService, $location) {

      $scope.del = function (id) {
          $scope.datatr.forEach(function (item) {
            if (item.id == id) {
              medicationService.deleteItem(item.id).success(function (data) {
                $scope.datatr = data;
                location.reload(); 
              });
            } 
          });
        };

    },
    template: "<table class='table table-striped table-hover' style='width:60%; margin:0 auto;'>"+
         '<tr >'+
            '<th ng-repeat="item in panelitems.children">' +
            '{{item.name}}' +
            '</th>'+
          "</tr>"+  
          '<tr ng-repeat="line in datatr | filter : filterSearch track by line.id " >'+
            '<td ng-repeat="item in panelitems.children" style="{{item.parentStyle}}">' +
            '<div ng-if="item.type == ' + "'input'" + '">' +
            '<u-text u-type="{{item.input_type}}" u-model="line[item.key]" u-name="{{item.key}}" placeholder={{item.name}}></u-text>' +
            '</div>' + 
            '<div ng-if="item.type == ' + "'text'" + '">' +
            '{{line[item.key]}}' +
            '</div>' + 
            '<div ng-if="item.type == ' + "'select'" + '">' +
            '<u-select u-model="line[item.key]" u-data="units" u-name="line[item.id]"></u-select>' +
            '</div>' +
            '<div ng-if="item.type == ' + "'number'" + '">' +
            '<u-number u-model="line[item.key]" u-name="line[item.id]" list="datatr" id-number="line.id" ></u-number>' +
            '</div>' +
            '<div ng-if="item.type == ' + "'button'" + '" >' +
              '<div ng-if="item.function == ' + "'del'" + '" >' +
                '<u-button u-color="{{item.color}}" u-class="{{item.class}}" ng-click="del(line.id)" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
              '</div>' +
              '<div ng-if="item.function == ' + "'upt'" + '" >' +
                '<u-button u-color="{{item.color}}" u-class="{{item.class}}"  u-link="{{item.link}}{{line.id}}" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
              '</div>' +
              '<div ng-if="!item.function" >' +
                '<u-button u-color="{{item.color}}" u-class="{{item.class}}"  u-link="{{item.link}}{{line.id}}" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
              '</div>' +
            '</div>' +
            '</td>'+
          "</tr>"+
         "</table>",

    compile: function(element) {
      return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn) {});
    }   
  }
});

