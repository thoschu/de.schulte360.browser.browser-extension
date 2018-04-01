(function() {
  console.log('Hello World');
  var intervalId = setInterval(function() {
    var wnd = $('.card-detail-window');
    if (wnd.length) {
      var panel = $('.other-actions .u-clearfix');
      var panelButton = $(panel.children('.button-link')[0]).clone();
      panelButton.text('Hello World');
      panelButton.appendTo(panel);
      clearInterval(intervalId);
    }
  }, 500);
}())
