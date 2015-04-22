(function() {	
	
	var TwitterServices = angular.module('TwitterServices', [
		]);

	TwitterServices.factory('Trends', [
		"consumerKey",
		"consumerSecret",
		"bearerToken",
		function(consumerKey,consumerSecret, bearerToken){
			var vm = this;
			var trends;
      		//vm.hello = "Hello World!";
			vm.getTrends = function(){
			 	console.log("method gets called.");
		        var cb = new Codebird;
		        cb.setConsumerKey(consumerKey, consumerSecret);
		        cb.setBearerToken(bearerToken);
		        var params = { "id": 2391585};
		        
		        return cb.__call(
		          "trends_place",
		          params,
		          function(reply){
		            console.log(reply[0].trends); 
		          }
		        );
			}
			trends = vm.getTrends();
	        console.log(trends);
	        return trends;
	}]);
})();
