"use client";

import React, { useState } from "react";

const Hackle = () => {
  const [word, setWord] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const validateWithGemini = async (word: string) => {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
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
                    text: `Only answer "yes" or "no". Is "${word}" a valid computer science or programming term?`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();

      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.toLowerCase() || "";

      console.log("Gemini reply:", reply);

      return reply.includes("yes") && !reply.includes("no");
    } catch (error) {
      console.error("Validation error:", error);
      return false;
    }
  };

  const handleClick = async () => {
    const result = await validateWithGemini(word);
    setIsValid(result);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Validate
      </button>

      {isValid !== null && (
        <p className="mt-4">
          Word is {isValid ? "✅ valid" : "❌ not valid"}.
        </p>
      )}
    </div>
  );
};

export default Hackle;
