/* function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var destinationList = event.target;
  
    // Check if the drop target is a list
    if (destinationList.classList.contains("list")) {
      destinationList.appendChild(draggedElement);
    }
  } */

  document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const taskModal = document.getElementById('taskModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const taskInput = document.getElementById('taskInput');
    const saveTaskBtn = document.getElementById('saveTaskBtn');

    addTaskBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    saveTaskBtn.addEventListener('click', addTask);

    function openModal() {
        taskModal.style.display = 'flex';
    }

    function closeModal() {
        taskModal.style.display = 'none';
        taskInput.value = '';
    }

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div class="task-actions">
                    <button class="delete-task-btn" onclick="deleteTask(this)">Delete</button>
                </div>
            `;

            taskList.appendChild(taskItem);
            closeModal();
        }
    }
});

function deleteTask(button) {
    const taskItem = button.closest('.task');
    taskItem.remove();
}

  