(function() {
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);

	TwitterControllers.controller('TrendController', [
		'Trends','Speech',
		function(Trends,Speech){
			var vm = this;
			vm.currentTrend = Speech.getText;
			vm.trends = Trends;
      vm.trendIndex = 0;
			vm.trends.then(function(responce){
        Speech.speak("Your trends for Detroit are");
        responce.forEach(function(trend) {
          trendName = trend.name;
          Speech.speak(trendName);
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
