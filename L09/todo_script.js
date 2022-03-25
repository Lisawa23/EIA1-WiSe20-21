//LoadButton
document.querySelector("#clear").addEventListener("click", function () {
    localStorage.clear(); //Lokaler Variablen Speicher 
    location.reload();
});
// subit data function
loadEvents();
// load every event in the page
function loadEvents() {
    document.querySelector("form").addEventListener("submit", submit);
}
function submit(e) {
    e.preventDefault();
    var input = document.querySelector("input");
    if (input.value != "")
        addList(input.value);
    input.value = "";
}
// add tasks
var countminus = document.getElementsByClassName("deletetodo");
var countplus = document.getElementsByClassName("newtodo");
function addList(task) {
    var ul = document.querySelector("ul");
    var li = document.createElement("li");
    li.innerHTML = "<span class=\"deletetodo\"><i class=\"far delete fa-trash-alt\"></span></i><input class=\"newtodo\" type=\"checkbox\"><label class=\"nameElement\">".concat(task, "</label>");
    ul.appendChild(li);
    li.querySelector(".deletetodo").addEventListener("click", deleteElement);
    for (var i_1 = 0; i_1 < countplus.length; i_1++) {
        countplus[i_1].addEventListener("submit", submit);
    }
    for (var i_2 = 0; i_2 < countplus.length; i_2++) {
        countminus[i_2].addEventListener("click", deleteElement);
    }
    listnumber();
}
function listnumber() {
    document.querySelector(".number").innerHTML = countplus.length + " in total";
}
// Delete ListElement
function deleteElement() {
    this.parentElement.remove();
    listnumber();
}
//# sourceMappingURL=todo_script.js.map