'use strict';

/**
 * @ngdoc overview
 * @name printitApp
 * @description
 * # printitApp
 *
 * Main module of the application.
 */
var app = angular
  .module('printitApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/systemOverview.html',
        controller: 'systemOverview'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
