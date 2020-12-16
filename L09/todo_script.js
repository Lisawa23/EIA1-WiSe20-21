//LoadButton
document.querySelector(".fa-sync-alt").addEventListener("click", function () {
    localStorage.clear(); //Lokaler Speicher
    location.reload();
});
// subit data function
loadEvents();
// load every event in the page
function loadEvents() {
    document.querySelector("form").addEventListener("submit", submit);
    document.querySelector("#clear").addEventListener("click", clearList);
}
function submit(e) {
    e.preventDefault();
    var input = document.querySelector("input");
    if (input.value != "")
        addList(input.value);
    input.value = "";
}
// add tasks
function addList(task) {
    var ul = document.querySelector("ul");
    var li = document.createElement("li");
    li.innerHTML = "<i class=\"far delete fa-trash-alt\"></i><input type=\"checkbox\"><label class=\"nameElement\">" + task + "</label>";
    ul.appendChild(li);
    li.querySelector(".fa-trash-alt").addEventListener("click", deleteElement);
    // document.querySelector("form").addEventListener("submit", coNumber);
}
//Clear List
function clearList(e) {
    e.preventDefault();
    var ul = document.querySelector("ul");
    ul.innerHTML = "";
}
// Delete ListElement
function deleteElement(e) {
    e.preventDefault();
    var ul = document.querySelector("ul");
    var li = document.querySelector("li");
    ul.removeChild(li);
    // document.querySelector("form").addEventListener("submit", delNumber);
}
//Number in total
// var newNumber: number = 30;  
// var index: number = 0;
// function coNumber(e: Event): void {
//   e.preventDefault();
//   while (index < newNumber) {
//       document.querySelector(".number").innerHTML = + index + " in total"; 
//       index ++; }
// }
// function delNumber(e: Event): void {
//   e.preventDefault();
//   while (index < newNumber) {
//     document.querySelector(".number").innerHTML = + index + " in total"; 
//     index --; }
// }
// var newNumber: number = 30;  
// var index: number = 0;
// function coNumber(): void {
// for (var i: number = 0; i <= newNumber; i ++) { 
//   if (i == 0) { 
//     document.querySelector(".number").innerHTML = + i + " in total";
//   }
//   i ++;
// } 
// else {
//   return;
// }
// }
// function updateListCount(): void {
//   var count: HTMLElement = $("li").length;
//   $("h3").text(+ count + " in total");
// }
// ->  updateListcOUNT(); bei add und remove hinschreiben
// var newNumber: number = 30;
// var index: number = 0;
// var newNumber: number = 30;
// function coNumber (): void {
//   for (let index: number = 0; index < newNumber; index++) { 
//     document.querySelector(".number").innerHTML = + index + " in total"; }
// }
// function delNumber(): void {
//   for (index = 0; index < newNumber; index++); {
//     document.querySelector(".number").innerHTML = + newNumber + " in total"; 
//     index --; }
// }
//# sourceMappingURL=todo_script.js.map