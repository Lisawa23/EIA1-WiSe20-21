//LoadButton
document.querySelector(".fa-sync-alt").addEventListener("click", function(): void {
    localStorage.clear(); //Lokaler Speicher
    location.reload();
});

// subit data function
loadEvents();
// load every event in the page
function loadEvents(): void {
  document.querySelector("form").addEventListener("submit", submit);
  document.querySelector("#clear").addEventListener("click", clearList);
}

function submit(e: Event): void {
  e.preventDefault();
  let input: HTMLInputElement = document.querySelector("input");
  if (input.value != "")
    addList(input.value);
  input.value = "";
}
  
  // add tasks
function addList(task: string): void {
  let ul: HTMLUListElement = document.querySelector("ul");
  let li: HTMLLIElement = document.createElement("li");
  li.innerHTML = `<i class="far delete fa-trash-alt"></i><input type="checkbox"><label class="nameElement">${task}</label>`;
  ul.appendChild(li);
  li.querySelector(".fa-trash-alt").addEventListener("click", deleteElement);
}

//Clear List
function clearList(e: Event): void {
  e.preventDefault();
  let ul: HTMLUListElement = document.querySelector("ul");
  ul.innerHTML = "";
}

// Delete ListElement
function deleteElement(e: Event): void {
  e.preventDefault();
  let ul: HTMLUListElement = document.querySelector("ul");
  let li: HTMLLIElement = document.querySelector("li"); 
  ul.removeChild(li);
}


//Number in total
// var newNumber: number = 30;  
// var index: number = 0;

// function coNumber(newNumber: number): void {
//     while (index <= newNumber) {
//       document.querySelector(".number").innerHTML = + newNumber + " in total"; 
//       index ++; }
// }

// document.querySelector("#btn").addEventListener("click", function(): void {
//   coNumber(newNumber); //versuch 2 newNumber löschen
// });
  
// let index: number = 0;

// function coNumber(newNumber: number): void {
//   let newNumber: number = 30;
//   for  (let index: number = 0, index: any < newNumber, index++ ) {
//       document.querySelector(".number").innerHTML += + newNumber[index] + " in total"; 
//      }
// }

// document.querySelector("#btn").addEventListener("click", function(): void {
//   coNumber(newNumber); //versuch 2 newNumber löschen
// });



// function updateListCount(): void {
//   var count: HTMLElement = $("li").length;
//   $("h3").text(+ count + " in total");
// }
// ->  updateListcOUNT(); bei add und remove hinschreiben




// var newNumber: number = 30;
// var index: number = 0;

// function coNumber (): void {
//   for (index = 0; index <= newNumber; index++) { 
//     document.querySelector(".number").innerHTML = + newNumber + " in total"; }
// }





// renderTasksCount() {
//   const tasksCount =  _.size(this.props.todos);
//   return tasksCount == 1 ? '1 task:' : (tasksCount + ' tasks:');
// }

// render(){
//   return <p className="bg-info" style={{ padding: '5px 10px' }}>{ this.renderTasksCount() }</p>
// }