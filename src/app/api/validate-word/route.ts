// ✅ Gemini 2.0 Flash Lite integration in Next.js (TypeScript)
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { word } = req.body;

  if (!word || typeof word !== "string") {
    return res.status(400).json({ valid: false, reason: "No word provided" });
  }

  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Only reply with "yes" or "no". Is "${word}" a valid computer science or programming related word?`,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    const modelReply = data.candidates?.[0]?.content?.parts?.[0]?.text?.toLowerCase();

    const isValid = modelReply?.includes("yes") && !modelReply.includes("no");

    return res.status(200).json({ valid: isValid, reply: modelReply });
  } catch (error) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ valid: false, reason: "Gemini API call failed" });
  }
}
