var cardArray: [{

}];

let startGame: HTMLElement = document.querySelector("#startgame");
let difficultLevel: HTMLSelectElement = document.querySelector("#difficulty");

startGame.addEventListener("click", function(): void {
    let collection: HTMLCollectionOf<HTMLOptionElement> = difficultLevel.selectedOptions;
});


// arrangeCard function
function arrangeCard(): void { 
    cardArray.sort(() => 0.5 - Math.random());
    }


//settings
document.querySelector(".fa-cog").addEventListener("click", function(): void {
    localStorage.clear(); //Lokaler Variablen Speicher 
    location.reload();
});
