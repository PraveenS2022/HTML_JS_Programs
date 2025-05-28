function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = () => li.classList.toggle("completed");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

for (let i = 0; i < 25; i++) {
    const dummyTask = `Dummy Task ${i + 1}`;
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = dummyTask;
    li.onclick = () => li.classList.toggle("completed");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
