(function() {
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);

	TwitterControllers.controller('TrendController', function(Trends,Speech, $scope, $interval, $timeout){
    $interval(function() {
			$scope.currentTrend = Speech.getTrend();
      }, 10);

    $scope.runTrends = function(locationID, message) {
			$scope.trends = Trends.getTrends(locationID);;
      $scope.trends.then(function(responce){
      Speech.speak(message);
      console.log("Test call once");
      responce.forEach(function(trend, index) {
        console.log("trend");
        trendName = trend.name;
        Speech.speak(trendName);
        })
      })
    };
    $scope.runLocTrends = function() {
      $scope.runTrends(2391585, "Your trends for Detroit are");
    };
    $scope.runNatTrends = function() {
      $scope.runTrends(23424977, "Your trends for the United States are");
    };

    $scope.speakTrends = function() {
      $timeout(function() {
        $scope.runLocTrends();
      },10)
      $timeout(function() {
        $scope.runNatTrends()
      },10000)
    }

    $timeout(function() {
      Speech.speak("Welcome to moTrend");
    },10)
    $scope.speakTrends();


    $interval(function() {
      $scope.speakTrends();
    }, 900000); 

	});
/*
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
  */
})();
