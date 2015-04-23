(function() {
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);

	TwitterControllers.controller('TrendController', [
		'Trends','Speech',
		function(Trends,Speech){
			var vm = this;
			vm.trendsNameArray = [];
			vm.trends = Trends;
			vm.trends.then(function(headlineArray){
				headlineArray.forEach(function(singleTrend) {
					vm.trendsNameArray.push(singleTrend.name);
				})
        Speech.speak("Your trends for Detroit are");
        vm.trendsNameArray.forEach(function(word) {
          Speech.speak(word);
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
		}
	]);
})();
