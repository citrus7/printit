	 app.controller("print", ["$scope", "$location", "$routeParams", "dataService", "$rootScope",
	 	function($scope, $location, $routeParams, dataService, $rootScope) {
	 			console.log("print controller started");
	 			dataService.initialize();
	 			$scope.displayList = dataService.getActiveObjects();
	 			$scope.activeItem = $scope.displayList[0];
	 			$scope.activeVars = [];
	 			$scope.printers = dataService.getPrinters();
	 			$scope.selectedPrinter = "Select Printer"


	 			var getUpdatedInfo = function(){
	 				$scope.$apply();
	 			}

	 			dataService.registerObserverCallback(getUpdatedInfo);

	 			$scope.medicalButton = function(){
	 				$scope.displayList = dataService.getMedicalObjects();
        			$location.path("/allItems");
      			};
      			$scope.miscButton = function(){
      				$scope.displayList = dataService.getMiscObjects();
        			$location.path("/allItems");
      			};
      			$scope.toolsButton = function(){
      				$scope.displayList = dataService.getToolObjects();
        			$location.path("/allItems");
      			};
      			$scope.spareButton = function(){
      				$scope.displayList = dataService.getSpareObjects();
        			$location.path("/allItems");
      			};

      			$scope.setActive = function(model){
      				$scope.activeItem = model;
      				$scope.activeVars = dataService.getVars(model.id);
      				console.log($scope.activeVars);
                    vertices = dataService.getFace(model.id);
                    initBuffers();
      			}

      			$scope.setActivePrinter = function(printer){
      				$scope.selectedPrinter = printer;
      			}

      			$scope.updateModel = function(){
                    var updates = [];
                    var model = $scope.activeItem;
      				for(aVar in $scope.activeVars){
      					var value = document.getElementById($scope.activeVars[aVar].name).value;
                              var oldValue = $scope.activeVars[aVar].value;
                              $scope.activeVars[aVar].value = value;
      					if (value != oldValue)
                              {
                              updates.push("http://" + dataService.getServerURL() + "/" + model.id + "/change/name/" + $scope.activeVars[aVar].name + "/value/" + value);
                              }
      				}
                                           if (updates.length > 0)
                                           {
                                            while (updates.length > 1)
                                           {
                              $.getJSON(updates.pop(), null, function(x){});
                                           }
                                           $.getJSON(updates.pop(), null, function(x) {
                                                     dataService.updateCacheEntry(model.id)
                                                     });
                                           }

      			}
	 			
	 			$scope.print = function(){
	 				//deduct material
	 				dataService.spendPlastic($scope.activeItem.plastic)
	 				dataService.spendSteel($scope.activeItem.steel)
	 				dataService.spendGold($scope.activeItem.gold)
	 				//add time to printer
	 				dataService.addPrinterTime($scope.selectedPrinter,$scope.activeItem.time)
	 			}


	 		}]);