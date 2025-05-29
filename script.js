const steps = [
  "Paste the scope of work",
  "Provide execution sequence as per schedule",
  "Describe quality procedures",
  "Mention technology/methods used by company",
  "Detail safety strategy",
  "Outline labor and material/subcontractor plan"
];
let index = 0, chatLog = [];

function next() {
  const input = document.getElementById("userInput").value;
  if (!input) return alert("Please type something");
  chatLog.push({ role: "user", text: input });
  index++;
  if (index >= steps.length) {
    localStorage.setItem("chat_log", JSON.stringify(chatLog));
    generateOutput();
    return;
  }
  updatePrompt();
  document.getElementById("userInput").value = "";
}

function updatePrompt() {
  const chat = document.getElementById("chat");
  const step = steps[index];
  chat.innerHTML += `<div><b>Gemini:</b> ${step}</div>`;
}

async function generateOutput() {
  const chat_log = JSON.parse(localStorage.getItem("chat_log"));
  const messages = chat_log.map(entry => ({ role: "user", parts: [{ text: entry.text }] }));

  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_GEMINI_API_KEY", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: messages })
  });

  const json = await res.json();
  const output = json.result.candidates[0].content.parts[0].text;
  localStorage.setItem("final_output", output);
  window.location.href = "execution.html";
}

updatePrompt();