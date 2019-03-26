
app.directive('uText', function () {
  return {
    restrict: 'E',
    scope:{
      uType:'@',
      uName:'@',
      uClass:'@', 
      uLink:'@',
      uText:'@',
      uModel:'='
    },
    controller: function ($scope, $rootScope) {
        $scope.filterSearchfn = function (varfn) {
           $rootScope.filterSearch = varfn;
        };
    },
    link: function(scope, element, attr, controller) {
        element.bind('keyup', function (e) {
          scope.filterSearchfn(scope.uModel);
        });
    },
    transclude : true,
    template:'<input type="{{ uType }}" id="{{ uName }}" name="{{ uName }}" class="form-control {{ uClass }}" ng-model="uModel" placeholder="{{ uName }}">'    
  }
});
