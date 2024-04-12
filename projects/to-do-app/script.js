// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert('please add task')
        return
  } // Prevent adding empty tasks
      

    const taskText = taskInput.value;
    const currentTime = new Date().toLocaleDateString(); // Get current time

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>${taskText} - ${currentTime}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
    saveTasksToLocalStorage();
    taskInput.value = ""; // Clear input field after adding task
  }

  // Function to delete a task
  function deleteTask(element) {
    element.parentElement.remove();
    saveTasksToLocalStorage();
  }

  // Function to save tasks to localStorage
  function saveTasksToLocalStorage() {
    const taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);
  }

  // Function to load tasks from localStorage
  function loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      document.getElementById("taskList").innerHTML = savedTasks;
    }
  }

  // Load tasks when the page is loaded
  window.onload = function() {
    loadTasksFromLocalStorage();
  };