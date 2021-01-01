interface ToDo {
    todosText: string;
    todosChecked: boolean;
}

var toDOint: ToDo[] = [{
    todosText: "Lorem",
    todosChecked: true
}, {
    todosText: "Ipsum",
    todosChecked: false
}, {
    todosText: "Dolor",
    todosChecked: false
}];


var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;
var openDOMElement: HTMLElement;

window.addEventListener("load", function(): void {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    doneDOMElement = document.querySelector("#done");
    openDOMElement = document.querySelector("#open");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";
    for (let index: number = 0; index < toDOint.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML =  "<span class='check " + toDOint[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                            + toDOint[index].todosText + "<span class='trash fas fa-trash-alt'></span>";
        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}
//Funktionen für ANzeige
function updateCounter(): void {
    counterDOMElement.innerHTML = toDOint.length + " in total";
    let counterOpen: number = 0;
    let counterDone: number = 0;
    for (let i: number = 0; i < toDOint.length; i++) {
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
function addTodo(): void {
    if (inputDOMElement.value != "") {
        toDOint.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false});
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index: number): void {
    toDOint[index].todosChecked = !toDOint[index].todosChecked;
    drawListToDOM();
    // countItem();
}

/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index: number): void {
    toDOint.splice(index, 1);
    drawListToDOM();
}

