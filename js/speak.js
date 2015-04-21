function speak(text) {
	var utterance = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();

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

	window.speechSynthesis.speak(utterance);
}

speak("Hello World");
