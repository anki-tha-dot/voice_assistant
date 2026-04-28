function startListening() {
    const output = document.getElementById("output");
    const history = document.getElementById("history");

const li = document.createElement("li");
li.innerText = "You: " + text + " | AI: " + reply;

history.appendChild(li);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Use Google Chrome");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.start();

    recognition.onstart = function () {
        output.innerText = "🎤 Listening...";
    };

    recognition.onerror = function (event) {
        output.innerText = "Error: " + event.error;
    };

    recognition.onresult = function (event) {
        const text = event.results[0][0].transcript.toLowerCase();
        output.innerText = "You said: " + text;

        let reply = "";

        if (text.includes("time")) {
            reply = "The time is " + new Date().toLocaleTimeString();
        } 
        else if (text.includes("date")) {
            reply = "Today's date is " + new Date().toLocaleDateString();
        }
        else if (text.includes("hello")) {
            reply = "Hello! How can I help you?";
        }
        else if (text.includes("how are you")) {
            reply = "I am doing great!";
        }
        else if (text.includes("open youtube")) {
            window.open("https://www.youtube.com");
            reply = "Opening YouTube";
        }
        else {
            reply = "Sorry, I didn't understand";
        }

        const speech = new SpeechSynthesisUtterance(reply);
        window.speechSynthesis.speak(speech);
    };
}
