# AI Estimating Assistant

This repository contains a simple static frontend that integrates with a Xano backend and Google Gemini API to parse PDF-based Scope of Work documents and generate itemized estimates.

## Files

- `index.html` — The main UI page with PDF upload and result display.
- `style.css` — CSS for dark/light mode and layout.
- `script.js` — JavaScript for PDF extraction, theme toggle, and API calls.
- `README.md` — This file.
- `.gitignore` — Ignore ZIP files.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ai-estimating-assistant.git
   cd ai-estimating-assistant
   ```

2. **Deploy to Netlify:**
   - Drag-and-drop this folder to [Netlify Drop](https://app.netlify.com/drop).
   - Or connect the GitHub repo under Netlify’s “New Site” > “Import from GitHub”.

3. **Xano Backend:**
   - Ensure your Xano `submit-sow` endpoint is public and configured.
   - No additional config needed in the frontend.

## Usage

1. Open the live site.
2. Switch between Day/Night mode using the top-right toggle.
3. Upload your SOW PDF.
4. View the parsed, itemized response below.

## License

MIT License
