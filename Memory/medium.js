var medium;
(function (medium) {
    var cardsArrayMedium;
    function fillCardsArray() {
        cardsArrayMedium = [
            {
                name: "Rosa",
                img: "images/rosa1.png",
                id: "1"
            },
            {
                name: "Rosa",
                img: "images/rosa2.png",
                id: "2"
            },
            {
                name: "Blau",
                img: "images/blueb1.png",
                id: "3"
            },
            {
                name: "Blau",
                img: "images/blueb2.png",
                id: "4"
            },
            {
                name: "Blau1",
                img: "images/blue1.png",
                id: "3"
            },
            {
                name: "Blau1",
                img: "images/blue2.png",
                id: "4"
            },
            {
                name: "Purple",
                img: "images/purple1.png",
                id: "5"
            },
            {
                name: "Purple",
                img: "images/purple2.png",
                id: "6"
            },
            {
                name: "Orange",
                img: "images/orange1.png",
                id: "5"
            },
            {
                name: "Orange",
                img: "images/orange2.png",
                id: "6"
            },
            {
                name: "Olive",
                img: "images/olivegreen3.png",
                id: "5"
            },
            {
                name: "Olive",
                img: "images/olivegreen4.png",
                id: "6"
            },
            {
                name: "Yellow",
                img: "images/yellow1.png",
                id: "5"
            },
            {
                name: "Yellow",
                img: "images/yellow2.png",
                id: "6"
            },
            {
                name: "Green",
                img: "images/green1.png",
                id: "7"
            },
            {
                name: "Green",
                img: "images/green2.png",
                id: "8"
            }
        ];
    }
    document.querySelector("#buttonMedium").addEventListener("click", function () {
        restartGame();
        fillCardsArray();
        gameB();
        board();
        computerflipCard();
    });
    var cardPicked = [];
    var cardPickedImg = [];
    var matchesWon = [];
    var cmatchesWon = [];
    var allNumbersOfMatches = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var arrayForNumbers = [];
    var click = 0;
    var cardFlip = true;
    var playerScore = document.querySelector("#score");
    var computerScore = document.querySelector("#Cscore");
    var gameBoard = document.querySelector("#data-id");
    function gameB() {
        gameBoard.classList.add("grid-containerMedium");
        if (gameBoard.classList.contains("grid-containerEasy")) {
            gameBoard.classList.remove("grid-containerEasy");
        }
        if (gameBoard.classList.contains("grid-containerHard")) {
            gameBoard.classList.remove("grid-containerHard");
        }
    }
    function board() {
        cardsArrayMedium.sort(function () {
            return 0.5 - Math.random();
        });
        for (var i_1 = 0; i_1 < cardsArrayMedium.length; i_1++) {
            var card = document.createElement("img");
            card.setAttribute("src", "images/backside.png");
            card.setAttribute("data-id", i_1.toString());
            card.id = ("cpu-id" + i_1);
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        }
    }
    function removeNumber(array, random) {
        return array.filter(function (e) {
            return e != random;
        });
    }
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
                firstCard_1.setAttribute("src", cardsArrayMedium[firstRandom_1].img);
            }, 500);
            setTimeout(function () {
                secondCard_1.setAttribute("src", cardsArrayMedium[secondRandom_1].img);
            }, 1000);
            setTimeout(function () {
                checkForMatchesCpu(cardsArrayMedium[firstRandom_1], cardsArrayMedium[secondRandom_1], firstCard_1, secondCard_1);
            }, 2000);
        }
    }
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
    function flipCard(event) {
        if (cardFlip == false) {
            var cardType = event.target.getAttribute("data-id");
            cardPicked.push(cardsArrayMedium[cardType].name);
            cardPicked.push(cardsArrayMedium[cardType].id);
            cardPickedImg.push(cardType);
            event.target.setAttribute("src", cardsArrayMedium[cardType].img);
            click++;
            if (click > 0 && click % 2 === 0) {
                cardFlip = true;
                setTimeout(checkForMatchesUser, 1000);
            }
        }
    }
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
            var usersFirstNumber = usersFirstId.slice(6);
            allNumbersOfMatches = removeNumber(allNumbersOfMatches, parseFloat(usersFirstNumber));
            var usersSecondId = (matchCard[card2].getAttribute("id"));
            var usersSecondNumber = usersSecondId.slice(6);
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
    function whowon() {
        if (matchesWon.length + cmatchesWon.length == 8 && matchesWon.length > cmatchesWon.length) {
            playerScore.textContent = "You won!";
        }
        else if (matchesWon.length + cmatchesWon.length == 8 && matchesWon.length < cmatchesWon.length) {
            computerScore.textContent = "Computer won!";
        }
        else if (matchesWon.length + cmatchesWon.length == 8 && cmatchesWon.length === matchesWon.length) {
            playerScore.textContent = "It´s a tie!";
            computerScore.textContent = "It´s a tie!";
        }
    }
    var newGAmeButton = document.querySelector("#restart");
    newGAmeButton.addEventListener("click", restartGame);
    function restartGame() {
        allNumbersOfMatches = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        arrayForNumbers = [];
        gameBoard.innerHTML = "";
        gameBoard.classList.remove("grid-containerMedium");
        cardsArrayMedium = [];
        playerScore.textContent = "";
        computerScore.textContent = "";
        matchesWon.length = 0;
        cmatchesWon.length = 0;
        fillCardsArray();
    }
})(medium || (medium = {})); // namespace - Klammer
//# sourceMappingURL=medium.js.map