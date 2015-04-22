(function() {	
	var TwitterControllers = angular.module('TwitterControllers', []);
	
	TwitterControllers.controller('TrendController', [function(){
			var vm = this;
      		vm.hello = "Hello World!";
			vm.getToken = function(){
			 	console.log("method gets called.");
		        var cb = new Codebird;
		        cb.setConsumerKey("yh8E0Xm5op6mwblzmeH4m9L2w","ksFe1fZkrQgI4npHgE8IEnfwXkPrF51uzvFcx8arUnIemEcNfd")
		        cb.setBearerToken("AAAAAAAAAAAAAAAAAAAAAB9SfQAAAAAAdE5A7JO6%2FKTbDfrbLX5nJlz1fzU%3DyqULyVYgKi498Yz1cJxJxLVRsjOqHebi5znG6xPs9D9D8VzGKg");
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

	TwitterControllers.controller('SpeechController', [
		function(){

	}]);


})();
