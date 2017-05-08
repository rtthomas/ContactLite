var app = angular.module("app", []);
app.value("baseUrl", "http://localhost:8888/rest/");
app.constant("entityTypes", {
	COMPANY:  "company",
	PEOPLE:   "people",
	POSITION: "position",
	CONTACT:  "contact",
	EMAIL:    "email"
});
app.constant("pageToEntity", {
	'Companies':  "company",
	'People':   "people",
	'Positions': "position",
	'Contacts':  "contact",
	'Emails':    "email"
});

app.factory("Common", ["CommService", function(commService){
    return {
    	open: function(controller, type, dialogId, selected){
        	controller.mode = selected ? 'edit' : 'create';
            if (controller.mode == 'edit'){
            	// Copy into a temporary editing object
                controller.entity = $scope.copyAttributes(selected);
                controller.selected = selected;
            }
            else {
            	controller.entity = {};
            }
            controller.dialogId = dialogId;
            $(dialogId).modal('show');
    	},
    	
    	save: function(controller, type){
            if (controller.mode == 'edit'){
                // Copy from temporary back into selected , the update
                $scope.copyAttributes(controller.entity, controller.selected);
        		var promise = commService.update(type, controller.selected);
        		promise.then(function(data) {
        			  
        			}, 
        			function(reason) {
        				alert('Failed: ' + reason);
        			
        		});
                controller.entity = {};
            }
            else {
        		var promise = commService.create(type, controller.entity);
        		promise.then(function(data) {
        			  controller.entity.id = data;
        			  controller.entities.push(controller.entity);
        			}, 
        			function(reason) {
        				alert('Failed: ' + reason);
        			
        		});
            }
            $(controller.dialogId).modal('hide');
    		
    	}
    }
}]);

app.controller("CompaniesCtrl", ["$rootScope", "$scope", "CommService", "Common", "entityTypes",
    function($rootScope, $scope, CommService, common, entityTypes) {
    
		var this_ = this;
        this.selected = undefined;
        this.mode = undefined;
        this.dialogId = undefined;
        this.entity = {};
        
        $scope.$on('company', function(event, allCompanies){
          	this_.entities = allCompanies;
        });

        /**
         * Opens the form dialog window to edit a company or create a new one
         * @param dialogId the id of the modal dialog element
         * @param company the company selected from the company list , or undefined for a new one
         */
        this.open = function(dialogId, selected){
        	common.open(this, entityTypes.COMPANY, dialogId, selected);
        }
        
        /**
         * Save a new or edited company and closes the dialog
         */
        this.save = function(){
        	common.save(this, entityTypes.COMPANY);
        }
        this.cancel = function(){
            $(this.dialogId).modal('hide');
        }
    }
]);

app.controller("MainCtrl", ["$scope", "$rootScope", "CommService", "pageToEntity",
    function($scope, $rootScope, commService, pageToEntity) {
        this.message = null;
        this.currentPage = null;
        var this_ = this;
        /* 
        * Responds to menu items by switching main area to the corresponding view
        */
        this.goto = function (event) {
        	var type = pageToEntity[event.target.innerText];
        	var promise = commService.getAll(type);
        	promise.then(function(allItems){
        		
                $('.menu-item').removeClass('active');
                //           $(item).addClass('active');
                $('.navbar-collapse').collapse('hide');
                this_.currentPage = event.target.innerText;
                $scope.$broadcast(type, allItems);
        	});
         }

        this.isVisible = function(page){
            return page===this.currentPage; 
        }
        
        /*
         * Copy the enumerable properties of a new object
         */
        $scope.copyAttributes = function(f, t) {
            if (t === undefined){
                t = new Object();
            }
            for(var prop in f) {                     // For all props in p.
                t[prop] = f[prop];                   // Add the property to o.
            }
            return t;
        }
    }

]);


