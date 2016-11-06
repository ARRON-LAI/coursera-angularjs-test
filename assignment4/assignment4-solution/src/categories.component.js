(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/template/categories.html',
    bindings: {
      items: '<'
    }
  });
})();
