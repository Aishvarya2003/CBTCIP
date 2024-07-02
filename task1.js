const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const completedList = document.getElementById('completed-list');

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
      completeTask(taskItem);
    });
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function completeTask(taskItem) {
  const completedItem = document.createElement('li');
  const taskLabel = taskItem.querySelector('span');
  completedItem.textContent = taskLabel.textContent;
  completedList.appendChild(completedItem);
  taskItem.remove();
}