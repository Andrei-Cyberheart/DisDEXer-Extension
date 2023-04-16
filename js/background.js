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

// Badge Toggle
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes?.status) {
        if (changes.status.newValue) {
            chrome.action.setBadgeText({ text: "ON" })
        } else {
            chrome.action.setBadgeText({ text: "" })
        }
    }
})

