(function(){
'use strict'

  angular.module('MenuApp').component('catComponent', {
    templateUrl: 'src/categories/categories-component.template.html',
    bindings: {
      categories: '<'
    }
  });

})()