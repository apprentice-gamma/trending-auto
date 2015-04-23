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
		"SpeechController",
		function(SpeechController) {
			console.log("in Speech service beginning, text is: " + SpeechController.text);
			var vm = this;
			vm.text = SpeechController.text;
			vm.speak = function(text) {
				var utterance = new SpeechSynthesisUtterance();
				var voices = window.speechSynthesis.getVoices();
				console.log("in Speech service, speak function, text is: " + text);

				utterance.text = text;

				/* Set the attributes (these all default to 1)
				Tried this, but it's erroring out that volumeInput, rateInput, and pitchInput are not defined
				utterance.volume = parseFloat(volumeInput.value);
				utterance.rate = parseFloat(rateInput.value);
				utterance.pitch = parseFloat(pitchInput.value);
				*/

				// Set the utterance instance's voice attribute to "Daniel",
				// a voice that enunciates and tends to pronouce twitter tags clearly.
				utterance.voice = voices.filter(function(voice) { return voice.name == 'Daniel'; })[0];

				console.log("in Speech service, end of speak, text is: " + text);
				return window.speechSynthesis.speak(utterance);
			}
			console.log("in Speech service, end of function, text is: " + vm.text);

			return vm.speak(vm.text);
		}
	])
})();
