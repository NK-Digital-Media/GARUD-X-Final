const fs = require('fs');
const Groq = require('groq-sdk');
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function build(idea) {
  console.log("🚀 GARUD X: Architecting Cinematic UI...");
  try {
    const res = await client.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: "You are GARUD X AI Architect. Build a WORLD-CLASS website with Tailwind CSS. Use: 1. Deep glassmorphism 2. Neon glow 3. Grid backgrounds 4. Animated hovers. Output ONLY raw HTML starting with <!DOCTYPE html>." 
        },
        { role: "user", content: idea }
      ],
      model: "llama-3.3-70b-versatile",
    });
    
    let code = res.choices[0].message.content;
    let start = code.indexOf('<!DOCTYPE');
    if (start === -1) start = code.indexOf('<html');
    
    let clean = code.substring(start).split('```').join('').trim();
    
    fs.writeFileSync('generated_project.html', clean);
    console.log("✅ GARUD X: Cinematic Build Success!");
  } catch (e) {
    console.log("❌ Error: " + e.message);
  }
}

build("Ultra-premium Cyberpunk Gaming Dashboard, neon purple and green glow, glassmorphism cards, interactive futuristic grid.");
