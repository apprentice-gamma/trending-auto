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
		function(Search){
			var vm = this;
			vm.searchResults = [];
			//vm.search = Search;
			/*	HOW TO DO A SEARCH
				var params = {
						q: "NYC"
					};
						cb.__call(
							"search_tweets",
							params,
							function (reply) {
								// ...
							}
						);
			*/
	}]);

	TwitterControllers.controller('SpeechController', [
		function(){
	}]);
})();
