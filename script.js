// Function to add a new to-do item
function addTodo() {
    // Get input value
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new to-do item
    const todoList = document.getElementById('todoList');
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    
    // Create task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        todoList.removeChild(todoItem);
    };

    // Append elements
    todoItem.appendChild(taskSpan);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);

    // Add click event to mark as completed
    taskSpan.onclick = function() {
        toggleComplete(todoItem, taskSpan);
    };

    // Clear input
    input.value = '';
}

// Function to toggle completed status
function toggleComplete(todoItem, taskSpan) {
    todoItem.classList.toggle('completed');
    // Change text color dynamically
    taskSpan.style.color = todoItem.classList.contains('completed') ? '#28a745' : '#000';
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Example of dynamic text content change
    const header = document.querySelector('h1');
    header.addEventListener('mouseover', function() {
        header.textContent = 'Manage Your Tasks!';
        header.style.color = '#007bff';
    });
    header.addEventListener('mouseout', function() {
        header.textContent = 'My To-Do List';
        header.style.color = '#000';
    });
});
