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