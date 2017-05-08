var app = angular.module("app", []);
app.value("baseUrl", "http://localhost:8888/rest/");

/** These values corespond to the resource portion of the REST url  */
app.constant("entityTypes", {
	COMPANY:  "company",
	PERSON:   "person",
	POSITION: "position",
	CONTACT:  "contact",
    APPOINTMENT: "appointment",
	EMAIL:    "email"
});
/** Maps the menu item text to the entity types */
app.constant("pageToEntity", {
	'Companies': "company",
	'People':    "person",
	'Positions': "position",
	'Contacts':  "contact",
    'Appointments': "appointment",
	'Emails':    "email"
});


app.controller("MainCtrl", ["$scope", "CommService", "pageToEntity",
    function($scope, commService, pageToEntity) {
        this.message = null;
        this.currentPage = null;
        var this_ = this;

        /** Responds to menu items by switching main area to the corresponding view */
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

        /** Returns true if the sepcified page is the current one
         * @param page the page name
         */
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

app.factory("Common", ["CommService", function(commService){
    return {
        /**
         * Opens a dialog for creating a new entity or editing an existing one
         * @param controller the entity controller
         * @param type the entity type
         * @param dialogId the id attribute of the markup dialog element
         * @param selected the entity selected from the company list , or undefined for a new one 
         */
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
    	
        /** 
         * Saves a new or edited entity and closes the dialog window
         * @param controller the entity controller
         * @param type the entity type
         */
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

/** Controller for the Companies page */
app.controller("CompaniesCtrl", ["$scope", "Common", "entityTypes",
    function($scope, common, entityTypes) {
    
		var this_ = this;
        this.selected = undefined;
        this.mode = undefined;
        this.dialogId = undefined;
        this.entity = {};
        
        /** Records all companies retrieved from the server */
        $scope.$on('company', function(event, allEntities){
          	this_.entities = allEntities;
        });
        /**
         * Opens the form dialog window to edit a company or create a new one
         * @param dialogId the id of the modal dialog element
         * @param selected the company selected from the company list , or undefined for a new one
         */
        this.open = function(dialogId, selected){
        	common.open(this, entityTypes.COMPANY, dialogId, selected);
        }        
        /** Saves a new or edited company and closes the dialog */
        this.save = function(){
        	common.save(this, entityTypes.COMPANY);
        }
        /** Cancels the dialog */
        this.cancel = function(){
            $(this.dialogId).modal('hide');
        }
    }
]);

/** Controller for the Appointments page */
app.controller("AppointmentsCtrl", ["$scope", "Common", "entityTypes",
    function($scope, common, entityTypes) {
    
		var this_ = this;
        this.selected = undefined;
        this.mode = undefined;
        this.dialogId = undefined;
        this.entity = {};
        
        /** Records all appointments retrieved from the server */
        $scope.$on('appointment', function(event, allEntities){
          	this_.entities = allEntities;
        });
        /**
         * Opens the form dialog window to edit a appointment or create a new one
         * @param dialogId the id of the modal dialog element
         * @param selected the appointment selected from the appointment list , or undefined for a new one
         */
        this.open = function(dialogId, selected){
        	common.open(this, entityTypes.APPOINTMENT, dialogId, selected);
        }        
        /** Saves a new or edited appointment and closes the dialog */
        this.save = function(){
            // Convert the Javascript Date 
        	common.save(this, entityTypes.APPOINTMENT);
        }
        /** Cancels the dialog */
        this.cancel = function(){
            $(this.dialogId).modal('hide');
        }
    }
]);

/** Controller for the Contacts page */
app.controller("ContactsCtrl", ["$scope", "Common", "entityTypes",
    function($scope, common, entityTypes) {
    
		var this_ = this;
        this.selected = undefined;
        this.mode = undefined;
        this.dialogId = undefined;
        this.entity = {};
        
        /** Records all contacts retrieved from the server */
        $scope.$on('contact', function(event, allEntities){
          	this_.entities = allEntities;
        });
        /**
         * Opens the form dialog window to edit a contact or create a new one
         * @param dialogId the id of the modal dialog element
         * @param selected the contact selected from the contact list , or undefined for a new one
         */
        this.open = function(dialogId, selected){
        	common.open(this, entityTypes.CONTACT, dialogId, selected);
        }        
        /** Saves a new or edited contact and closes the dialog */
        this.save = function(){
        	common.save(this, entityTypes.CONTACT);
        }
        /** Cancels the dialog */
        this.cancel = function(){
            $(this.dialogId).modal('hide');
        }
    }
]);

/** Controller for the Persons page */
app.controller("PersonsCtrl", ["$scope", "Common", "entityTypes",
    function($scope, common, entityTypes) {
    
		var this_ = this;
        this.selected = undefined;
        this.mode = undefined;
        this.dialogId = undefined;
        this.entity = {};
        
        /** Records all persons retrieved from the server */
        $scope.$on('person', function(event, allEntities){
          	this_.entities = allEntities;
        });
        /**
         * Opens the form dialog window to edit a person or create a new one
         * @param dialogId the id of the modal dialog element
         * @param selected the person selected from the person list , or undefined for a new one
         */
        this.open = function(dialogId, selected){
        	common.open(this, entityTypes.PERSON, dialogId, selected);
        }        
        /** Saves a new or edited person and closes the dialog */
        this.save = function(){
        	common.save(this, entityTypes.PERSON);
        }
        /** Cancels the dialog */
        this.cancel = function(){
            $(this.dialogId).modal('hide');
        }
    }
]);

/** Controller for the Positions page */
app.controller("PositionsCtrl", ["$scope", "Common", "entityTypes",
    function($scope, common, entityTypes) {
    
		var this_ = this;
        this.selected = undefined;
        this.mode = undefined;
        this.dialogId = undefined;
        this.entity = {};
        
        /** Records all positions retrieved from the server */
        $scope.$on('position', function(event, allEntities){
          	this_.entities = allEntities;
        });
        /**
         * Opens the form dialog window to edit a position or create a new one
         * @param dialogId the id of the modal dialog element
         * @param selected the position selected from the position list , or undefined for a new one
         */
        this.open = function(dialogId, selected){
        	common.open(this, entityTypes.POSITION, dialogId, selected);
        }        
        /** Saves a new or edited position and closes the dialog */
        this.save = function(){
        	common.save(this, entityTypes.POSITION);
        }
        /** Cancels the dialog */
        this.cancel = function(){
            $(this.dialogId).modal('hide');
        }
    }
]);




