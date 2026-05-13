const fs = require('fs');
const Groq = require('groq-sdk');
const key = process.env.GROQ_API_KEY;
const client = new Groq({ apiKey: key });

async function run(p) {
    console.log("🚀 Thinking...");
    try {
        const res = await client.chat.completions.create({
            messages: [
                { role: "system", 
                  content: "Return ONLY HTML with Tailwind. No markdown." 
                },
                { role: "user", content: p }
            ],
            model: "llama-3.3-70b-versatile",
        });

        let h = res.choices[0].message.content;
        
        // Short lines to prevent Termux wrapping
        let c = h.split("`").join("");
        c = c.split("html").join("");
        
        fs.writeFileSync('index.html', c.trim());
        console.log("✅ GARUD X: Done!");
    } catch (e) {
        console.log("❌ Error: " + e.message);
    }
}

const prompt = "Create a professional GARUD X Signup page. Dark theme, blue neon buttons.";
run(prompt);
