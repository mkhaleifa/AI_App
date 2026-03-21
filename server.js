import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Enable CORS
app.use(cors({
  origin: "*"
}));
// Parse JSON
app.use(express.json());

// OpenAI client (Groq)
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

app.post("/api/gift", async (req, res) => {
  try {
    const { userPrompt } = req.body;

    const response = await openai.chat.completions.create({
      model: process.env.MODEL,
      messages: [
        { role: "system", content: "You are a helpful assistant" },
        { role: "user", content: userPrompt },
      ],
    });

    res.json({
      giftSuggestions: response.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});