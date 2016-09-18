(function(){
  'use strict';
  var LunchCheck = angular.module('LunchCheck', []);

  LunchCheck.controller('LunchCheckController', LCController);

  LCController.$inject = ['$scope'];
  function LCController($scope) {
    $scope.showErrorMessage = true;
    $scope.message = 'Please enter data first';
    $scope.items = '';
    $scope.totalItems = 0; 

    $scope.checkItems = function () {
      var items = $scope.items.split(',');
      $scope.message = 'Please enter data first';
      $scope.showErrorMessage = true;
      $scope.totalItems = 0;

      for ( var i = 0; i < items.length; i++) {
        if ( items[i].trim() !== '' ) {
          $scope.totalItems ++;
        }
      }

      if ( $scope.totalItems > 0 ) {
        $scope.showInfoMessage = false;
        if ( $scope.totalItems <= 3 ) {
          $scope.message = 'Enjoy!'; 
        } 
        else {
          $scope.message = 'Too much!'; 
        }
      }
    };

    $scope.tooMuch = function () {
      return $scope.totalItems > 3; 
    }

    $scope.notTooMuch = function () {
      return $scope.totalItems > 0 && $scope.totalItems <= 3; 
    }

    $scope.noItems = function () {
      return $scope.totalItems == 0; 
    }
  }
})();