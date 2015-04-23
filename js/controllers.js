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
		'Search',
		'Sentiment',
		function(Search){
			var vm = this;
			vm.searchResults = Search.getTweets("cats");
			vm.sentiment = Sentiment.getSentiment(searchResults);
	}]);

	TwitterControllers.controller('SpeechController', [
		function(){
	}]);
})();
