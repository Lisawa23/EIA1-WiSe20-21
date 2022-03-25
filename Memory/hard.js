var hard;
(function (hard) {
    var cardsArrayHard;
    function fillCardsArray() {
        cardsArrayHard = [
            {
                name: "Rosa1",
                img: "images/rosa3.png",
                id: "1"
            },
            {
                name: "Rosa1",
                img: "images/rosa4.png",
                id: "2"
            },
            {
                name: "Green1",
                img: "images/green3.png",
                id: "1"
            },
            {
                name: "Green1",
                img: "images/green4.png",
                id: "2"
            },
            {
                name: "RosaRed",
                img: "images/rosared3.png",
                id: "1"
            },
            {
                name: "RosaRed",
                img: "images/rosared4.png",
                id: "2"
            },
            {
                name: "Blue",
                img: "images/blueb3.png",
                id: "3"
            },
            {
                name: "Blue",
                img: "images/blueb4.png",
                id: "4"
            },
            {
                name: "Blue1",
                img: "images/blueblue3.png",
                id: "3"
            },
            {
                name: "Blue1",
                img: "images/blueblue4.png",
                id: "4"
            },
            {
                name: "Blue2",
                img: "images/blue3.png",
                id: "3"
            },
            {
                name: "Blue2",
                img: "images/blue4.png",
                id: "4"
            },
            {
                name: "DarkBlue",
                img: "images/darkblue3.png",
                id: "3"
            },
            {
                name: "DarkBlue",
                img: "images/darkblue4.png",
                id: "4"
            },
            {
                name: "DarkGreen",
                img: "images/darkgreen3.png",
                id: "3"
            },
            {
                name: "DarkGreen",
                img: "images/darkgreen4.png",
                id: "4"
            },
            {
                name: "DarkRed",
                img: "images/darkred3.png",
                id: "5"
            },
            {
                name: "DarkRed",
                img: "images/darkred4.png",
                id: "6"
            },
            {
                name: "Pink",
                img: "images/pink3.png",
                id: "5"
            },
            {
                name: "Pink",
                img: "images/pink4.png",
                id: "6"
            },
            {
                name: "Orange",
                img: "images/orange3.png",
                id: "5"
            },
            {
                name: "Orange",
                img: "images/orange4.png",
                id: "6"
            },
            {
                name: "Purple",
                img: "images/purple3.png",
                id: "5"
            },
            {
                name: "Purple",
                img: "images/purple4.png",
                id: "6"
            },
            {
                name: "DarkPurple",
                img: "images/darkpurple3.png",
                id: "5"
            },
            {
                name: "DarkPurple",
                img: "images/darkpurple4.png",
                id: "6"
            },
            {
                name: "Yellow",
                img: "images/yellow3.png",
                id: "5"
            },
            {
                name: "Yellow",
                img: "images/yellow4.png",
                id: "6"
            },
            {
                name: "Green",
                img: "images/lightgreen3.png",
                id: "7"
            },
            {
                name: "Green",
                img: "images/lightgreen4.png",
                id: "8"
            },
            {
                name: "BlueGreen",
                img: "images/bluegreen3.png",
                id: "7"
            },
            {
                name: "BlueGreen",
                img: "images/bluegreen4.png",
                id: "8"
            }
        ];
    }
    document.querySelector("#buttonHard").addEventListener("click", function () {
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
    var allNumbersOfMatches = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    var arrayForNumbers = [];
    var click = 0;
    var cardFlip = true;
    var playerScore = document.querySelector("#score");
    var computerScore = document.querySelector("#Cscore");
    var gameBoard = document.querySelector("#data-id");
    function gameB() {
        gameBoard.classList.add("grid-containerHard");
        if (gameBoard.classList.contains("grid-containerEasy")) {
            gameBoard.classList.remove("grid-containerEasy");
        }
        if (gameBoard.classList.contains("grid-containerMedium")) {
            gameBoard.classList.remove("grid-containerMedium");
        }
    }
    function board() {
        cardsArrayHard.sort(function () {
            return 0.5 - Math.random();
        });
        for (var i = 0; i < cardsArrayHard.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "images/backside.png");
            card.setAttribute("data-id", i.toString());
            card.id = ("cpu-id" + i);
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
                firstCard_1.setAttribute("src", cardsArrayHard[firstRandom_1].img);
            }, 500);
            setTimeout(function () {
                secondCard_1.setAttribute("src", cardsArrayHard[secondRandom_1].img);
            }, 1000);
            setTimeout(function () {
                checkForMatchesCpu(cardsArrayHard[firstRandom_1], cardsArrayHard[secondRandom_1], firstCard_1, secondCard_1);
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
            cardPicked.push(cardsArrayHard[cardType].name);
            cardPicked.push(cardsArrayHard[cardType].id);
            cardPickedImg.push(cardType);
            event.target.setAttribute("src", cardsArrayHard[cardType].img);
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
        if (matchesWon.length + cmatchesWon.length == 16 && matchesWon.length > cmatchesWon.length) {
            playerScore.textContent = "You won!";
        }
        else if (matchesWon.length + cmatchesWon.length == 16 && matchesWon.length < cmatchesWon.length) {
            computerScore.textContent = "Computer won!";
        }
        else if (matchesWon.length + cmatchesWon.length == 16 && cmatchesWon.length === matchesWon.length) {
            playerScore.textContent = "It´s a tie!";
            computerScore.textContent = "It´s a tie!";
        }
    }
    var newGAmeButton = document.querySelector("#restart");
    newGAmeButton.addEventListener("click", restartGame);
    function restartGame() {
        allNumbersOfMatches = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
            17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        arrayForNumbers = [];
        gameBoard.innerHTML = "";
        gameBoard.classList.remove("grid-containerHard");
        cardsArrayHard = [];
        playerScore.textContent = "";
        computerScore.textContent = "";
        matchesWon.length = 0;
        cmatchesWon.length = 0;
        fillCardsArray();
    }
})(hard || (hard = {})); // namespace - Klammer
//# sourceMappingURL=hard.js.map