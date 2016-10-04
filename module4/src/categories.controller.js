(function(){
'use strict'

  angular.module('MenuApp').controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categoriesItems'];
  function CategoriesController(categoriesItems) {
    var categories = this;

    categories.categories = categoriesItems.data;
    console.log('Categories: ', categories.categories);
  }
})()