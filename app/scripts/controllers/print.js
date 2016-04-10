	 app.controller("print", ["$scope", "$location", "$routeParams", "dataService", "$rootScope",
	 	function($scope, $location, $routeParams, dataService, $rootScope) {
	 			console.log("print controller started");
	 			dataService.initialize();
	 			$scope.displayList = dataService.getActiveObjects();
	 			$scope.activeItem = {};
	 			console.log($scope.displayList);


	 			var getUpdatedInfo = function(){
	 				$scope.$apply();
	 			}

	 			dataService.registerObserverCallback(getUpdatedInfo);

	 			$scope.medicalButton = function(){
	 				$scope.displayList = dataService.getMedicalObjects();
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

      			$scope.setActive = function(model){
      				$scope.activeItem = model;
                              console.log(dataService.getServerURL() + "/" + model.id + "/faces");
                              $.getJSON("http://" + dataService.getServerURL() + "/" + model.id + "/faces", null, function(data) {
                                        console.log(data);
                                        });
      			}
	 			


	 		}]);