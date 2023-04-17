/* This code is setting up a listener for the `chrome.alarms` API. When an alarm is triggered, the
function inside the `addListener` method is executed. In this case, the function logs the alarm
object to the console and creates a notification using the `chrome.notifications` API. The
notification has a title, message, icon, and a button with the title "Спасибо". The notification is displayed to the user. */
chrome.alarms.onAlarm.addListener((alarm) => {
    console.log('onAlarm', alarm)
    chrome.notifications.create('dis-dex', {
        buttons: [
            {title: 'Спасибо'}
        ],
        iconUrl: '/icons/warning128.png',
        message: 'Соединение отключено.', 
        priority: 0,
        title: 'Dialer EXpress',
        type: 'basic'
    }, (e) => {
        console.log("Last error:", chrome.runtime.lastError)
    })
})

/* This code is listening for changes in the Chrome storage and specifically for changes in the
"status" key. If the "status" key has a new value, it sets the badge text of the Chrome extension to
"ON". If the "status" key has no value or a falsy value, it sets the badge text to an empty string.
This is likely used to indicate the current status of the extension to the user. */
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes?.status) {
        if (changes.status.newValue) {
            chrome.action.setBadgeText({ text: "ON" })
        } else {
            chrome.action.setBadgeText({ text: "" })
        }
    }
})

