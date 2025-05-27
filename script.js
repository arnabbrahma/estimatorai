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
  const fileInput = document.getElementById('sow-upload');
  if (!fileInput.files.length) {
    alert('Please select a PDF file to upload.');
    return;
  }
  const file = fileInput.files[0];
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  let fullText = '';
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');
    fullText += pageText + '\n\n';
  }

  const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:8VEpb5nM/submit-sow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      project_name: 'Uploaded PDF Estimate',
      sow_text: fullText
    })
  });

  if (!response.ok) {
    alert('Error processing PDF. Please try again.');
    return;
  }

  const result = await response.json();
  const container = document.getElementById('parsed-scope-content');
  container.innerHTML = result.parsed_scope;
}
