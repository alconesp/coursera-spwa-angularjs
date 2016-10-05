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
        templateUrl: 'src/menuapp/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories/categories.template.html',
        controller: 'CategoriesController as catCtrl',
        resolve: {
          categoriesItems: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]  
        }
      })

      .state('category-detail', {
        url: '/categories/{categoryShortName}',
        templateUrl: 'src/items/category-items.template.html',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
          categoryItems: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
            console.log('StateParams', $stateParams);
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      })

      ;
  }
})();
