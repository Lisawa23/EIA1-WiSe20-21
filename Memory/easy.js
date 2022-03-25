// Mein erstes Kartendeck ist das leichte Deck -> 4 Paare, 8 Karten.
// Das habe ich dann jeweils angepasst auf die schwereren Karten-Decks.
// Die anderen Kartendecks habe ich in anderen ts-Dateien angelegt, 
// da sich aber alle Dateien ähneln, kommentiere ich nur diese Datei.
//
// Jedes Interface besitzt drei keys, für jedes Deck immer die Gleichen.
// "name" verwende ich für den Vergleich -> Ein Match hat immer den gleichen Namen.
// "img" ist für die Bereitstellung der Bilder, da ich alle Karten mit png-Dateien darstelle.
// "id" ist immer anders, damit ich später beim Vergleich sagen kann, dass kein Match entsteht, 
// wenn man doppelt auf eine Karte klickt.
var cardsArrayEasy;
// Ich habe mein Array in einer Funktion dargestellt, damit ich es erst fülle, 
// nachdem ich das Board erstellt habe, beziehungsweise auf den jeweiligen 
// Schwierigkeitsbutton klicke.
function fillCardsArray() {
    cardsArrayEasy = [
        {
            name: "Rosa",
            img: "images/rosa.png",
            id: "0"
        },
        {
            name: "Rosa",
            img: "images/rosa.png",
            id: "1"
        },
        {
            name: "Blau",
            img: "images/blue.png",
            id: "2"
        },
        {
            name: "Blau",
            img: "images/blue.png",
            id: "3"
        },
        {
            name: "Rot",
            img: "images/red.png",
            id: "4"
        },
        {
            name: "Rot",
            img: "images/red.png",
            id: "5"
        },
        {
            name: "Lila",
            img: "images/purple.png",
            id: "6"
        },
        {
            name: "Lila",
            img: "images/purple.png",
            id: "7"
        }
    ];
}
// Erst bei Klick auf den Easybutton wird alles durch die Funktion "restartGame" zurückgesetzt, 
// mein Karten-Array gefüllt, die jeweilige Gitterklasse hinzugefügt (GameB), die Board-Funktion 
// ausgeführt und dann startet der Computer mit dem Spiel!
document.querySelector("#buttonEasy").addEventListener("click", function () {
    restartGame();
    fillCardsArray();
    gameB();
    board();
    computerflipCard();
});
// Arrays:
// 1 & 2 für den Vergleich der Karten.
// 3 & 4 für die gewonnen Matches und die zwei Counter.
// Durch allNumbersofMatches bekomme ich eine Zahl, die dann dem Index 
// von arrayForMatches entspricht. Die beiden Array setze ich immer wieder erneut gleich.
// click ist für die Klickfunktion des Nutzers.
// und computerFlip sorgt dafür, dass der Nutzer nicht spielen kann, wenn der Computer dran ist.
var cardPicked = [];
var cardPickedImg = [];
var matchesWon = [];
var cmatchesWon = [];
var allNumbersOfMatches = [0, 1, 2, 3, 4, 5, 6, 7];
var arrayForNumbers = [];
var click = 0;
var cardFlip = true;
// Scoreboard vom Nutzer und Computer werden hinzugefügt.
var playerScore = document.querySelector("#score");
var computerScore = document.querySelector("#Cscore");
// Dem Board wird das Gitter/Div zugewiesen.
// Die grid-Klasse ist bei jedem Kartendeck anders, damit es auf die Anzahl der Karten abgestimmt ist.
// GameB ist dafür da, dass immer nur eine Klasse angesprochen wird, und die andere jeweils entfernt wird
// (Wenn man beispielsweise davor mit einem anderen Deck gespielt hat).
var gameBoard = document.querySelector("#data-id");
function gameB() {
    gameBoard.classList.add("grid-containerEasy");
    if (gameBoard.classList.contains("grid-containerMedium")) {
        gameBoard.classList.remove("grid-containerMedium");
    }
    if (gameBoard.classList.contains("grid-containerHard")) {
        gameBoard.classList.remove("grid-containerHard");
    }
}
// Board-Funktion, dadurch wird das Deck erstellt!
// Als erstes werden mit Math.Random die Karten gemischt.
// Dann werden die Karten mit einer For-Schleife eingerichtet.
// Mit dem Attribute "src" wird die Rückseite generiert.
// Dann wird für jede Karte eine andere data-id und cpu-id vergeben,
// die ich später brauche, um die Karten auseinader zu halten.
// 2. Klickevent -> sobald auf eine Karte geklickt wird, wird diese umgedreht.
// Am Ende werden die Karten in das Gitter verteilt/angefügt.
function board() {
    cardsArrayEasy.sort(function () {
        return 0.5 - Math.random();
    });
    for (var i = 0; i < cardsArrayEasy.length; i++) {
        var card = document.createElement("img");
        card.setAttribute("src", "images/backside.png");
        card.setAttribute("data-id", i.toString());
        card.id = ("cpu-id" + i);
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    }
}
// Funktion um beim Computer die Karte aus dem Array (arrayForNumbers) zu löschen!
// Das ist notwendig, damit der Computer nicht die gleiche Karte oder eine schon 
// gefundene Karte zufällig erneut auswählen kann.
function removeNumber(array, random) {
    return array.filter(function (e) {
        return e != random;
    });
}
// Funktion, dass der Computer zwei zufällige Karten auswählt. 
// cardFlip wird auf true gesetzt (damit der Nutzer, bei dem es false ist, keine
// Karte umdrehen kann).
// Ich setze beide Arrays gleich (logischerweise jedes Mal aufs Neue) 
// damit das leere Array entsprechend gefüllt wird.
// 
// Dann werden die zwei zufälligen Karten ausgewählt: 
// Die erste Variable bekommt eine zufällige Zahl zwischen 0 und der Array-Länge von arrayforNumbers. 
// firstRandom/secondRandom ist dann die Zahl im Array (indem sich dann nur noch die Zahlen/Karten befinden,
// die noch nicht gefunden wurden), die an der Stelle des firstIndex/secondIndex ist.
// Diese Zahl wird dann durch die Funktion "removeNumber" aus dem Array gelöscht, 
// damit es auch beim zweiten Mal nicht zufällig gezogen werden kann.
// Dann wird die jeweilige Zahl ebenfalls gelöscht.
//
// Dann habe ich zwei Variablen erstellt, die auf die "cpu-ids + die zufälligen Zahlen" zugreifen.
// Das sind dann die Karten, die sich durch setTimeout (mit 500 Millisekunden versetzt) umdrehen.
// Danach werden sie verglichen und je nachdem, ob es ein Match ist oder nicht, verschwinden die Karten
// nach 2 Sekunden, oder drehen sich wieder um. 
function computerflipCard() {
    cardFlip = true;
    if (cardFlip == true) {
        arrayForNumbers = allNumbersOfMatches;
        var firstindex = (Math.floor(Math.random() * (arrayForNumbers.length)));
        var firstRandom_1 = arrayForNumbers[firstindex];
        arrayForNumbers = removeNumber(arrayForNumbers, firstRandom_1);
        var secondindex = (Math.floor(Math.random() * (arrayForNumbers.length)));
        var secondRandom_1 = arrayForNumbers[secondindex];
        arrayForNumbers = removeNumber(arrayForNumbers, secondRandom_1);
        var firstCard_1 = document.getElementById("cpu-id" + firstRandom_1);
        var secondCard_1 = document.getElementById("cpu-id" + secondRandom_1);
        setTimeout(function () {
            firstCard_1.setAttribute("src", cardsArrayEasy[firstRandom_1].img);
        }, 500);
        setTimeout(function () {
            secondCard_1.setAttribute("src", cardsArrayEasy[secondRandom_1].img);
        }, 1000);
        setTimeout(function () {
            checkForMatchesCpu(cardsArrayEasy[firstRandom_1], cardsArrayEasy[secondRandom_1], firstCard_1, secondCard_1);
        }, 2000);
    }
}
// Mit dieser Funktion wird gecheckt, ob der Computer ein Match gefunden hat, oder nicht.
// Hier übergebe ich Argumente. Zwei Mal das gesamte Objekt und zwei Mal die cpu-ids der Karten.
//
// if-else bzw. wahr-falsch:
// Wenn der 1. und 3. Wert, also die beiden Namen der Karten gleich sind und
// der 2. und 4. Wert, also die beiden Ids unterschiedlich sind (die Bedingung
// also wahr ist), dann verschwinden die Karten und der Counter zählt hoch.
// Dann entspricht das Array "allNumbersOfMatches" dem Array "arrayForNumbers",
// damit beim nächsten Mal im Array nur noch die Zahlen sind, die noch nicht weg sind.
//
// Wenn ein Match gefunden wurde, wird eine Karte in das leere Array gepusht,
// damit der Counter hochzählen kann und mit "whowon" gecheckt werden kann, wann und wer gewonnen hat.
// Der Computer spielt außerdem nur dann weiter, wenn noch Karten im Array sind, 
// weil er sonst nicht weiß, ob das Spiel zu Ende ist.
//
// Andernfalls (else), also wenn die Karten nicht gleich sind, 
// drehen sie sich wieder um und die Rückseite wird sichtbar.
// Jetzt wird cardFlip == false, damit der Nutzer wieder klicken kann.
function checkForMatchesCpu(cardObject1, cardObject2, firstCard, secondCard) {
    if (cardObject1.name == cardObject2.name) {
        firstCard.setAttribute("src", "");
        secondCard.setAttribute("src", "");
        firstCard.classList.add("is-hidden");
        secondCard.classList.add("is-hidden");
        allNumbersOfMatches = arrayForNumbers;
        cmatchesWon.push(cardObject1.id);
        if (arrayForNumbers.length > 0) {
            computerflipCard();
        }
    }
    else {
        firstCard.setAttribute("src", "images/backside.png");
        secondCard.setAttribute("src", "images/backside.png");
        cardFlip = false;
    }
    playerScore.textContent = matchesWon.length.toString();
    computerScore.textContent = cmatchesWon.length.toString();
    whowon();
}
// Funktion, damit der Nutzer die Karten umdrehen kann.
// Das funktioniert nur, wenn der der Computer nicht mehr dran ist -> also cardFlip == false entspricht.
// Nachdem die Karten angeklickt wurden bzw. aufgedeckt sind, werden sie in das Array 
// "cardPicked" gepusht, damit sie bei der Check-Funktion vergleicht werden können.
// Mit dem Attribut "src" wird auf das Bild zugegriffen und beide Karten können aufgedeckt werden.
//
// Nachdem genau 2 Karten gezogen wurden, wird cardFlip = true sein, damit der 
// Nutzer nicht noch eine dritte Karte umdecken kann. Danach vergleicht die Funktion "CheckForMatches" 
// die Karten, die im Array sind. Dabei bleiben die Karten eine Sekunde aufgedeckt.
function flipCard(event) {
    if (cardFlip == false) {
        var cardType = event.target.getAttribute("data-id");
        cardPicked.push(cardsArrayEasy[cardType].name);
        cardPicked.push(cardsArrayEasy[cardType].id);
        cardPickedImg.push(cardType);
        event.target.setAttribute("src", cardsArrayEasy[cardType].img);
        click++;
        if (click > 0 && click % 2 === 0) {
            cardFlip = true;
            setTimeout(checkForMatchesUser, 1000);
        }
    }
}
// Funktion für den Nutzer: Sie checkt, ob ein Match gefunden wurde, oder nicht.
//
// if-else bzw. wahr-falsch:
// Wenn der 1. und 3. Wert, also die beiden Namen der Karten gleich sind und
// der 2. und 4. Wert, also die beiden Ids unterschiedlich sind, die Bedingung
// also wahr ist, dann verschwinden die Karten.
// Mit slice und -1 entferne ich die letzte Stelle meiner cpu-id -> also meine Zahl.
// (Bei den schwereren Decks entferne ich alles nach der 6. Stelle.)
// Das entspricht der Nummer, die ich dann aus meinem Array löschen will, 
// damit der Computer sie nicht mehr wählen kann.
// Wenn ein Match gefunden wurde, werden die gepickten Karten 
// in das leere Array (matchesWon) gepusht (für den Counter) und der Benutzer ist nochmal dran.
// Dafür muss cardFlip = false sein, damit der Nutzer wieder klicken kann.
//
// Andernfalls (else), also wenn die Karten nicht gleich sind, 
// drehen sie sich wieder um und die Rückseite wird sichtbar.
// Dann ist der Computer wieder dran und die Arrays werden erneut gleichgesetzt.
//
// Außerdem werden nach jedem Zug die gefüllten Arrays wieder gelehrt, damit sie für den 
// nächsten Zug neu gefüllt werden können. Danach wird der Score wieder aktualisiert.
function checkForMatchesUser() {
    var matchCard = document.querySelectorAll("img");
    var card1 = cardPickedImg[0];
    var card2 = cardPickedImg[1];
    if (cardPicked[0] === cardPicked[2] && cardPicked[1] != cardPicked[3]) {
        matchCard[card1].setAttribute("src", "");
        matchCard[card2].setAttribute("src", "");
        matchCard[card1].classList.add("is-hidden");
        matchCard[card2].classList.add("is-hidden");
        var usersFirstId = (matchCard[card1].getAttribute("id"));
        var usersFirstNumber = usersFirstId.slice(-1);
        allNumbersOfMatches = removeNumber(allNumbersOfMatches, parseFloat(usersFirstNumber));
        var usersSecondId = (matchCard[card2].getAttribute("id"));
        var usersSecondNumber = usersSecondId.slice(-1);
        allNumbersOfMatches = removeNumber(allNumbersOfMatches, parseFloat(usersSecondNumber));
        matchesWon.push(cardPicked[1]);
        cardFlip = false;
    }
    else {
        matchCard[card1].setAttribute("src", "images/backside.png");
        matchCard[card2].setAttribute("src", "images/backside.png");
        computerflipCard();
    }
    cardPicked = [];
    cardPickedImg = [];
    playerScore.textContent = matchesWon.length.toString();
    computerScore.textContent = cmatchesWon.length.toString();
    whowon();
}
// Sobald der User mehr Matches gefunden hat, also die Längen der beiden Arrays 4 sind 
// und die Länge des NutzerArrays größer als die des Cpu-Arrays ist,
// so wird dem Nutzer die Nachricht "You won" angezeigt. 
// Andernfalls, also umgekehrt, wird beim Computer "Computer won" angezeigt.
// Bei Gleichstand bekommen sie beide die Nachricht: "It´s a tie!".
function whowon() {
    if (matchesWon.length + cmatchesWon.length == 4 && matchesWon.length > cmatchesWon.length) {
        playerScore.textContent = "You won!";
    }
    else if (matchesWon.length + cmatchesWon.length == 4 && matchesWon.length < cmatchesWon.length) {
        computerScore.textContent = "Computer won!";
    }
    else if (matchesWon.length + cmatchesWon.length == 4 && cmatchesWon.length === matchesWon.length) {
        playerScore.textContent = "It´s a tie!";
        computerScore.textContent = "It´s a tie!";
    }
}
// Klickevent für den "New Game"-Button -> um bei Klick, das Spiel neu zu starten.
//
// Funktion für den Restart:
// Die Arrays werden wieder zurückgesetzt.
// Das "gameBoard" wird wieder gelehrt.
// Die Gitterklasse wird ebenfalls wieder entfernt. 
// Das Hauptarray wird wieder gelehrt.
// Auch die beiden Scores werden wieder zurückgesetzt.
// Die Arrays für den Counter werden ebenfalls gelehrt.
// Als letztes wird das Array wieder gefüllt.
var newGAmeButton = document.querySelector("#restart");
newGAmeButton.addEventListener("click", restartGame);
function restartGame() {
    allNumbersOfMatches = [0, 1, 2, 3, 4, 5, 6, 7];
    arrayForNumbers = [];
    gameBoard.innerHTML = "";
    gameBoard.classList.remove("grid-containerEasy");
    cardsArrayEasy = [];
    playerScore.textContent = "";
    computerScore.textContent = "";
    matchesWon.length = 0;
    cmatchesWon.length = 0;
    fillCardsArray();
}
//# sourceMappingURL=easy.js.map