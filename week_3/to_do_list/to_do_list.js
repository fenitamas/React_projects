document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(listItem);
    }

    window.removeTask = function (element) {
        const listItem = element.closest('li');
        taskList.removeChild(listItem);
    };
});
