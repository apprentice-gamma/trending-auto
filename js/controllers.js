(function() {
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);

	TwitterControllers.controller('TrendController', function(Trends,Speech, $scope, $interval){
    $interval(function() {
			$scope.currentTrend = Speech.getTrend();
      }, 100);
			$scope.trends = Trends;
			$scope.trends.then(function(responce){
        Speech.speak("Your trends for Detroit are");
        console.log("Test call once");
        responce.forEach(function(trend, index) {
          console.log("trend");
            trendName = trend.name;
            Speech.speak(trendName);
          })
        })
	});

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
