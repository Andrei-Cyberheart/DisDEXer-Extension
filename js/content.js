let time = document.querySelector(".text-sm-body-1 .text-caption");
let buttonConnect = document.querySelector("#app > div.v-application--wrap > div.toolbar.toolbar > header > div > div:nth-child(3) > button");
let buttonDisconnect = document.querySelector("#app > div.v-application--wrap > div.toolbar.toolbar > header > div > div:nth-child(4) > button");

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        chrome.storage.sync.set({ "currentTime": mutation.target.textContent }, function(){
            //console.log(mutation.target.textContent)
        });
    })
})

var config = {characterData: true, subtree: true};
observer.observe(time, config)

chrome.storage.onChanged.addListener( (changes, namespace) => {
    //Press Disconnect button
    if (changes.disconnect && changes.disconnect.newValue === true) {

        //buttonConnect.click()
        buttonDisconnect.click()

        chrome.storage.sync.set({"disconnect": false})
        chrome.storage.sync.set({"status": false})
    }
})