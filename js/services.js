(function() {	
	
	var TwitterServices = angular.module('TwitterServices', [
		]);

	TwitterServices.factory('Trends', [
		"consumerKey",
		"consumerSecret",
		"bearerToken",
		"$scope",
		function(consumerKey, consumerSecret, bearerToken, $scope){
			var vm = this;
			$scope.trends;
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
		            $scope.trends = reply[0].trends;
		            console.log(reply[0].trends); 
		          }
		        );
			}
			console.log($scope.trends);
	        return $scope.trends;
	}]);
})();
