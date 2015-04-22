(function() {	
	var TwitterControllers = angular.module('TwitterControllers', []);
	
	TwitterControllers.controller('TrendController', ["consumerKey","consumerSecret","bearerToken",function(consumerKey,consumerSecret,bearerToken ){
			var vm = this;
      vm.hello = "Hello World!";
			vm.getToken = function(){
			 	console.log("method gets called.");
        var cb = new Codebird;
        cb.setConsumerKey(consumerKey,consumerSecret)
        cb.setBearerToken(bearerToken);
        var params = { "id": 2391585};
        return cb.__call(
          "trends_place",
          params,
          function(reply){
            console.log(reply[0].trends); 
          },
          true
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
		}]);
})();
