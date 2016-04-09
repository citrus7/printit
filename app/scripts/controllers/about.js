'use strict';

/**
 * @ngdoc function
 * @name printitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the printitApp
 */
angular.module('printitApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
