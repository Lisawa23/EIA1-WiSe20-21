var cardArray;
var startGame = document.querySelector("#startgame");
var difficultLevel = document.querySelector("#difficulty");
startGame.addEventListener("click", function () {
    var collection = difficultLevel.selectedOptions;
});
// arrangeCard function
function arrangeCard() {
    cardArray.sort(function () { return 0.5 - Math.random(); });
}
//settings
document.querySelector(".fa-cog").addEventListener("click", function () {
    localStorage.clear(); //Lokaler Variablen Speicher 
    location.reload();
});
//# sourceMappingURL=memory_script.js.map