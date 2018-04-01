(function() {
  var localStorage = window.localStorage;
  var port = chrome.runtime.connect({name: 'beispiel'});
  var tasks = [];
  if (localStorage.tasks) {
    tasks = JSON.parse(localStorage.tasks);
  }
  var input = $('#taskInput');
  var taskList = $('#taskList');
  if (tasks.length > 0) {
    for (var i = 0; i < tasks.length; i++) {
      $('<div>' + tasks[i] + '</div>').appendTo(taskList);
    }
  }
  $('#add').click(function() {
    var task = input.val();
    input.val('');

    chrome.runtime.sendMessage({task: task}, function(response) {
      if (!response.okay) return;
      tasks.push(task);
      $('<div>' + task + '</div>').appendTo(taskList);
      localStorage.tasks = JSON.stringify(tasks);
      port.postMessage({added: true});
    });
  });
}())
