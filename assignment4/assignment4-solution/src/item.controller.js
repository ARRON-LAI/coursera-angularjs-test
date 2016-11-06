(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('ItemController', ItemController);

  ItemController.$inject = ['$stateParams', 'MenuDataService', 'items'];
  function ItemController($stateParams, MenuDataService, items) {
    var controller = this;
    var categoryShortName = $stateParams.shortName;
    if(categoryShortName && categoryShortName != ""){
      var promise = MenuDataService.getItemsForCategory(categoryShortName);
      promise.then(function(data) {
        controller.items = data.menu_items;
        console.log(controller.items);
      });
    }
  }
})();
