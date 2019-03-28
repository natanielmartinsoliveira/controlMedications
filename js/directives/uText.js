
app.directive('uText', function () {
  return {
    restrict: 'E',
    scope:{
      uType:'@',
      uName:'@',
      uClass:'@', 
      uLink:'@',
      uText:'@',
      uModel:'=', 
      uRequired:'@'
    },
    controller: function ($scope, $rootScope) {
        $scope.filterSearchfn = function (varfn) {
           $rootScope.filterSearch = varfn;
        };
    },
    link: function(scope, element, attr, controller) {

       if(scope.uName=="filterSearch"){

          var input = document.querySelector('input');

          input.addEventListener('focus', function(e) {
            scope.filterSearchfn(scope.uModel);
          });
          input.addEventListener('keyup', function(e) {
            scope.filterSearchfn(scope.uModel);
          });

          input.addEventListener('focusout', function(e) {
            if(scope.uModel == ''){
              scope.filterSearchfn('');
            }
          });

       }
        
    },
    transclude : true,
    template:'<input type="{{ uType }}" id="{{ uName }}" name="{{ uName }}" class="form-control {{ uClass }}" ng-required="uRequired" ng-model="uModel" placeholder="{{ uName }}">'    
  }
});
