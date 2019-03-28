
app.directive('uDbpanel', function( $parse, $timeout, $compile, store) {
  return {
    restrict: "E",
    replace: true,
    scope: {
      panelitems: '=',
      data:'=',
      units:'=',
      components:'=',
      filterSearch:'=',
      handler:'='
    },
    template: "<div>"+
              "<u-content panelitems='components.header[0]' data='data' units='units' filter-search='filterSearch' handler='handler' ></u-content>"+
               "<div class='card-deck' style='margin:10px;'>"+
                 '<u-dbpanelitems parentform="components"></u-dbpanelitems>'+ 
                "</div>"+
              "</div>",
    controller: function($scope, medicationService, $location) {

      $scope.submit = function(form) {

      };
      $scope.redirect = function(destination) {

      };

      $scope.handler.open = function(form) {
          $scope.card = {};
          angular.forEach($scope.components, function(value,key) {
            if(key == form){
              $scope.card[key] = value;
            }
          });

      };

      $scope.handler.add = function(form) {
        if($scope.card){
          angular.forEach($scope.components, function(value,key) {
            if(key == form && !(form in $scope.card)){
              $scope.card[key] = value;
            }
          });
        }
      };

      $scope.handler.remove = function(form) {
        if($scope.card){
            delete $scope.card[form];
        }
      };

      $scope.handler.isActive = function(key) {
           return $scope.card.lenght;
      };

      $scope.handler.item_selecionado = function(item, form) {
         $scope.item_selecionado = item;
         if(form){
            if($scope.handler.isActive <= 1){
               $scope.handler.add(form);
            }else{
               $scope.handler.open('list');
               $scope.handler.add(form);
            }
         }else{
            $scope.handler.open('list');
            $scope.handler.add('edit');
         }
      };

      $scope.listar = function() {
           $scope.handler.open('list');
      };          


    },link:function(scope, element, attrs){
      $scope.handler.open('list');
    }
  };
});

app.directive('uDbpanelitems', function(RecursionHelper) {
  return {
    restrict: "E",
    replace: true,
    template:  '<div class="card" ng-repeat="item in card track by $index" >' +
                  '<div class="card-header">{{item[0].name_parent}} - Panel Heading <div class="float-right" ng-if="$index > 0" ng-click="listar()">X</div></div>' +
                  "<div class='card-body'>"+
                      '<div ng-if="item[0].component_type == ' + "'input'" + '">' +
                      '<u-text u-type="{{item.input_type}}" u-model="data[item.key]" u-name="{{item.key}}" u-required="{{item.required}}" placeholder={{item.name}} ></u-text>' +
                      '</div>' +
                      '<div ng-if="item[0].component_type == ' + "'select'" + '">' +
                      '<u-select u-model="data[item.key]" u-data="units"></u-select>' +
                      '</div>' +
                      '<div ng-if="item[0].component_type == ' + "'form'" + '">' +
                      "<u-form panelitems='item[0]' data='item_selecionado' units='units' handler='handler'></u-form>"+
                      '</div>' +
                      '<div ng-if="item[0].component_type == ' + "'grid'" + '">' +
                      "<u-table panelitems='item[0]' data='data' units='units' filter-search='filterSearch' handler='handler' ></u-table>" +
                      '</div>' +
                      '<div ng-if="item[0].component_type == ' + "'header'" + '">' +
                      '<u-select u-model="data[item.key]" u-data="units"></u-select>' +
                      '</div>' +
                        '<div ng-if="item[0].component_type == ' + "'button'" + ' || item.type == ' + "'submit'" + '" >' +
                            '<div ng-if="item[0].component_type == ' + "'upt'" + '" >' +
                              '<u-button u-type="{{item.type}}" u-color="{{item.color}}" u-class="{{item.class}}" ng-click="updt(data.id, data)" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
                            '</div>' +
                            '<div ng-if="item[0].component_type == ' + "'add'" + '" >' +
                              '<u-button u-type="{{item.type}}" u-color="{{item.color}}" u-class="{{item.class}}" ng-click="add(data)" u-disable="itemForm.$invalid"><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
                            '</div>' +
                            '<div ng-if="!item.function" >' +
                              '<u-button u-type="{{item.type}}" u-color="{{item.color}}" u-class="{{item.class}}" u-link="{{item.link}}{{line.id}}" ><i class="fas {{item.icon}}" ng-if="item.icon" ></i>{{item.infotext}}</u-button>' +
                            '</div>' +
                        '</div>' +
                  "</div>"+
                 "</div>"

      //'<u-dbpanelitems parentform="parentform" items="item"></u-dbpanelitems>' +



  };
});
