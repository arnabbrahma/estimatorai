
async function submitToAI() {
  const inputText = document.getElementById("chat-input").value;
  const chatLog = document.getElementById("chat-log");

  chatLog.innerHTML += `<p><strong>You:</strong> ${inputText}</p>`;

  const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:8VEpb5nM/submit-sow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project_name: "Titanium Tank",
      sow_text: inputText
    })
  });

  const result = await response.json();
  chatLog.innerHTML += `<p><strong>AI:</strong> ${result.parsed_scope}</p>`;
  chatLog.scrollTop = chatLog.scrollHeight;
}
