'use strict';

/**
 * @ngdoc overview
 * @name devApp
 * @description
 * # devApp
 *
 * Main module of the application.
 */
angular
  .module('devApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/Users', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
