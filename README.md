# LinkedIn Tools

A collection of browser-based automation scripts for LinkedIn.

## Withdraw Script

Automatically withdraws sent LinkedIn connection invitations from your account.

### Features

- 🔄 Automatically withdraws all sent invitations
- 🔁 Auto-navigates back to "Sent" tab if LinkedIn switches to "Received"
- ⏸️ Kill switch mechanism (`window.__LI_STOP__`) to stop execution
- 📄 Automatically loads more invitations when needed
- 🎯 Handles confirmation dialogs automatically
- ⏱️ Built-in delays to prevent rate limiting

### Usage

1. **Navigate to LinkedIn Sent Invitations Page**
   - Go to: https://www.linkedin.com/mynetwork/invitation-manager/sent/

2. **Open Browser Console**
   - **Chrome/Edge**: Press `F12` or `Ctrl+Shift+J` (Windows/Linux) / `Cmd+Option+J` (Mac)
   - **Firefox**: Press `F12` or `Ctrl+Shift+K` (Windows/Linux) / `Cmd+Option+K` (Mac)
   - **Safari**: Enable Developer menu first, then press `Cmd+Option+C`

3. **Copy and Paste the Script**
   - Copy the entire contents of `withdraw.js`
   - Paste it into the console and press `Enter`

4. **Monitor Progress**
   - The script will run automatically, withdrawing invitations one by one
   - Check the console for status messages

5. **Stop the Script (if needed)**
   - In the console, type: `window.__LI_STOP__ = true`
   - Press `Enter` to stop execution

### Important Notes

⚠️ **Warning**: This script performs actions on your LinkedIn account. Use at your own risk.

- The script includes delays to avoid overwhelming LinkedIn's servers
- Keep the browser tab active while the script is running
- If the script stops unexpectedly, check the console for errors
- The script will automatically reload the page if it can't find more invitations after several attempts

### How It Works

1. Checks if you're on the "Sent" invitations page
2. Finds and clicks "Withdraw" buttons
3. Confirms withdrawal in modal dialogs
4. Loads more invitations when needed
5. Reloads the page if no more invitations are found

### Requirements

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Active LinkedIn account with sent invitations
- JavaScript enabled in your browser

## License

This project is provided as-is for educational purposes.

