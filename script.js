function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

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
        else if (text.includes("date")) {
            reply = "Today's date is " + new Date().toLocaleDateString();
        }
        else {
            reply = "Sorry, I didn't understand";
        }

        const speech = new SpeechSynthesisUtterance(reply);
        window.speechSynthesis.speak(speech);
    };
}
