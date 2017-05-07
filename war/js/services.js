/**
 * CommService implements all communication with the server
 */
app.factory("CommService", ["$http", "baseUrl", "$rootScope", "$q", function($http, baseUrl, $rootScope, $q){
    return {
    	/**
    	 * Get all instances 
    	 * @param type 
    	 */
        getAll: function(type){
        	type = type.toLowerCase();
            var url = baseUrl + type;
            if ($rootScope.entities){
            	return;
            }
            var deferred = $q.defer();
            try {
               $http.get(url).
                   success(function (response, status, headers, config) {
                        if (status == "200") {
                        	deferred.resolve(response);
                        }
                        else {
                            deferred.reject(status);
                        }
                    }).
                    error(function (data, status, headers, config) {
                    	deferred.reject(status);
                    }
                );
            }
            catch (e){
                alert(e);
            }
            return deferred.promise;
        },
        
        create: function(type, entity){
            var url = baseUrl + type;
            var deferred = $q.defer();
        	
            $http.post(url, entity).
            	success(function (response, status, headers, config) {
            		if (status == "201") {
            			deferred.resolve(response);
            		}
            		else {
            			deferred.reject(status);
            		}
            	}).
            	error(function (data, status, headers, config) {
            		deferred.reject(status);
            	}
            );
            return deferred.promise;
        },
        
        get: function(baseUrl, type, id){
        	url = baseUrl + type + "/" + id;
        },
         
        update: function(type, entity){
            var url = baseUrl + type;
            var deferred = $q.defer();
        	
            $http.put(url, entity).
            	success(function (response, status, headers, config) {
            		if (status == "204") {
            			deferred.resolve(response);
            		}
            		else {
            			deferred.reject(status);
            		}
            	}).
            	error(function (data, status, headers, config) {
            		deferred.reject(status);
            	}
            );
            return deferred.promise;
        },
        
     }
}]);
