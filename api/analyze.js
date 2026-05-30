// api/analyze.js — Vercel Serverless Function
// Gemini API key stays here — never exposed to frontend

export default async function handler(req, res) {

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Basic origin check — only allow your own domain
//   const origin = req.headers.origin || "";
//  const allowed = [
//   "http://localhost:5500",
//   "http://127.0.0.1:5500",
//   "https://mediassist-pied.vercel.app"
//   ];

//   if (!allowed.includes(origin)) {
//     return res.status(403).json({ error: "Forbidden" });
//   }
const origin = req.headers.origin || req.headers.referer || "";
res.setHeader("Access-Control-Allow-Origin", "*");

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const { contents, generationConfig, safetySettings } = req.body;

    // Validate request body
    if (!contents || !Array.isArray(contents)) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const GEMINI_MODEL   = "gemini-2.5-flash";
    const GEMINI_URL     = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

    const geminiRes = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents, generationConfig, safetySettings })
    });

    const data = await geminiRes.json();

    // Forward Gemini status and response to frontend
    return res.status(geminiRes.status).json(data);

  } catch (err) {
    console.error("Serverless error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}