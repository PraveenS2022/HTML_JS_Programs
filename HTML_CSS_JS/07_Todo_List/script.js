function addTask() {
  const task = document.getElementById('task').value;
  if (task) {
    const li = document.createElement('li');
    li.innerText = task;
    document.getElementById('list').appendChild(li);
  }
}