	 app.controller("print", ["$scope", "$location", "$routeParams", "dataService", "$rootScope",
	 	function($scope, $location, $routeParams, dataService, $rootScope) {
	 			console.log("systemOverview started");
	 			var test = "this is the systemOverview";
	 			var displayList = [];
	 			

	 			dataService.initialize();

	 			$scope.printers = dataService.getPrinters();

	 			var getUpdatedInfo = function(){
	 				$scope.printers = dataService.getPrinters();
	 				$scope.materials = dataService.getMaterials();
	 				$scope.$apply();
	 			}

	 			dataService.registerObserverCallback(getUpdatedInfo);

	 			$scope.medicalButton = function(){
	 				displayList = dataService.getMedicalObjects();
        			$location.path("/allItems");
      			};
      			$scope.miscButton = function(){
        			$location.path("/allItems");
      			};
      			$scope.toolsButton = function(){
        			$location.path("/allItems");
      			};
      			$scope.spareButton = function(){
        			$location.path("/spareParts");
      			};
	 			


	 		}]);