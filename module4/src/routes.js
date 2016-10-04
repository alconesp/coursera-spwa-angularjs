(function () {
  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.template.html',
        controller: 'CategoriesController as categories',
        resolve: {
          categoriesItems: ['DataMenuService', function(DataMenuService) {
            return DataMenuService.getItemsForCategory(categoryShortName);
          }]  
        }
      })
/*
      .state('categories', {
        url: '/categories/{categoryShortName}',
        templateUrl: 'src/category-items.template.html',
        controller: 'ItemsController as items',
        resolve: {
          categoriesItems: { ['DataMenuService', function(DataMenuService) {
            return DataMenuService.getItemsForCategory(categoryShortName);
          }]
        }
      })
*/
      ;
  }
})();
