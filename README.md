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

#### Method: Run as Snippet in Developer Tools

1. **Navigate to LinkedIn Sent Invitations Page**
   - Go to: https://www.linkedin.com/mynetwork/invitation-manager/sent/

2. **Open Developer Tools**
   - **Chrome/Edge**: Press `F12` or `Ctrl+Shift+I` (Windows/Linux) / `Cmd+Option+I` (Mac)
   - **Firefox**: Press `F12` or `Ctrl+Shift+I` (Windows/Linux) / `Cmd+Option+I` (Mac)

3. **Open Snippets Panel (Chrome/Edge)**
   - Click on the **Sources** tab (or **Debugger** in Firefox)
   - In Chrome/Edge, look for **Snippets** in the left sidebar (if not visible, click the `>>` icon to expand)
   - Click on **Snippets** to open the snippets panel

4. **Create a New Snippet**
   - Right-click in the Snippets panel and select **New snippet**
   - Name it (e.g., "LinkedIn Withdraw")

5. **Add the Script**
   - Copy the entire contents of `withdraw.js`
   - Paste it into the snippet editor
   - Press `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac) to save

6. **Run the Snippet**
   - Right-click on the snippet name
   - Select **Run** (or press `Ctrl+Enter` / `Cmd+Enter`)
   - The script will start executing automatically

7. **Monitor Progress**
   - Check the **Console** tab for status messages
   - The script will run automatically, withdrawing invitations one by one

8. **Stop the Script (if needed)**
   - In the **Console** tab, type: `window.__LI_STOP__ = true`
   - Press `Enter` to stop execution

#### Alternative: Run in Console (Quick Method)

If you prefer not to use snippets, you can also:
1. Open the **Console** tab in Developer Tools
2. Copy and paste the entire contents of `withdraw.js`
3. Press `Enter` to run

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

