(function(){
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', '$q'];
  function MenuDataService($http, $q) {
    var service = this;

    service.getAllCategories = function() {
      var promise = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function(data) {
        console.log(data);
        //service.categories = data;
        return data.data;
      }).catch(function(err) {
        console.log(err);
      });
      return promise;
    };

    service.getItemsForCategory = function(categoryShortName) {
      var promise = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
      }).then(function(data) {
        //console.log(data);
        return data.data;
      }).catch(function(err) {
        console.log(err);
      });
      return promise;
    };

  }

})();
