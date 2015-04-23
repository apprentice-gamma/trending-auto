(function() {
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);

	TwitterControllers.controller('TrendController', [
		'Trends',
		function(Trends){
			var vm = this;
			vm.trendsNameArray = [];
			vm.trends = Trends;
			vm.trends.then(function(headlineArray){
				headlineArray.forEach(function(singleTrend) {
					console.log(singleTrend.name);
					vm.trendsNameArray.push(singleTrend.name);
				})
			})
	}]);

	TwitterControllers.controller('SearchController',[
		//'Search'
		"consumerKey",
		"consumerSecret",
		"bearerToken",
		"$q",
		function(consumerKey, consumerSecret, bearerToken, $q){
			var vm = this;
			vm.searchResults = [];
			vm.doSearch = function(search){
				console.log("Search method called");
				var cb = new Codebird;
				var deferred = $q.defer();
				cb.setConsumerKey(consumerKey, consumerSecret);
		        cb.setBearerToken(bearerToken);
		        var params = { "q": search};
		        cb.__call(
							"search_tweets",
							params,
							function (reply) {
								var data = reply;
		          				console.log(data);
		            			return deferred.resolve(data);
							}
						)
				console.log(deferred.promise);
				return deferred.promise;
			}
	}]);

	TwitterControllers.controller('SpeechController', [
		function(){
	}]);
})();
