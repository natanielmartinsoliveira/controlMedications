

app.directive('uSelect', function () {
  return {
    restrict: 'E',
    template:'<select class="form-control" ng-model="uModel" ng-options="Item.name for Item in uData track by Item.id" ng-required="uRequired" ><option value="">------------</option></select>',
    scope:{
      uModel:'=',
      uData:'=',
      databyid:'=',
      uRequired:'@'
    },
    link: function(scope, element, attributes, controller){
      element.bind('change', function (e) {
        scope.$eval(attributes.anotherFunc); 
      });
    }   

  }
}); 