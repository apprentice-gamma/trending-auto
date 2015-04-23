(function() {

	var TwitterServices = angular.module('TwitterServices', [
		'TwitterControllers']);

	TwitterServices.factory('Trends', [
		"consumerKey",
		"consumerSecret",
		"bearerToken",
		"$q",
		function(consumerKey, consumerSecret, bearerToken, $q){
			var vm = this;
			var deferred = $q.defer();
			vm.getTrends = function(){
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

	TwitterServices.factory('Speech', [
		"$q",
		function($q) {
			return {
				speak: function(text) {
					var deferred = $q.defer();
					var utterance = new SpeechSynthesisUtterance();
					var voices = window.speechSynthesis.getVoices();

					utterance.voice = voices.filter(function(voice) {
						return voice.name == 'Daniel';
					})[0];

					utterance.text = text;

					deferred.resolve(window.speechSynthesis.speak(utterance));
					return deferred;
				}
			}
		}
	])

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
    	}
	]);
})();
