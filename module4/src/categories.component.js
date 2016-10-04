(function(){
'use strict'

  angular.module('MenuApp').component('categories'{
    templateUrl: 'shoppingList.html',
    controller: CategoriesComponentController,
    bindings: {
      items: '<'
    }
  });

})()