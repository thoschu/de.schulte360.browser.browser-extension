(function() {
  var localStorage = window.localStorage;
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
    tasks.push(task);
    $('<div>' + task + '</div>').appendTo(taskList);
    localStorage.tasks = JSON.stringify(tasks);
  });
}())
