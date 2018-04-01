(function() {
  chrome.devtools.panels.create("Hello World", "icons/icon.png", "panel.html", function(panel) {
    chrome.devtools.inspectedWindow.eval("TrelloVersion", function(result, isException) {
      console.log(result);
    })
  });

  chrome.devtools.panels.elements.createSidebarPane("Sidebar Pane", function(sidebar) {
    sidebar.setExpression("$('body')");
  });
}())
