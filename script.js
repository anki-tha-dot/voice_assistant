function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech Recognition not supported in this browser");
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function() {
        document.getElementById("output").innerText = "Listening...";
    };

    recognition.onresult = function(event) {
        const text = event.results[0][0].transcript.toLowerCase();
        document.getElementById("output").innerText = "You said: " + text;

        let reply = "";

        if (text.includes("time")) {
            reply = "The time is " + new Date().toLocaleTimeString();
        } 
        else if (text.includes("hello")) {
            reply = "Hello! How can I help you?";
        } 
        else {
            reply = "Sorry, I didn't understand";
        }

        const speech = new SpeechSynthesisUtterance(reply);
        window.speechSynthesis.speak(speech);
    };
}
