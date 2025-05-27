function submitToAI() {
  const parsedContent = document.getElementById("parsed-scope-content");
  parsedContent.innerHTML = `<p><strong>Project Type:</strong> Replace Grade 2 Titanium Tank</p>
<p><strong>Key Components:</strong> Roof, Shell, Floor, Nozzles</p>
<p><strong>Estimated Dimensions:</strong> Dia: 5.0m, H: 7.5m</p>`;

  const mtoTable = document.getElementById("mto-table");
  mtoTable.innerHTML = `
    <tr><th>Item</th><th>Quantity</th><th>Unit</th><th>Material</th></tr>
    <tr><td>Tank Shell</td><td>80</td><td>m²</td><td>Grade 2 Titanium</td></tr>
    <tr><td>Roof Panels</td><td>6</td><td>pcs</td><td>Titanium</td></tr>`;

  const estimateTable = document.getElementById("estimate-table");
  estimateTable.innerHTML = `
    <tr><th>Scope Item</th><th>Cost</th><th>Labor (hrs)</th><th>AI Suggestion</th></tr>
    <tr><td>Shell Fabrication</td><td>$112,000</td><td>220</td><td>Compare with EPCO rate</td></tr>
    <tr><td>Roof Install</td><td>$58,000</td><td>140</td><td>Use Guildfords insulation norm</td></tr>`;
}

function exportToExcel() {
  alert("Exporting to Excel...");
}

function saveToDatabase() {
  alert("Saving estimate to database...");
}
