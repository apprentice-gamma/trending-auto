(function() {
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);

	TwitterControllers.controller('TrendController', function(Trends,Speech, $scope, $interval){
			$scope.currentTrend = Speech.getTrend();
			$scope.trends = Trends;
			$scope.trends.then(function(responce){
        Speech.speak("Your trends for Detroit are");
        $interval( function(){
        responce.forEach(function(trend, index) {
          if (index < 9) {
            trendName = trend.name;
            Speech.speak(trendName);
          } else {
            $interval.cancel();
          }
          },5000, false);
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
