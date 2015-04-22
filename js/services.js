(function() {	
	
	var TwitterServices = angular.module('TwitterServices', [
		]);

	TwitterServices.factory('Trends', [
		"consumerKey",
		"consumerSecret",
		"bearerToken",
		function(){
			var vm = this;
			var trends;
      		//vm.hello = "Hello World!";
			vm.getTrends = function(){
			 	console.log("method gets called.");
		        var cb = new Codebird;
		        cb.setConsumerKey("consumerSecret", "consumerKey");
		        cb.setBearerToken("bearerToken");
		        var params = { "id": 2391585};
		        
		        return cb.__call(
		          "trends_place",
		          params,
		          function(reply){
		            console.log(reply[0].trends); 
		          	//return reply[0].trends;
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
			}
			trends = vm.getTrends();
	        console.log(trends);
	        return trends;
	}]);
})();