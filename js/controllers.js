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

	TwitterControllers.controller('SpeechController', [
		'Speech',
		function(Speech){
			var vm = this;
			vm.speech = Speech;
			vm.text = "Hello World";
			vm.speak = Speech.speak(vm.text);
		}
	]);
})();
