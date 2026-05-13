const fs = require('fs');
const Groq = require('groq-sdk');
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function run(p) {
    console.log("🚀 GARUD X: Thinking...");
    try {
        const res = await client.chat.completions.create({
            messages: [
                { role: "system", content: "Return ONLY full HTML with Tailwind CDN. No markdown tags. No talk." },
                { role: "user", content: p }
            ],
            model: "llama-3.3-70b-versatile",
        });

        let html = res.choices[0].message.content;
        
        // Sabse safe cleaning method
        const final = html.split("`").join(""); 

        fs.writeFileSync('index.html', final);
        console.log("✅ GARUD X: UI Updated!");
    } catch (e) {
        console.log("❌ Error: " + e.message);
    }
}

run("Create a professional GARUD X Signup page with dark theme and blue neon buttons.");
