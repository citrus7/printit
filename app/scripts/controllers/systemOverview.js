	 app.controller("systemOverview", ["$scope", "$location", "$routeParams", "dataService", "$rootScope",
	 	function($scope, $location, $routeParams, dataService, $rootScope) {
	 			console.log("systemOverview started");
	 			var test = "this is the systemOverview";

	 			

	 			dataService.initialize();

	 			$scope.printers = dataService.getPrinters();

	 			var getUpdatedInfo = function(){
	 				$scope.printers = dataService.getPrinters();
	 				$scope.materials = dataService.getMaterials();
	 				$scope.$apply();
	 			}

	 			dataService.registerObserverCallback(getUpdatedInfo);
	 			


	 		}]);