# 💊 MediAssist — Prescription Reader
**Built by Nishant · Learn and Grow Technology**

AI-powered prescription reader that explains medicines in simple English or Hindi.

---

## 🚀 Quick Setup

### Step 1 — Get Gemini API Key (Free)
1. Go to https://aistudio.google.com/app/apikey
2. Click **Create API Key**
3. Copy the key

### Step 2 — Add API Key
Open `app.js` line 7 and replace:
```js
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE";
```

### Step 3 — Test Locally
```bash
python -m http.server 5500
```
Open → http://localhost:5500

### Step 4 — Deploy to Vercel
1. Push to GitHub
2. Go to https://vercel.com → New Project → Import repo
3. Deploy → Get live link ✅

---

## ✨ Features
- 🌐 English & Hindi language support
- 📸 Upload prescription → AI auto-analyzes
- 💬 5 follow-up questions per day
- 🔒 1 upload per day (localStorage — no data collected)
- 🚫 Rejects non-prescription images
- 🛡️ Prompt injection protection
- ⚠️ Disclaimer in selected language
- 📱 Mobile friendly

---

## 📁 Files
```
prescription-reader/
├── index.html   → UI & structure
├── style.css    → Professional design
├── app.js       → Logic, API, security
└── README.md    → This file
```

---

## ⚠️ Disclaimer
For informational purposes only. Not a substitute for professional medical advice.
