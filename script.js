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

   output.innerText = "⚡ Processing command...";{
        const text = event.results[0][0].transcript.toLowerCase();
        output.innerText = "You said: " + text;

        let reply = "";

        // 🕒 Time
        if (text.includes("time")) {
            reply = "The time is " + new Date().toLocaleTimeString();
        }

        // 📅 Date
        else if (text.includes("date")) {
            reply = "Today's date is " + new Date().toLocaleDateString();
        }

        // 👋 Greeting
        else if (text.includes("hello")) {
            reply = "Hello! How can I help you?";
        }

        // 😊 How are you
        else if (text.includes("how are you")) {
            reply = "I am doing great! Thank you for asking.";
        }

        // 🙋 Name
        else if (text.includes("ankitha")) {
            reply = "Hello Ankitha! Nice to meet you.";
        }

        // 🌐 Open Apps (web apps)
        else if (text.includes("open youtube")) {
            window.open("https://www.youtube.com");
            reply = "Opening YouTube";
        }

        else if (text.includes("open google")) {
            window.open("https://www.google.com");
            reply = "Opening Google";
        }

        else if (text.includes("open gmail")) {
            window.open("https://mail.google.com");
            reply = "Opening Gmail";
        }

        else if (text.includes("open whatsapp")) {
            window.open("https://web.whatsapp.com");
            reply = "Opening WhatsApp";
        }

        else if (text.includes("open instagram")) {
            window.open("https://www.instagram.com");
            reply = "Opening Instagram";
        }

        // 🔍 Search
        else if (text.includes("search")) {
            let query = text.replace("search", "");
            window.open("https://www.google.com/search?q=" + query);
            reply = "Searching for " + query;
        }

        // ❌ Default
        else {
            reply = "Sorry, I didn't understand";
        }

        const speech = new SpeechSynthesisUtterance(reply);
        window.speechSynthesis.speak(speech);
    };
}
