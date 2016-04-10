	app.factory("dataService",["$rootScope", function($rootScope){
		var initialized = 0;
		var svc = {};
		var loaded = 0;
		observerCallbacks = [];

		var printers = [];
		var materials = [];
		var activeObjects = [];
		var medicalObjects = [];
		var toolObjects = [];
		var partObjects = [];
		var miscObjects = [];
      	var serverURL = "192.168.1.133:5000";
      	//var serverURL = "localhost:5000";
      	var cacheFaces = [null,null,null,null,null,null];
      	var cacheVars = [{name:"test1",value:"5"},{name:"test2",value:"2"},{name:"test2",value:"2"},{name:"test2",value:"2"},{name:"test2",value:"2"},{name:"test2",value:"2"}];

		setInterval(function(){
		  svc.update();
		}, 1000);


       	cacheIndex = 0;
       	updateCache = function() {
       	if (cacheIndex > 11)
       	{
       	return;
       	}
       	var index = cacheIndex % 6;
       	if (index > 1) { cacheIndex += 1; return;}
       	if (cacheIndex < 6) {
       	$.getJSON("http://" + serverURL + "/" + index + "/vars", null, function(data) {
       	          cacheVars[index] = data;
       	          });
       	} else {
       	$.getJSON("http://" + serverURL + "/" + index + "/faces", null, function(data) {
       	          cacheFaces[index] = data;
       	          });
       	}
       	cacheIndex += 1;
       	};
       	setInterval(updateCache, 10000);

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
				material1.name = "Plastic"
				material1.amount = 100

				var material2 = {};
				material2.name = "Steel"
				material2.amount = 50

				var material3 = {};
				material3.name = "Gold"
				material3.amount = 15

				materials.push(material1);
				materials.push(material2);
				materials.push(material3);

				//initialize medicalObjects
				var object1 = {};
				object1.name = "Cast";
				object1.plastic = 20;
				object1.steel = 0;
				object1.gold = 0;
				object1.time = 35;
                object1.id = 1;

				var object2 = {};
				object2.name = "Syringe";
				object2.plastic = 20;
				object2.steel = 0;
				object2.gold = 0;
				object2.time = 45;
                object2.id = 4;

				medicalObjects.push(object1);
				medicalObjects.push(object2);

				//initialize toolObjects
				var object3 = {};
				object3.name = "Screwdriver";
               	object3.plastic = 30;
               	object3.steel = 10;
               	object3.gold = 0;
               	object3.time = 30;
               	object3.id = 3;

				var object4 = {};
				object4.name = "Pulley";
                object4.plastic = 50;
                object4.steel = 0;
                object4.gold = 0;
                object4.time = 50;
                object4.id = 5;

				toolObjects.push(object3);
				toolObjects.push(object4);

				//initialize partObjects
				var object5 = {};
				object5.name = "Screw";
                object2.plastic = 0;
                object2.steel = 10;
                object2.gold = 0;
                object2.time = 40;
                object5.id = 2;

				var object6 = {};
				object6.name = "Box";
                object2.plastic = 30;
                object2.steel = 0;
                object2.gold = 0;
                object2.time = 20;
                object6.id = 0;

				partObjects.push(object5);
				partObjects.push(object6);

				/*
				box - 7
				cast - 20
				screw - 2
				screwdriver - 5
				syringe - 3
				pulley - 20
				*/


				initialized = 1;

			}
		};


		svc.update = function(){
			for(i in printers){
				if (printers[i].cooldown > 0){
					printers[i].cooldown--;
				}
			}
			notifyObservers();
		};

		svc.getPrinters = function(){
			return printers;
		}

		svc.getMaterials = function(){
			return materials;
		}

		svc.getMedicalObjects = function(){
			activeObjects = medicalObjects;
			return medicalObjects;
		}

		svc.getToolObjects = function(){
			activeObjects = toolObjects;
			return toolObjects;
		}

		svc.getPartObjects = function(){
			activeObjects = partObjects;
			return partObjects;
		}

		svc.getMiscObjects = function(){
			activeObjects = miscObjects;
			return miscObjects;
		}

		svc.getActiveObjects = function(){
			return activeObjects;
		}

        svc.getServerURL = function(){
        	return serverURL;
        }

        svc.getFace = function(index){
            return cacheFaces[index];
        }

        svc.getVars = function(index){
            return cacheVars[index];
        }

        svc.spendPlastic = function(amount){
        	materials[0].amount = materials[0].amount - amount;
        }

        svc.spendSteel = function(amount){
        	materials[1].amount = materials[1].amount - amount;
        }

        svc.spendGold = function(amount){
        	materials[2].amount = materials[2].amount - amount;
        }

        svc.addPrinterTime = function(printer, time){
        	for(i in printers){
        		if(printers[i].name == printer){
        			printers[i].cooldown += time;
        		}
        	}
        }


		//svc.initialize();
		//svc.update();

		return svc;
	}]);