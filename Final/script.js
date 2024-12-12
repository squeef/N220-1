// Select elements from the DOM
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const dashboardSection = document.getElementById("dashboardSection");
const loginSection = document.getElementById("loginSection");
const loggedInUser = document.getElementById("loggedInUser");
const logoutButton = document.getElementById("logoutButton");
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskProperty = document.getElementById("taskProperty");
const newPropertyOption = document.getElementById("newPropertyOption");
const addPropertyOption = document.getElementById("addPropertyOption");
const propertyOptionsList = document.getElementById("propertyOptionsList");

let currentUser = null;
let tasks = [];
let propertyOptions = [];

// Login functionality
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (validateCredentials(username, password)) {
    currentUser = username;
    loggedInUser.textContent = username;
    loginSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
    loadTasks();
    loadPropertyOptions();
  } else {
    loginError.textContent = "Invalid username or password";
  }
});

function validateCredentials(username, password) {
  if (username.trim() === "" || password.trim() === "") {
    loginError.textContent = "Username and password cannot be empty";
    return false;
  }
  if (password.length < 8) {
    loginError.textContent = "Password must be at least 8 characters long";
    return false;
  }
  if (!/\d/.test(password)) {
    loginError.textContent = "Password must contain at least 1 number";
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    loginError.textContent = "Password must contain at least 1 capital letter";
    return false;
  }
  return true;
}
