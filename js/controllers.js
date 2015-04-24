(function() {
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);

	TwitterControllers.controller('TrendController', function(Trends,Speech, $scope, $interval){
			$scope.currentTrend = Speech.getTrend();
			$scope.trends = Trends;
			$scope.trends.then(function(responce){
        Speech.speak("Your trends for Detroit are");
        var interval = $interval( function(){
        responce.forEach(function(trend, index) {
          console.log(index)
          if (index < 8) {
            trendName = trend.name;
            Speech.speak(trendName);
          } else {
            $interval.cancel(this);
            interval = undefined;
          }
          },10000, -1, true);

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
