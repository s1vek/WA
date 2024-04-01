document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('addTaskBtn').addEventListener('click', () => {

        const taskName = document.getElementById('taskName').value.trim();
        const taskDescription = document.getElementById('taskDescription').value.trim();
        
        if (!taskName) return; 

        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `${taskName}: ${taskDescription} <button class="removeBtn">Smazat</button> <button class="doneBtn">Hotovo</button>`;

        taskList.appendChild(taskItem);

        document.getElementById('taskName').value = '';
        document.getElementById('taskDescription').value = '';

        taskItem.querySelector('.removeBtn').addEventListener('click', () => taskItem.remove());
        taskItem.querySelector('.doneBtn').addEventListener('click', () => taskItem.classList.toggle('done'));

    });
});