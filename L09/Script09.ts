//Buttons
const loadButton: HTMLElement = document.querySelector(".fa-sync-alt");
const addButton: HTMLElement = document.querySelector(".add"); 
const editButton: HTMLElement = document.querySelector(".fa-edit"); 
const deleteButton: HTMLElement = document.querySelector(".fa-trash-alt"); 
const notCheckButton: HTMLElement = document.querySelector(".fa-circle");
const checkButton: HTMLElement = document.querySelector(".fa-check-circle");

//CheckButton
notCheckButton.addEventListener("click", function(): void {
    toggleClasses(this, checkButton);
});

checkButton.addEventListener("click", function(): void {
    toggleClasses(this, notCheckButton);
});

function toggleClasses(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
    firstHTMLElement.classList.add("hidden");
    secondHTMLElement.classList.remove("hidden");
}


// notCheckButton.onclick = () => {
//     toggleClasses(this, checkButton);
// }

//LoadButton
loadButton.addEventListener("click", function(): void {
    localStorage.clear();
    location.reload();
});

//Adda to-do

//durch Entertaste
// switch-case

//Anzahl an Elementen
