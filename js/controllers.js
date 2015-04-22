(function() {	
	var TwitterControllers = angular.module('TwitterControllers', []);
	
	TwitterControllers.controller('TrendController', [
		'Trends',
		function(){
			var vm = this;
      		vm.hello = "Hello World!";
			vm.trends = Trends;
			/*
				function(){
			 	console.log("method gets called.");
		        var cb = new Codebird;
		        cb.setConsumerKey("")
		        cb.setBearerToken("");
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
