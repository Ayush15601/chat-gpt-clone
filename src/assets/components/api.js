const apikey = import.meta.env.VITE_GCP_API_KEY

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: apikey
});

export async function main(userask) {

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userask,
  });

  return response.text
}