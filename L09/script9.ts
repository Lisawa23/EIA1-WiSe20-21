//Event handling, uder interaction is what starts the code execution.
var taskInput: HTMLElement = document.getElementById("new-task"); //Add a new task.
var addButton: HTMLElement = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder: HTMLElement = document.getElementById("incomplete-tasks"); //ul of #incomplete-tasks
var completedTasksHolder: HTMLElement = document.getElementById("completed-tasks"); //completed-tasks


//New task list item
function createNewTaskElement(taskString: string): HTMLElement {

var listItem: HTMLElement = document.createElement("li");

//input (checkbox)
var checkBox: HTMLElement = document.createElement("input"); //checkbx
//label
var label: HTMLElement = document.createElement("label"); //label
//input (text)
var editInput: HTMLElement = document.createElement("input"); //text
//button.edit
var editButton: HTMLElement = document.createElement("button"); //edit button

//button.delete
var deleteButton: HTMLElement = document.createElement("button"); //delete button

label.innerText = taskString;

//Each elements, needs appending
checkBox.type = "checkbox";
editInput.type = "text";

editButton.innerText = "Edit"; //innerText encodes special characters, HTML does not.
editButton.className = "edit";
deleteButton.innerText = "Delete";
deleteButton.className = "delete";



//and appending.
listItem.appendChild(checkBox);
listItem.appendChild(label);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);
return listItem;
}


function addTask(): void {
console.log("Add Task...");
//Create a new list item with the text from the #new-task:
var listItem: HTMLElement = createNewTaskElement(taskInput.value);

//Append listItem to incompleteTaskHolder
incompleteTaskHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);

taskInput.value = "";

}

//Edit an existing task.

function ditTask(): void {
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");


var listItem: HTMLElement = this.parentNode;

var editInput = listItem.querySelector("input[type=text]");
var label = listItem.querySelector("label");
var containsClass = listItem.classList.contains("editMode");
//If class of the parent is .editmode
if (containsClass) {
//switch to .editmode
//label becomes the inputs value.
label.innerText = editInput.value;
} else {
    editInput.value = label.innerText;
}

//toggle .editmode on the parent.
listItem.classList.toggle("editMode");
}




//Delete task.
function deleteTask(): void {
console.log("Delete Task...");

var listItem: HTMLElement = this.parentNode;
var ul: Node & ParentNode = listItem.parentNode;
//Remove the parent list item from the ul.
ul.removeChild(listItem);
}


//Mark task completed
function taskCompleted(): void {
console.log("Complete Task...");
    
//Append the task list item to the #completed-tasks
var listItem: HTMLElement = this.parentNode;
completedTasksHolder.appendChild(listItem);
bindTaskEvents(listItem, taskIncomplete);

}


function taskIncomplete(): void {
console.log("Incomplete Task...");
//Mark task as incomplete.
//When the checkbox is unchecked
//Append the task list item to the #incomplete-tasks.
var listItem: HTMLElement = this.parentNode;
incompleteTaskHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);
}



function ajaxRequest(): void {
console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

function bindTaskEvents(taskListItem: string, checkBoxEventHandler): void {
console.log("bind list item events");
//select ListItems children
var checkBox: HTMLElement = taskListItem.querySelector("input[type=checkbox]");
//var checkBox = document.querySelector("input[type=checkbox]");
var editButton: HTMLElement = taskListItem.querySelector("button.edit");
var deleteButton: HTMLElement = taskListItem.querySelector("button.delete");


//Bind editTask to edit button.
editButton.onclick = ditTask;
//Bind deleteTask to delete button.
deleteButton.onclick = deleteTask;
//Bind taskCompleted to checkBoxEventHandler.
checkBox.onchange = checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i: number = 0; i < incompleteTaskHolder.children.length; i++) {

//bind events to list items chldren(tasksCompleted)
bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}