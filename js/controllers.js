(function() {	
	var TwitterControllers = angular.module('TwitterControllers', []);
	
	TwitterControllers.controller('trendController', [function(){

			$scope.getToken = function(){
			 	console.log("method gets called.");
			 	/*
			 	cb.__call(
		    	"oauth2_token",
		    	{},
		    	function (reply) {
		       		 var bearer_token = reply.access_token;
	    		});
			 return bearer_token;
			 console.log("token: "+bearer_token);
			 */
			}
		}]);
})();