🎁 AI Gift Generator

A full-stack AI-powered web application that generates thoughtful and personalized gift ideas based on user input. Built with Node.js, Express, and a Groq-powered language model.

🚀 Features
✨ AI-generated gift suggestions
⚡ Fast responses using Groq LLMs
🎨 Clean and responsive UI
🧠 Markdown rendering for structured output
🔒 Input sanitization (XSS protection)
🌐 Full-stack architecture (Frontend + Backend)

🧠 How It Works
User enters a prompt (e.g., “gift for a programmer”)
Frontend sends a request to the backend
Backend forwards the request to the AI model via Groq
AI generates structured gift ideas
Response is converted from Markdown to HTML and displayed

🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
AI API: Groq (OpenAI-compatible)

Libraries:
Marked (Markdown parser)
DOMPurify (HTML sanitization)
dotenv (environment variables)
cors (cross-origin requests)

Create a .env file in the root directory:

GROQ_API_KEY=your_api_key_here
MODEL=llama-3.1-8b-instant
PORT=3001

▶️ Getting Started
1️⃣ Install dependencies
npm install
2️⃣ Run the server
node server.js
3️⃣ Open the app
Frontend:
http://127.0.0.1:5500 (or your live server)
Backend:
http://localhost:3001
🌐 API Endpoint
POST /api/gift

Request:

{
  "userPrompt": "gift for a gamer"
}

Response:

{
  "giftSuggestions": "### Gift Idea...\n..."
}
⚠️ Important Notes
Ensure your backend is running before using the app
Make sure CORS is enabled in server.js
Do not expose your API key publicly
Use environment variables for sensitive data

🚀 Deployment
Frontend: Vercel
Backend: Render

📌 What I Learned
Building a full-stack application
Integrating AI APIs
Handling environment variables
Managing CORS and API communication
Markdown rendering and sanitization

👨‍💻 Author
Made by Mohamed
For learning AI engineering and full-stack development.
