// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create task item
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  // Create task text
  const taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;
  taskItem.appendChild(taskTextElement);

  // Add click event to toggle completion
  taskTextElement.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // Add event to delete the task
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = "";
}

// Add event listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
