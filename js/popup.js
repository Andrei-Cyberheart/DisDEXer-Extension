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

if (startButton) {
    startButton.addEventListener("click", function(){
        console.log("Clicked Start button")

        var currentTime, breakTime;

        chrome.storage.sync.set({"disconnect": false})
        chrome.storage.sync.set({"status": true})

        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {message: "get_element_value"}, function (response) {
                currentTime = convertStringToDateTime(response.value)
                breakTime = convertStringToDateTime(inputMinutes.value + ":" + inputSeconds.value)
                let lastTime = new Date((breakTime.getTime() - currentTime.getTime()))
                console.log(`CurrentTime: ${currentTime}`)
                console.log(`BreakTime: ${breakTime}`)
                console.log(`LastTime: ${lastTime}`)

                Timer(lastTime)
            })
        })
    });
}

if (stopButton) {
    stopButton.addEventListener("click", async (e) => {
        console.log("Clicked Stop button")

        chrome.storage.sync.set({"status": false, "disconnect": false, "breakTime": "01:00"})

        chrome.alarms.clear("dis-dex")
        statusTimer = false
    });
}

inputMinutes.addEventListener("change", (event) => {
    let lastTime = convertStringToDateTime(timeDisplay.textContent)
    let minutes = event.target.value
    var seconds = String(lastTime.getSeconds())
    setTimeDisplay(minutes, seconds)
});

inputSeconds.addEventListener("change", (event) => {
    let lastTime = convertStringToDateTime(timeDisplay.textContent)
    var minutes = String(lastTime.getMinutes())
    let seconds = event.target.value
    setTimeDisplay(minutes, seconds)
});

function Timer(lastTime) {

    statusTimer = true
    let finishTime = new Date()
    finishTime.setMinutes(finishTime.getMinutes() + lastTime.getMinutes())
    finishTime.setSeconds(finishTime.getSeconds() + lastTime.getSeconds())
    var x = setInterval(function() {

        var now = new Date();

        var distance = finishTime.getTime() - now.getTime()

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeDisplay(minutes, seconds)

        if (!statusTimer) {
            clearInterval(x)
        }

        if (distance < 1000) {
            clearInterval(x)
            statusTimer = false
            chrome.alarms.create("dis-dex", { delayInMinutes: 0 })
            chrome.storage.sync.set({"disconnect": true})
        }
    }, 1000);
}

function setTimeDisplay(minutes, seconds) {
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    let setTime = `${minutes}:${seconds}`
    timeDisplay.textContent = setTime
}

function convertStringToDateTime(timeString) {
    let date = new Date(0);
    let [minutes, seconds] = String(timeString).split(":");
    date.setMinutes(parseInt(minutes));
    date.setSeconds(parseInt(seconds));
    return date;
}