(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', foundItemsDirective);

  function foundItemsDirective() {
    var ddo = {
      templateUrl: "foundItems.html",
      scope: {
        items: "<",
        onRemove: "&"
      },
      controller: foundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function foundItemsDirectiveController() {
    var controller = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.found = [];
    controller.searchItem = "";

    controller.search = function() {
      //alert('a');
      var promise = MenuSearchService.getMatchedMenuItems(controller.searchItem);
      promise
      .then(function (response) {
        controller.found = response;
        console.log(response);
      })
      .catch(function (errorResponse) {
        console.log(errorResponse.message);
      });
    };

    controller.removeItem = function(itemIndex) {
      controller.found.splice(itemIndex, 1);
    }
    //promise.then(function(data){
      //console.log(data);
    //})
    //console.log();
  }

  MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath'];
  function MenuSearchService($q, $http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm){
      var promise = $http({
        method : "GET",
        url :ApiBasePath + "/menu_items.json"
      }).then(function(response) {
        var menu = response.data.menu_items;
        var foundItems = [];
        for(var i = 0; i < menu.length; ++i) {
          //console.log(i);
          if(menu[i].description.indexOf(searchTerm) != -1) {
            //console.log(i);
            foundItems.push(menu[i]);
          }
        }
        return foundItems;
      }).catch(function(error) {
        console.log(error);
      });
      return promise;
    };
  }
})()
