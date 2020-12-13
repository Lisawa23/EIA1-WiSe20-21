//Buttons
var loadButton = document.querySelector(".fa-sync-alt");
var addButton = document.querySelector(".add");
var editButton = document.querySelector(".fa-edit");
var deleteButton = document.querySelector(".fa-trash-alt");
var notCheckButton = document.querySelector(".fa-circle");
var checkButton = document.querySelector(".fa-check-circle");
//CheckButton
notCheckButton.addEventListener("click", function () {
    toggleClasses(this, checkButton);
});
checkButton.addEventListener("click", function () {
    toggleClasses(this, notCheckButton);
});
function toggleClasses(firstHTMLElement, secondHTMLElement) {
    firstHTMLElement.classList.add("hidden");
    secondHTMLElement.classList.remove("hidden");
}
// notCheckButton.onclick = () => {
//     toggleClasses(this, checkButton);
// }
//LoadButton
loadButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
//Adda to-do
//durch Entertaste
// switch-case
//Anzahl an Elementen
//# sourceMappingURL=Script09.js.map