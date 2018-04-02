/**
 * Created by Tom S.
 */
(function (that) {
    chrome.browserAction.setTitle({
        //title: "Server360 Conatinermonitor"
        title: chrome.i18n.getMessage("buttonName")
    });

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.notifications.create({
                type: "basic",
                iconUrl: "assets/ts.png",
                title: "Hey moin: " + tabs.length + '#' + tabs[0].title,
                message: request.data
            });
        });
    });
})(this);
