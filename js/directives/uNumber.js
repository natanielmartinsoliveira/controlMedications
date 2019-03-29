
app.directive('uNumber', function () {
  return {
    restrict: 'E',
    scope:{
      uName:'@',
      uClass:'@', 
      uLink:'@',
      uText:'@',
      uMin:'@',
      uMax:'@',
      uModel:'=',
      uValue:'@',
      list:'=',
      idNumber:'='
    },
    controller: function($scope, medicationService) {
      $scope.increment = function (item, quant) {
         var quantity = parseInt($scope.uModel);
         var id = item ? item.id : $scope.idNumber;
             $scope.list.forEach(function (line) {
             if(line.id == id ){
                line.quantity = quantity + 1;
                medicationService.putItem(id, line).then(function (data) {
            });
             }
          });
      };
      $scope.decrement = function (item, quant) {
         var quantity = parseInt($scope.uModel);
         var id = item ? item.id : $scope.idNumber;
             $scope.list.forEach(function (line) {
             if(line.id == id ){
                if(quantity>0){
                  line.quantity = quantity - 1;
                  medicationService.putItem(id, line).then(function (data) {
                  });
                }
             }
          });
      };

    },
    link: function(scope, element, attr, controller) {

    },
    transclude : true,
    templateUrl:'/view/component/uNumber.html'    
  }
});

