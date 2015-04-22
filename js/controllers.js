(function() {	
	var TwitterControllers = angular.module('TwitterControllers', [
		'TwitterServices'
		]);
	
	TwitterControllers.controller('TrendController', [
		'Trends',
		function(Trends){
			var vm = this;
      		vm.hello = "Hello World!";
			vm.trends = Trends;
	}]);

	TwitterControllers.controller('SpeechController', [
		function(){
	}]);
})();
