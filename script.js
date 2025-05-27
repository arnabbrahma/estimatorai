async function submitToAI() {
  const fileInput = document.getElementById('sow-upload');
  if (!fileInput.files.length) {
    alert('Please select a PDF file to upload.');
    return;
  }
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);
  formData.append('project_name', 'Uploaded PDF Estimate');

  const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:8VEpb5nM/submit-sow', {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    alert('Error processing PDF. Please try again.');
    return;
  }

  const result = await response.json();
  const container = document.getElementById('parsed-scope-content');
  container.innerHTML = `<pre>${result.parsed_scope}</pre>`;
}
