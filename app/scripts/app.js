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
      .when('/systemOverview', {
        templateUrl: 'views/systemOverview.html',
        controller: 'systemOverview'
      })
      .when('/print', {
        templateUrl: 'views/print.html',
        controller: 'print'
      })
      .when('/allItems', {
        templateUrl: 'views/allItems.html',
        controller: 'print'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
