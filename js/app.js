(function(){
	var app = angular.module('twitterApp', [
	'TwitterControllers',
	'TwitterServices',
	'TwitterControllers',
	'twitterKey' 
	]);

	app.config([
		'$httpProvider', 
		function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);


})();

