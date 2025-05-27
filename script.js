// Theme toggle logic
(function() {
  const toggleBtn = document.getElementById('mode-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('light', currentTheme === 'light');
  updateButton();

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateButton();
  });

  function updateButton() {
    const isLight = document.body.classList.contains('light');
    toggleBtn.textContent = isLight ? 'Night Mode' : 'Day Mode';
  }
})();

async function submitToAI() {
  const inputEl = document.getElementById('sow-input');
  const sowText = inputEl.value.trim();
  const outputEl = document.getElementById('parsed-scope-content');

  if (!sowText) {
    alert('Please enter the Scope of Work text.');
    return;
  }

  // Clear previous result and show a loading indicator
  outputEl.textContent = 'Processing...';

  try {
    const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:8VEpb5nM/submit-sow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        project_name: 'Text SOW Estimate',
        sow_text: sowText
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Xano error', response.status, errorText);
      alert(`Error processing text (${response.status}): see console for details.`);
      outputEl.textContent = '';
      return;
    }

    const result = await response.json();
    outputEl.textContent = result.parsed_scope;
  } catch (error) {
    console.error('Network error', error);
    alert('Network error: ' + error.message);
    outputEl.textContent = '';
  }
}
