const fs = require('fs');
const Groq = require('groq-sdk');
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function build(idea) {
  console.log("🚀 GARUD X: Architecting...");
  try {
    const res = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are GARUD X AI. Build a HIGH-END website for the given profession using Tailwind CSS. Output ONLY raw HTML. No markdown." },
        { role: "user", content: idea }
      ],
      model: "llama-3.3-70b-versatile",
    });
    let h = res.choices[0].message.content;
    let c = h.split("`").join("").split("html").join("").trim();
    fs.writeFileSync('generated_project.html', c);
    console.log("✅ GARUD X: Success!");
  } catch (e) {
    console.log("❌ Error: " + e.message);
  }
}

build("Luxury jewelry store, rose gold theme, elegant fonts.");
