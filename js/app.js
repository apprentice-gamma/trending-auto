var app = angular.module('twitterApp', [
	'TrendController'
	]);

	app.controller('TrendController', ['$scope', function($scope) {

		$scope.getToken = function(){
		 	console.log("method gets called.");
		 	/*cb.__call(
	    	"oauth2_token",
	    	{},
	    	function (reply) {
	       		 var bearer_token = reply.access_token;
    		});
		 return bearer_token;
		 console.log("token: "+bearer_token);*/
		}
	}]);



	/*
		cb.__call(
		    "oauth2_token",
		    {},
		    function (reply) {
		        var bearer_token = reply.access_token;
		    }
		);
	*/



