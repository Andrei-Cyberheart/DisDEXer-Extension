# DisDEXer - Disconnecter for Dialer EXpress

**Description:**

DisDEXer is a Chrome extension designed to help users manage their time efficiently while using Dialer EXpress. It allows users to set a specific break time duration, and once the break time is over, it automatically disconnects the user from Dialer EXpress. This helps users avoid spending excessive time on the platform and take necessary breaks for better productivity.

**Features:**

- Set break time duration: Users can specify the duration of their break in minutes and seconds.
- Start Timer: Clicking the "START" button initiates the timer for the specified break time.
- Stop Timer: The "STOP" button stops the timer if needed.
- Automatic Disconnect: When the break time is over, the extension automatically disconnects the user from Dialer EXpress.
- Badge Status: The extension displays an "ON" badge when the timer is active and no badge when the timer is stopped.

**Installation:**

1. Clone or download this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on the "Load unpacked" button and select the downloaded folder containing the extension files.

**Usage:**

1. Go to the Dialer EXpress website (`https://dex.survey-studio.com/`).
2. Click on the DisDEXer extension icon in the Chrome toolbar to open the popup.
3. Set the desired break time duration in minutes and seconds using the input fields.
4. Click the "START" button to start the timer.
5. The countdown will be displayed, showing the remaining time for the break.
6. Once the break time is over, the extension will automatically disconnect you from Dialer EXpress.
7. Click the "STOP" button to stop the timer before the break time is completed.

**Notes:**

- The extension uses Chrome's `chrome.alarms` API to trigger the disconnection after the break time.
- The extension uses Chrome's `chrome.notifications` API to display a notification when disconnected.
- The timer will continue running even if you close the extension popup. To stop the timer, click the "STOP" button.
- The extension works only on the Dialer EXpress website (`https://dex.survey-studio.com/`).

**Contributing:**

Contributions to DisDEXer are welcome! If you find any bugs, have suggestions, or want to add new features, please open an issue or submit a pull request.

**License:**

This project is licensed under the [GNU AGPLv3](LICENSE).

**Disclaimer:**

This extension is provided as-is and without warranty. Use it responsibly and at your own risk. The developers are not responsible for any misuse or consequences caused by the extension. Always take appropriate breaks and manage your time wisely.
