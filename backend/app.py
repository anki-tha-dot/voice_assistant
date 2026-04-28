from flask import Flask, request, jsonify
import datetime

app = Flask(__name__)

@app.route('/command', methods=['POST'])
def command():
    data = request.json
    text = data['text'].lower()

    if "time" in text:
        reply = "The time is " + datetime.datetime.now().strftime("%H:%M")

    elif "hello" in text:
        reply = "Hello! How can I help you?"

    else:
        reply = "Sorry, I didn't understand"

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run()
