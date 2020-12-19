var toDOint = [{
        todosText: "Lorem",
        todosChecked: true
    }, {
        todosText: "Ipsum",
        todosChecked: false
    }, {
        todosText: "Dolor",
        todosChecked: false
    }];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + toDOint[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + toDOint[index].todosText + "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < toDOint.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
//Funktionen für ANzeige
function updateCounter() {
    counterDOMElement.innerHTML = toDOint.length + " in total";
}
// function countItem(index: number): void {
//     let itemCount: number = document.querySelectorAll("span class='check " + toDOint[index].todosChecked + "'").length;
//     let checkedCount: number = document.querySelectorAll("span class='check " + toDOint[index].todosChecked + "': checked").length;
//     let uncheckedCount: number = itemCount - checkedCount;
//     itemCountSpan.innerHTML = itemCount;
//     uncheckedCountSpan.innerHTML = uncheckedCount;
//   }
/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo() {
    if (inputDOMElement.value != "") {
        this.toDOint.unshift(inputDOMElement, false); /// //Bearbeiten!!!
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index) {
    toDOint[index].todosChecked = !toDOint[index].todosChecked;
    drawListToDOM();
    // countItem();
}
/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index) {
    toDOint.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map