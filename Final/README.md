# README for My Web App

Link to Webapp: http://127.0.0.1:5500/Final/final.html
Github Link:

## Overview

Welcome to My Web App! This application provides users with an interactive platform for managing tasks effectively. The main features include task creation, task deletion, and task filtering.

## Major Features

### 1. Task Creation

- **Description**: Users can add new tasks to their to-do list.
- **Implementation Logic**:
  - A form is provided where users can input the task description.
  - Upon submission, the input is captured and stored in an array of task objects.

### 2. Task Deletion

- **Description**: Users can remove tasks from their list.
- **Implementation Logic**:
  - Each task is displayed with a delete button.
  - When clicked, the corresponding task is removed from the array, and the UI is updated to reflect this change.

### 3. Task Filtering

- **Description**: Users can filter tasks based on their completion status (completed or pending).
- **Implementation Logic**:
  - A dropdown menu allows users to select the desired filter.
  - A loop iterates through the task array, using conditionals to determine which tasks to display based on the selected filter.

## Key JavaScript Concepts

### Loops

- Used to iterate through the task array for rendering tasks and applying filters.
- Example: `for` loop to display each task dynamically in the HTML.

### Conditionals

- Used to check task completion status when filtering tasks.
- Example: `if` statements to determine which tasks to show based on user input.

### Data Types

- The app primarily uses arrays to store tasks (array of objects).
- Each task object contains properties such as `id`, `description`, and `completed`.

### DOM References

- JavaScript is used to manipulate the Document Object Model (DOM) to dynamically add, remove, and update tasks on the webpage.
- Example: `document.getElementById()` is used to get references to HTML elements for task input and display.

## Conclusion

This README provides a brief overview of the features and logic behind My Web App. It showcases the essential JavaScript concepts that are leveraged to create an interactive user experience. Happy task managing!
