

app.directive('uLink', function () {
  return {
    restrict: 'E',
    scope:{
      uName:'@',
      uClass:'@', 
      uLink:'@'
    },
    link: function(scope, element, attr, controller) {

    },
    transclude : true,
    template:'<a href="{{ uLink }}"></a>'    
  }
});

