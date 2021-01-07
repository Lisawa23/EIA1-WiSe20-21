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
var outputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var doneDOMElement;
var openDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    outputDOMElement = document.querySelector("#output");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    doneDOMElement = document.querySelector("#done");
    openDOMElement = document.querySelector("#open");
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
    //To Dos Done oder Open
    var counterOpen = 0;
    var counterDone = 0;
    for (var i = 0; i < toDOint.length; i++) {
        if (toDOint[i].todosChecked == false) {
            counterOpen++;
        }
        else {
            counterDone++;
        }
        doneDOMElement.innerHTML = counterDone + " done";
        openDOMElement.innerHTML = counterOpen + " open";
    }
}
/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo() {
    if (inputDOMElement.value != "") {
        toDOint.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
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
}
/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index) {
    toDOint.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            toDOint.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            addTodo();
            drawListToDOM();
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    function startContinuousArtyom() {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true
        });
    }
    function stopContinuousArtyom() {
        artyom.fatality();
    }
    document.querySelector("#start").addEventListener("click", startContinuousArtyom);
    document.querySelector("#stop").addEventListener("click", stopContinuousArtyom);
});
//# sourceMappingURL=script.js.map