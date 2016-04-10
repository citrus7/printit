	'use strict';

	/**
	 * @ngdoc function
	 * @name ymApp.controller:MainCtrl
	 * @description
	 * # sidebarController
	 * Controller of the ymApp
	 */
   app.controller("tabController", ["$scope", "$location", "$routeParams", "$rootScope",
    function($scope, $location, $routeParams, $rootScope) {
      $scope.systemButton = function(){
        $location.path("/systemOverview");
      };
      $scope.printButton = function(){
        $location.path("/print");
      };
      $scope.detailedButton = function(){
        $location.path("/items/detailed/cprofileStore");
      };
      $scope.docsButton = function(){
        $location.path("/items/docs");
      };
      $scope.threeButton = function(){
        alert("one clicked");
      };

      //highlights active navbar pill
      $(document).ready(function() { 
        $('.nav li').click(function(e) {
          $('.nav li.active').removeClass('active');
          var $this = $(this);
          if (!$this.hasClass('active')) {
            $this.addClass('active');
          }
          e.preventDefault();
        });
      });

    }
    ]);
