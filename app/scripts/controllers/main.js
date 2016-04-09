'use strict';

/**
 * @ngdoc function
 * @name printitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the printitApp
 */
angular.module('printitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
