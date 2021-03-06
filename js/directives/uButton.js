
app.directive('uButton', function () {
  return {
    restrict: 'E',
    scope:{
      uColor:'@',
      uClass:'@', 
      uStyle:'@', 
      uLink:'@',
      uType:'@',
      uDisable:'='
    },
    controller: ['$scope', '$http', '$location', function($scope, $http, $location) {
      $scope.linkButton = function (link) {
        $location.path(link);
        $scope.$apply()
      }
    }],
    link: function(scope, element, attr, controller) {
      element.bind('click', function (e) {
        scope.linkButton(attr.uLink);
      });
    },
    transclude : true,
    template:'<button class="btn btn-{{ uColor }} {{ uClass }}" type="{{uType}}" style="{{ uStyle }}" ng-disabled="uDisable" ng-transclude></button>'    
  }
});
