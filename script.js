function startListening() {
    const output = document.getElementById("output");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Use Google Chrome");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.start();

    recognition.onstart = function () {
        output.innerText = "🧠 Live Command Center: Listening...";
    };

    recognition.onerror = function (event) {
        output.innerText = "Error: " + event.error;
    };

    recognition.onresult = function (event) {
        const text = event.results[0][0].transcript.toLowerCase();

        output.innerText = "⚡ Processing command...";

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
        else if (text.includes("ankitha")) {
            reply = "Hello Ankitha! Nice to meet you";
        }
        else if (text.includes("open youtube")) {
            window.open("https://www.youtube.com");
            reply = "Executing command: Opening YouTube";
        }
        else if (text.includes("open google")) {
            window.open("https://www.google.com");
            reply = "Executing command: Opening Google";
        }
        else if (text.includes("search")) {
            let query = text.replace("search", "");
            window.open("https://www.google.com/search?q=" + query);
            reply = "Searching for " + query;
        }
        else {
            reply = "Sorry, I didn't understand";
        }

        setTimeout(() => {
            output.innerText = reply;
        }, 500);

        const speech = new SpeechSynthesisUtterance(reply);
        window.speechSynthesis.speak(speech);
    };
}
