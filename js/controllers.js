(function() {	
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);
	
<<<<<<< HEAD
	TwitterControllers.controller('TrendController', [
		'Trends',
		function(Trends){
			var vm = this;
      		vm.hello = "Hello World!";
			vm.trends = Trends;
	}]);

	TwitterControllers.controller('SpeechController', [
		function(){

	}]);


=======
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
>>>>>>> 42a5df41cde885fc3db5c6da606fe2d1676e89d3
})();
