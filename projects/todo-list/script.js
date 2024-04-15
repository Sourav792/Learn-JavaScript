// Load existing todos from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Display existing todos
const todoList = document.getElementById('todoList');

function displayTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${todo.text} - ${todo.date}</span>
      <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

displayTodos();

// Add new todo
function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const text = todoInput.value.trim();
  if (text !== '') {
    const newTodo = {
      text: text,
      date: new Date().toLocaleDateString()
    };
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
    todoInput.value = '';
  }
}

// Delete todo
function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodos();
}
