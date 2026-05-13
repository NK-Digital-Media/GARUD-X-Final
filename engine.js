const fs = require('fs');
const Groq = require('groq-sdk');
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function run(p) {
    console.log("🚀 GARUD X: Thinking...");
    try {
        const res = await client.chat.completions.create({
            messages: [
                { role: "system", content: "Return ONLY full HTML. Start with <!DOCTYPE html>. Use Tailwind CDN. No backticks. No markdown." },
                { role: "user", content: p }
            ],
            model: "llama-3.3-70b-versatile",
        });

        let html = res.choices[0].message.content;
        
        // Solid Cleanup: Sirf <!DOCTYPE se lekar </html> tak ka hissa uthayega
        const start = html.indexOf("<!DOCTYPE");
        const end = html.lastIndexOf("</html>") + 7;
        const final = html.substring(start, end);

        fs.writeFileSync('index.html', final);
        console.log("✅ GARUD X: UI Cleaned & Updated!");
    } catch (e) {
        console.log("❌ Error: " + e.message);
    }
}

run("Create a high-end GARUD X Signup page. Dark glassmorphism, neon blue glow buttons, Tailwind CSS, and ultra-modern look.");
