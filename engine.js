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

garudEngine("Create a professional Auth/Signup page for 'GARUD X'. The page must have: 1. A high-end dark glassmorphism UI. 2. 'GARUD X' branding at the top in neon blue. 3. A beautiful Signup form with Email, Password, and Full Name fields. 4. A 'Create Free Account' button with a glowing effect. 5. Social login options (Google/GitHub). 6. Background should have subtle animated particles or a deep space gradient.");

