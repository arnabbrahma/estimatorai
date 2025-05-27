# AI Estimating Assistant

This repository contains a simple static frontend that connects to a Xano backend endpoint to parse a Scope of Work using OpenAI GPT-4.

## Files

- `index.html` — The UI with an input for the SOW and a chat log.
- `style.css` — Basic styling for layout and chat.
- `script.js` — JavaScript logic that sends the SOW to the Xano endpoint and displays the response.
- `README.md` — This file.

## Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ai-estimating-tool.git
   ```
2. Navigate into the directory:
   ```bash
   cd ai-estimating-tool
   ```
3. Deploy to Netlify:
   - Drag-and-drop this folder onto https://app.netlify.com/drop
   - Or connect this repo under Netlify > New Site > Import from GitHub

## Configuration

No additional configuration is needed since the Xano endpoint URL is hardcoded in `script.js`. Make sure the endpoint is public or has proper CORS settings for your Netlify domain.

## License

This project is open-source and MIT licensed.
