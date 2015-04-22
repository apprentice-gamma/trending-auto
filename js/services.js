(function() {	
	
	var TwitterServices = angular.module('TwitterServices', []);

	TwitterServices.factory('Trends', [function(){
			var vm = this;
			var trends;
      		//vm.hello = "Hello World!";
			vm.getTrends = function(){
			 	console.log("method gets called.");
		        var cb = new Codebird;
		        cb.setConsumerKey("placeholder")
		        cb.setBearerToken("oops");
		        var params = { "id": 2391585};
		        return cb.__call(
		          "trends_place",
		          params,
		          function(reply){
		            console.log(reply[0].trends); 
		          }
		        );
        	/*
			 	cb.__call(
		    	"oauth2_token",
		    	{},
		    	function (reply) {
              console.log(reply.access_token);
	    		});
        	*/
        	trends = vm.getTrends();
        	return trends;
			}

	}]);
})();