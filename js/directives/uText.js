
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
    link: function(scope, element, attr, controller) {

    },
    transclude : true,
    template:'<input type="{{ uType }}" id="{{ uName }}" name="{{ uName }}" class="form-control {{ uClass }}" ng-model="uModel" placeholder="{{ uName }}">'    
  }
});
