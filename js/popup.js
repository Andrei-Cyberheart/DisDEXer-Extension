let startButton = document.querySelector("#start-button")
let stopButton = document.querySelector("#stop-button")
let inputMinutes = document.querySelector("#input-minutes")
let inputSeconds = document.querySelector("#input-seconds")
let timeDisplay = document.querySelector("#last-time-display")
let logButton = document.querySelector("#log-button")

var statusTimer = false

//Initialisation Badge Status
chrome.storage.sync.get(["status", "disconnect", "currentTime"], (result) => {
    if (result.status) {
        chrome.action.setBadgeText({ text: "ON" })
    }
});

if (logButton) {
    logButton.addEventListener("click", async (e) => {
        console.log("Clicked Log button")
        chrome.storage.sync.get(null, function(items) {
            let allKeys = Object.keys(items);
            let allValues = Object.values(items)
            console.log(items);
        });
        console.log(`statusTimer: ${statusTimer}`)
    });
}