//Event handling, uder interaction is what starts the code execution.
var taskInput: HTMLElement = document.getElementById("new-task"); //Add a new task.
var addButton: HTMLElement = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder: HTMLElement = document.getElementById("incomplete-tasks"); //ul of #incomplete-tasks
var completedTasksHolder: HTMLElement = document.getElementById("completed-tasks"); //completed-tasks