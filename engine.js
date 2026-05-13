const fs = require('fs');
const Groq = require('groq-sdk');
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function build(idea) {
  console.log("🚀 GARUD X: Creating Cyberpunk Design...");
  try {
    const res = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are GARUD X AI. Build a futuristic Cyberpunk website with Tailwind CSS. Use neon purple/green. Output ONLY HTML starting with <!DOCTYPE html>." },
        { role: "user", content: idea }
      ],
      model: "llama-3.3-70b-versatile",
    });
    let code = res.choices[0].message.content;
    let start = code.indexOf('<!DOCTYPE');
    if (start === -1) start = code.indexOf('<html');
    let clean = code.substring(start).split('```').join('').trim();
    fs.writeFileSync('generated_project.html', clean);
    console.log("✅ GARUD X: Cyberpunk Build Ready!");
  } catch (e) {
    console.log("❌ Error: " + e.message);
  }
}

build("Cyberpunk gaming lounge, neon purple and green theme, glitch effects, futuristic cards.");
