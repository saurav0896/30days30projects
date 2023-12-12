
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert('Please enter a task!');
        return;
    }
    const row = taskList.insertRow();
    row.innerHTML = `
      <td>${taskText}</td>
      <td class="text-right">
        <i class="bi bi-trash" onclick="deleteTask(this)"></i>
      </td>
    `;
    taskInput.value = '';
}

function deleteTask(icon) {
    const row = icon.closest('tr');
    row.remove();
}
