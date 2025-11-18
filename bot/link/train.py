import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib

# Load dataset
with open('dataset_safe.json', 'r', encoding='utf-8') as f:
    safe_links = json.load(f)
with open('dataset_not_safe.json', 'r', encoding='utf-8') as f:
    not_safe_links = json.load(f)

data = []
for link in safe_links:
    data.append({"text": link, "label": "aman"})
for link in not_safe_links:
    data.append({"text": link, "label": "tidak_aman"})

X = [item["text"] for item in data]
y = [item["label"] for item in data]

# Vectorizer char n-grams
vectorizer = TfidfVectorizer(analyzer='char', ngram_range=(2,5))
X_vec = vectorizer.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_vec, y, test_size=0.2, random_state=42)

# Logistic Regression dengan class_weight
model = LogisticRegression(class_weight='balanced', max_iter=1000)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))

# Save
joblib.dump(model, "model_v2.pkl")
joblib.dump(vectorizer, "vectorizer_v2.pkl")
print("Training selesai.")