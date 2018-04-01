(function() {
  chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostSuffix: 'trello.com', schemes: ['https']}
          })
        ],
        actions: [
          new chrome.declarativeContent.ShowPageAction()
        ]
      }]);
    });
  });

  chrome.pageAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, {code: 'console.log("Hello World")'});
  });
}())
