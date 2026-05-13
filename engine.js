const fs = require('fs');
const Groq = require('groq-sdk');

// Security fix: API Key ab process environment se uthayi jayegi
const groq = new Groq({ 
    apiKey: process.env.GROQ_API_KEY 
});

async function updatePortal() {
    console.log("🚀 GARUD X: Updating Portal with Subscription UI...");

    const portalHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <title>GARUD X | AI App Generator</title>
    <style>
        .glow-btn { transition: 0.3s; box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); }
        .glow-btn:hover { box-shadow: 0 0 25px rgba(59, 130, 246, 0.8); transform: translateY(-2px); }
    </style>
</head>
<body class="bg-slate-900 text-white font-sans min-h-screen">
    <!-- Navigation -->
    <nav class="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <h1 class="text-3xl font-black tracking-tighter text-blue-500">GARUD<span class="text-white text-xl ml-1">X</span></h1>
        <div class="space-x-4">
            <button class="text-slate-400 font-medium hover:text-white transition">Login</button>
            <button class="bg-blue-600 px-6 py-2 rounded-full font-bold glow-btn">Get Pro</button>
        </div>
    </nav>

    <!-- Main Section -->
    <main class="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 class="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            One Prompt. Full App.
        </h2>
        <p class="text-slate-400 text-xl mb-12">The world's fastest AI development engine for self-employed creators.</p>

        <!-- Interactive Prompt Box -->
        <div class="bg-slate-800 p-8 rounded-[2rem] border border-slate-700 shadow-2xl text-left">
            <label class="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Describe your vision</label>
            <textarea id="pInput" rows="4" class="w-full p-5 bg-slate-900 rounded-2xl text-white border border-slate-700 focus:border-blue-500 outline-none transition resize-none" placeholder="e.g. Create a professional Gym Landing page with dark theme and pricing..."></textarea>
            
            <div class="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-2 text-blue-400">
                    <i class="fas fa-bolt text-yellow-400"></i>
                    <span class="text-sm font-bold uppercase tracking-tight">AI Engine: Groq Llama 3.3</span>
                </div>
                <button onclick="checkSub()" class="w-full md:w-auto bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-2xl font-black text-xl transition-all shadow-lg shadow-blue-900/20">
                    GENERATE & GO LIVE
                </button>
            </div>
        </div>

        <!-- Subscription Pricing -->
        <div class="mt-20 grid md:grid-cols-2 gap-8 text-left">
            <div class="p-8 border border-slate-800 rounded-3xl bg-slate-800/30">
                <h4 class="font-bold text-slate-500 uppercase">Starter</h4>
                <p class="text-4xl font-black mt-2">₹0</p>
                <ul class="mt-6 space-y-3 text-slate-400">
                    <li><i class="fas fa-check text-emerald-500 mr-2"></i> 1 Basic Web Page</li>
                    <li><i class="fas fa-check text-emerald-500 mr-2"></i> Local Preview</li>
                    <li class="opacity-50"><i class="fas fa-times text-red-500 mr-2"></i> No Custom Domain</li>
                </ul>
            </div>
            <div class="p-8 border-2 border-blue-500 rounded-3xl bg-blue-600/10 relative overflow-hidden">
                <div class="absolute top-4 right-4 bg-blue-500 text-xs font-bold px-2 py-1 rounded">MOST POPULAR</div>
                <h4 class="font-bold text-blue-400 uppercase">Pro Developer</h4>
                <p class="text-4xl font-black mt-2">₹999<span class="text-lg font-normal text-slate-500">/mo</span></p>
                <ul class="mt-6 space-y-3 text-blue-100">
                    <li><i class="fas fa-check text-blue-400 mr-2"></i> Unlimited AI App Generation</li>
                    <li><i class="fas fa-check text-blue-400 mr-2"></i> Instant GitHub Deployment</li>
                    <li><i class="fas fa-check text-blue-400 mr-2"></i> Premium UI Components</li>
                </ul>
                <button onclick="payNow()" class="mt-8 w-full bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-500 transition">Subscribe Now</button>
            </div>
        </div>
    </main>

    <script>
        function checkSub() {
            const prompt = document.getElementById('pInput').value;
            if(!prompt) return alert("Bhai, pehle idea toh likho!");
            alert("Payment Required! Please subscribe to the Pro plan to activate the GARUD X AI Engine.");
        }
        function payNow() {
            alert("Redirecting to Payment Gateway... (Razorpay Integration Coming Soon)");
        }
    </script>
</body>
</html>`;

    fs.writeFileSync('index.html', portalHTML);
    console.log("✅ GARUD X: Portal Updated Successfully!");
}

updatePortal();
