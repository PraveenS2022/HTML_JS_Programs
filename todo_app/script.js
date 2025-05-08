// Select elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

// Mark task as completed
function toggleComplete(span) {
  span.parentElement.classList.toggle('completed');
}

// Delete a task
function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

// Optional: Add task on pressing Enter key
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
