const fs = require('fs');
const Groq = require('groq-sdk');

const groq = new Groq({ 
    apiKey: process.env.GROQ_API_KEY 
});

async function garudEngine(prompt) {
    console.log("🚀 GARUD X is thinking...");
    try {
        const chat = await groq.chat.completions.create({
            messages: [
                { role: "system", content: "Return ONLY complete HTML code with Tailwind CSS. No markdown, no backticks, no talk." },
                { role: "user", content: prompt }
            ],
            model: "llama-3.3-70b-versatile",
        });

        let code = chat.choices[0].message.content;
        
        // No more Regex! Using simple split/join to avoid syntax errors
        let clean = code.split("```html").join("").split("```").join("").trim();

        fs.writeFileSync('index.html', clean);
        console.log("✅ Code Generated Successfully!");
    } catch (e) {
        console.log("❌ Error: " + e.message);
    }
}

garudEngine("Create a professional SaaS Finance Tracker landing page with dark theme and blue neon buttons.");
