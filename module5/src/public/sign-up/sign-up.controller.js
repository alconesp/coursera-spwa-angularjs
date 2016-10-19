(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'ProfileService'];
function SignUpController($http, ProfileService) {
  var $ctrl = this;
  $ctrl.firstName = '';
  $ctrl.lastName = '';
  $ctrl.email = '';
  $ctrl.phone = '';
  $ctrl.favoriteDishNumber = '';
  $ctrl.favoriteDishError = false;
  $ctrl.saved = false;

  $ctrl.getFavoriteDish = function () {
    console.log('getFavoriteDish');
    $http.get('http://alconesp-chinese-food.herokuapp.com/menu_items/' + $ctrl.favoriteDishNumber + '.json')
    .then(function (response) {
      if ( response.data.error != undefined  ) {
        $ctrl.favoriteDishError = true;
      } 
      else {
        $ctrl.favoriteDishError = false;

        ProfileService.setUserProfile({
          firstName: $ctrl.firstName,
          lastName: $ctrl.lastName,
          email: $ctrl.email,
          phone: $ctrl.phone,
          favoriteDish: {
            number: $ctrl.favoriteDishNumber,
            name: response.data.name, 
            description: response.data.description
          }
        });

        $ctrl.saved = true;
      }
    })
    .catch(function (error) {
      $ctrl.favoriteDishError = true;
    });
  }
}


})();