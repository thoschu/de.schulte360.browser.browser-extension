(function() {
  chrome.runtime.onMessage.addListener(function (request,sender,sendResponse) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon.png',
        title: 'Task added for ' + tabs[0].title,
        message: request.task
      });
    });

  });

}())
