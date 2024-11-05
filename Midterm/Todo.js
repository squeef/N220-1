// Variable to track the list of todo items
let todoItems = [];

// Function to add an item to the todo list
function addItem() {
  // Get the input value from the text field
  const itemInput = document.getElementById("item");
  const item = itemInput.value.trim(); // Get the value and trim whitespace

  // Check if the input is not empty
  if (item) {
    // Add the item to the todoItems array
    todoItems.push(item);

    // Update the list displayed in the <ul> element
    updateList();

    // Clear the input field after adding
    itemInput.value = "";
  } else {
    alert("Please enter a todo item.");
  }
}

// Function to update the <ul> element with current todo items
function updateList() {
  const listElement = document.getElementById("list");
  listElement.innerHTML = ""; // Clear existing list items

  // Loop through the todoItems array and create <li> elements
  todoItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item; // Set the text content of the <li>
    listElement.appendChild(li); // Append the <li> to the <ul>
  });
}

// Function to summarize the list of todo items
function summarizeList() {
  const summaryElement = document.getElementById("summary");

  // Prepare the summary text
  let summaryText = "Total Items: " + todoItems.length + "<br />";

  if (todoItems.length > 0) {
    summaryText += "First Item: " + todoItems[0] + "<br />";
    summaryText += "Last Item: " + todoItems[todoItems.length - 1] + "<br />";
  } else {
    summaryText += "First Item: None<br />";
    summaryText += "Last Item: None<br />";
  }

  // Update the summary <p> element with the summary text
  summaryElement.innerHTML = summaryText;
}
