(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/template/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/template/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categories.items', {
      url: '/items/{shortName}',
      templateUrl: 'src/template/items.html',
      controller: 'ItemController as item'
    });
  }
})();
