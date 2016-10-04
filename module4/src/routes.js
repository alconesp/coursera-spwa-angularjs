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
          categoriesItems: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]  
        }
      })

      .state('category-detail', {
        url: '/categories/{categoryShortName}',
        templateUrl: 'src/category-items.template.html',
        controller: 'ItemsController as items',
        resolve: {
          categoryItems: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      })

      ;
  }
})();
