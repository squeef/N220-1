// Select elements from the DOM
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Function to add a task
function addTask() {
  const taskText = taskInput.value;
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  // Create a complete button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.onclick = function () {
    listItem.classList.toggle("completed");
  };

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    taskList.removeChild(listItem);
  };

  // Append buttons to the list item
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  // Add the list item to the task list
  taskList.appendChild(listItem);

  // Clear the input
  taskInput.value = "";
}

// Event listener for the add button
addButton.addEventListener("click", addTask);
