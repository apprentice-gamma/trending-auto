(function() {
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);

	TwitterControllers.controller('TrendController', function(Trends,Speech, $scope, $interval, $timeout){
    $interval(function() {
			$scope.currentTrend = Speech.getTrend();
      }, 10);
      $scope.runLocTrends = function() {
			  $scope.trends = Trends.getTrends(2391585);;
      	$scope.trends.then(function(responce){
        Speech.speak("Your trends for Detroit are");

        console.log("Test call once");
        responce.forEach(function(trend, index) {
          console.log("trend");
            trendName = trend.name;
            Speech.speak(trendName);
          })
        })

      };
    $scope.runNatTrends = function() {
			  $scope.trends = Trends.getTrends(23424977);;
      	$scope.trends.then(function(responce){
        Speech.speak("Your trends for the United States are");
        console.log("Test call once");
        responce.forEach(function(trend, index) {
          console.log("trend");
            trendName = trend.name;
            Speech.speak(trendName);
          })
        })

      };

    $timeout(function() {
      Speech.speak("Welcome to moTrend");
    },10)
    $timeout(function() {
    $scope.runLocTrends();
    },10)
    $timeout(function() {
      $scope.runNatTrends()
    },10000)
      

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
