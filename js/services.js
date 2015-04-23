(function() {	
	
	var TwitterServices = angular.module('TwitterServices', [
		]);

	TwitterServices.factory('Trends', [
		"consumerKey",
		"consumerSecret",
		"bearerToken",
		"$q",
		function(consumerKey, consumerSecret, bearerToken, $q){
			var vm = this;
			var deferred = $q.defer();
			vm.getTrends = function(){
			 	console.log("method gets called.");
		        var cb = new Codebird;
		        cb.setConsumerKey(consumerKey, consumerSecret);
		        cb.setBearerToken(bearerToken);
		        var params = { "id": 2391585};
		        
		        var what = cb.__call(
		          "trends_place",
		          params,
		          function(reply){
		          	var data = reply[0].trends;
		          	console.log(data);
		            return deferred.resolve(data); 
		          }
		        );
		        console.log(deferred.promise);
				return deferred.promise;
			}
			return vm.getTrends();
	}]);

	TwitterServices.factory('Sentiment',[
		"$q",
		"$http",
		"appID",	
		function($q, $http, appID){
		
		return {
		   getSentiment: function(tweets) {
		   	console.log("sentiment is happening");
			var xhr = new XMLHttpRequest();
			  if ("withCredentials" in xhr) {

			    // Check if the XMLHttpRequest object has a "withCredentials" property.
			    // "withCredentials" only exists on XMLHTTPRequest2 objects.
			    xhr.open(post, 'http://www.sentiment140.com/api/bulkClassifyJson?'+appID, true);

			  } else if (typeof XDomainRequest != "undefined") {

			    // Otherwise, check if XDomainRequest.
			    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
			    xhr = new XDomainRequest();
			    xhr.open(post, 'http://www.sentiment140.com/api/bulkClassifyJson?'+appID, true);

			  } else {

			    // Otherwise, CORS is not supported by the browser.
			    xhr = null;

			  }
			  return xhr.send();
			//var search = SearchController.searchString;
			//var tweets = Search.getTweets(search);
		    var deferred = $q.defer();

		    $http.post('http://www.sentiment140.com/api/bulkClassifyJson?'+appID, tweets)
		       .success(function(data) { 
		          deferred.resolve(data)
		       }).error(function(msg, code) {
		          deferred.reject(msg);
		          console.log(msg, code);
		       });
		     console.log(deferred.promise);
		     return deferred.promise;
		   }
		};
	}]);


	TwitterServices.factory('Search', [
		"consumerKey",
		"consumerSecret",
		"bearerToken",
		"$q",
		function(consumerKey, consumerSecret, bearerToken, $q){
      return {
			  deferred: $q.defer(),
			getTweets: function(search){
			 	console.log("Search method called");
				var cb = new Codebird;
				var deferred = $q.defer();
				cb.setConsumerKey(consumerKey, consumerSecret);
		        cb.setBearerToken(bearerToken);
		        var params = { "q": search};
		        cb.__call(
							"search_tweets",
							params,
							function (reply) {
								var data = reply.statuses;
		          				console.log(data);
		            			return deferred.resolve(data);
							}
						)
				console.log(deferred.promise);
				return deferred.promise;
			}
    }
	}]);

})();
