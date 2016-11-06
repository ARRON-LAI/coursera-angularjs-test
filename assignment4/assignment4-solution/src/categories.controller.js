(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['MenuDataService', 'items'];
  function CategoriesController(MenuDataService, items) {
    var controller = this;
    controller.items = items;
    console.log(controller.items);
  }
})();
