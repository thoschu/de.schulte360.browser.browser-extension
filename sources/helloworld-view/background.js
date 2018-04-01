(function() {
  console.log('Hello World from extension!');
  chrome.browserAction.setTitle({
    title: 'Dynamischer Titel'
  });
}())
