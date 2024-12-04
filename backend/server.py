from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/home")
def home():
    return jsonify({"message": "Incident Management Backend is running"})

if __name__ == "__main__":
    app.run(debug=True)
