(function(){
  'use strict';

  angular.module('ShoppingListCheckOffApp',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject =['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
      var toBuyList = this;
      toBuyList.items = ShoppingListCheckOffService.getToBuyListItems();

      toBuyList.bought = function(index) {
        console.log('call bought in controller, index ----->' + index);
        ShoppingListCheckOffService.bought(index);
      };
    };

    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtList = this;
      boughtList.items = ShoppingListCheckOffService.getBoughtListItems();

      boughtList.cancel = function(index) {
        console.log('call cancel in controller, index ----->' + index);
        ShoppingListCheckOffService.cancel(index);
      }
    };

    function ShoppingListCheckOffService() {
      var service = this;
      //initialize two lists
      var toBuyList = [
        {'quantity':11, 'name':'Biscuits'},
        {'quantity':50, 'name':'Milk'},
        {'quantity':27, 'name':'Candies'},
        {'quantity':15, 'name':'Beer'},
        {'quantity':4, 'name':'Cupcakes'},
        {'quantity':1, 'name':'Watermelon'},
        {'quantity':10, 'name':'Apples'},
        {'quantity':18, 'name':'Bananas'},
        {'quantity':12, 'name':'Cokes'},
        {'quantity':10, 'name':'Soda'},
      ];
      var boughtList = [];

      service.getToBuyListItems = function() {
        return toBuyList;
      };

      service.getBoughtListItems = function() {
        return boughtList;
      };

      service.bought = function(index) {
        console.log("call bought in service ---> "+ index);
        boughtList.push(toBuyList[index]);
        toBuyList.splice(index, 1);
      };

      service.cancel = function(index) {
        toBuyList.push(boughtList[index]);
        boughtList.splice(index, 1);
      }
    }
})();
