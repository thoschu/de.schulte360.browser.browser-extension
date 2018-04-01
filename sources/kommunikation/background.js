(function() {
  chrome.runtime.onConnect.addListener(function(port) {
    if (port.name == 'beispiel')
    port.onMessage.addListener(function(message) {
      if (message.added) {
        console.log('Task was added successfully.');
      }
    });
  });

  chrome.runtime.onMessage.addListener(function (request,sender,sendResponse) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      try {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon.png',
          title: 'Task added for ' + tabs[0].title,
          message: request.task
        });
        sendResponse({okay: true});
      } catch (err) {
        sendResponse({okay: false});
      }
    });
    return true;
  });

}())
