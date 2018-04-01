(function() {
  console.log(chrome.i18n.getMessage('logMessage'));
  chrome.browserAction.setTitle({
    title: 'Dynamischer Titel'
  });
}())
