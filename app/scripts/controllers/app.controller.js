'use strict';

/**
 * @ngdoc function
 * @name devApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the devApp
 */
angular.module('devApp')
  .controller('AppCtrl', function ($scope,$log,$location) {

    $scope.tabs = [
                  {
                    name: "Dashboard",
                    icon: "cog"
                  },
                  {
                    name: "Users",
                    icon: "user"
                  },
                  {
                    name: "Sandwiches",
                    icon: "shopping-basket"
                  }
                ]

    $scope.currentTab = 0;

    $scope.GoTo = function(target){
      $log.debug("going to.. " + target.name);
      $location.path("/" + target.name);
      $scope.currentTab = $scope.tabs.indexOf(target);
    }

  });
