from flask import Flask, request, jsonify
import joblib

# ======================
# Load model & vectorizer
# ======================
model = joblib.load("model_v2.pkl")
vectorizer = joblib.load("vectorizer_v2.pkl")

app = Flask(__name__)

# ======================
# Route prediksi
# ======================
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    link = data.get("link", "")

    if not link:
        return jsonify({"error": "Link tidak boleh kosong"}), 400

    # Vectorize link
    X_vec = vectorizer.transform([link])
    pred_label = model.predict(X_vec)[0]

    # Tentukan kategori & risiko
    if pred_label == "aman":
        category = "normal"
        status = "aman"
        tingkat_resiko = "rendah"
    else:
        category = "terlarang"
        status = "tidak aman"
        tingkat_resiko = "tinggi"

    response = {
        "category": category,
        "link": link,
        "status": status,
        "tingkat_resiko": tingkat_resiko
    }

    return jsonify(response)

# ======================
# Run server
# ======================
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=7860, debug=False)