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
					vm.trendsNameArray.push(singleTrend.name);
				})
			})
	}]);

	TwitterControllers.controller('SearchController',[
		'Search',
		function(Search){
			var vm = this;
			vm.searchResults = Search.getTweets("cats");
	}]);

	TwitterControllers.controller('SpeechController', [
		'Speech',
		function(Speech){
			var vm = this;
			vm.speak = function(text) {
				Speech.speak(text);
			}
		}
	]);
})();
