	app.factory("dataService",["$rootScope", function($rootScope){
		var initialized = 0;
		var svc = {};
		var loaded = 0;
		observerCallbacks = [];

		var printers = [];
		var materials = []

		setInterval(function(){
		  svc.update();
		}, 1000);

		//register an observer
		svc.registerObserverCallback = function(callback){
			observerCallbacks.push(callback);
		};

		//notify callbacks
		var notifyObservers = function(){
			angular.forEach(observerCallbacks, function(callback){
				callback();
			});
		};

		svc.initialize = function(){
			if(initialized == 0){
				//initialize printers
				var printer1 = {};
				printer1.name = "techroom_printer1";
				printer1.cooldown = 0;

				var printer2 = {};
				printer2.name = "techroom_printer2";
				printer2.cooldown = 0;

				var printer3 = {};
				printer3.name = "medicalward_printer";
				printer3.cooldown = 0;

				printers.push(printer1);
				printers.push(printer2);
				printers.push(printer3);

				//initialize materials
				var material1 = {};
				material1.name = "PLA"
				material1.amount = 100

				var material2 = {};
				material2.name = "Silver"
				material2.amount = 50

				var material3 = {};
				material3.name = "Gold"
				material3.amount = 15

				materials.push(material1);
				materials.push(material2);
				materials.push(material3);





				initialized = 1;

			}
		};


		svc.update = function(){
			printers[1].cooldown++;
			notifyObservers();
		};

		svc.getPrinters = function(){
			return printers;
		}

		svc.getMaterials = function(){
			return materials;
		}


		//svc.initialize();
		//svc.update();

		return svc;
	}]);