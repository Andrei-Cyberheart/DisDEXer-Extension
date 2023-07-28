let time = document.querySelector(".text-md-body-1 .text-caption");
let buttonConnect = document.querySelector("#app > div.v-application--wrap > div.toolbar.toolbar > header > div > div:nth-child(3) > button");
let buttonDisconnect = document.querySelector("#app > div.v-application--wrap > div.toolbar.toolbar > header > div > div:nth-child(4) > button");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "get_element_value") {
        sendResponse({ value: time.innerText });
    }
});

chrome.storage.onChanged.addListener( (changes, namespace) => {
    //Press Disconnect button
    if (changes.disconnect && changes.disconnect.newValue === true) {

        //buttonConnect.click()
        buttonDisconnect.click()

        chrome.storage.sync.set({"disconnect": false})
        chrome.storage.sync.set({"status": false})
    }
})