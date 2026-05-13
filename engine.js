const fs = require('fs');
const Groq = require('groq-sdk');
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function build(idea) {
  console.log("🚀 GARUD X: Building Luxury...");
  try {
    const res = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are GARUD X AI. Build a high-end website using Tailwind CSS. Use dark charcoal and rose gold colors. Output ONLY clean HTML." },
        { role: "user", content: idea }
      ],
      model: "llama-3.3-70b-versatile",
    });
    let code = res.choices[0].message.content;
    let clean = code.split('```').join('').split('html').join('').trim();
    fs.writeFileSync('generated_project.html', clean);
    console.log("✅ GARUD X: Success!");
  } catch (e) {
    console.log("❌ Error: " + e.message);
  }
}

build("Luxury jewelry store, rose gold theme, dark background, elegant fonts.");
