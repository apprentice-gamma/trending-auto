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
		//dependencies go here
		function(){
			var vm = this;
			vm.searchResults = [];
	}]);

	TwitterControllers.controller('SpeechController', [
		function(){
	}]);
})();
