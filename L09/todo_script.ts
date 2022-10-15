//LoadButton
document.querySelector("#clear").addEventListener("click", function(): void {
    localStorage.clear(); //Lokaler Variablen Speicher 
    location.reload();
});

// subit data function
loadEvents();
// load every event in the page
function loadEvents(): void {
  document.querySelector("form").addEventListener("submit", submit);
}

function submit(e: Event): void {
  e.preventDefault();
  let input: HTMLInputElement = document.querySelector("input");
  if (input.value != "")
    addList(input.value);
  input.value = "";
}

// add tasks
const countminus: HTMLCollection = document.getElementsByClassName("deletetodo");
const countplus: HTMLCollection = document.getElementsByClassName("newtodo");

function addList(task: string): void {
  let ul: HTMLUListElement = document.querySelector("ul");
  let li: HTMLLIElement = document.createElement("li");
  li.innerHTML = `<span class="deletetodo"><i class="far delete fa-trash-alt"></span></i><input class="newtodo" type="checkbox"><label class="nameElement">${task}</label>`; //auch ->` + task + ` <- möglich
  ul.appendChild(li);
  li.querySelector(".deletetodo").addEventListener("click", deleteElement);
  
  for (let i: number = 0; i < countplus.length; i ++) { 
    countplus[i].addEventListener("submit", submit);
  }
  for (let i: number = 0; i < countplus.length; i ++) { 
    countminus[i].addEventListener("click", deleteElement);
  }
  listnumber();
}

function listnumber(): void {
  document.querySelector(".number").innerHTML = countplus.length + " in total"; 
}

// Delete ListElement
function deleteElement(): void {
  this.parentElement.remove(); 
  listnumber();
}

//https://codepen.io/crimue/pen/wvrzJQP