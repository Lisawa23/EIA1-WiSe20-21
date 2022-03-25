namespace hard {

    interface Easycards {
        name: string;
        img: string;
        id: string;
    }

    let cardsArrayHard: Easycards[];

    function fillCardsArray(): void {
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

    document.querySelector("#buttonHard").addEventListener("click", function (): void {

        restartGame();
        
        fillCardsArray();
        gameB();
        board();
        computerflipCard();
    });

    let cardPicked: string[] = [];
    let cardPickedImg: string[] = [];
    let matchesWon: string[] = [];
    let cmatchesWon: string[] = [];
    let allNumbersOfMatches: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let arrayForNumbers: number[] = [];
    let click: number = 0;
    let cardFlip: boolean = true;

    const playerScore: HTMLElement = document.querySelector("#score");
    const computerScore: HTMLElement = document.querySelector("#Cscore");

    const gameBoard: HTMLDivElement = document.querySelector("#data-id");
    
    function gameB(): void {
        gameBoard.classList.add("grid-containerHard"); 
        if (gameBoard.classList.contains("grid-containerEasy")) {
            gameBoard.classList.remove("grid-containerEasy");
        }
        if (gameBoard.classList.contains("grid-containerMedium")) {
            gameBoard.classList.remove("grid-containerMedium");
        }
    }

    function board(): void {

        cardsArrayHard.sort(function (): number {
            return 0.5 - Math.random();
        });

        for (let i: number = 0; i < cardsArrayHard.length; i++) { 
            let card: HTMLElement = document.createElement("img");
            card.setAttribute("src", "images/backside.png");
            card.setAttribute("data-id", i.toString());
            card.id = ("cpu-id" + i);
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        }
    }

    function removeNumber(array: number[], random: number): number[] {

        return array.filter(function (e: number): boolean {
            return e != random;

        });
    }

    function computerflipCard(): void {

        cardFlip = true;

        if (cardFlip == true) {

            arrayForNumbers = allNumbersOfMatches;
            
            let firstindex: number = (Math.floor(Math.random() * (arrayForNumbers.length))); 
            let firstRandom: number = arrayForNumbers[firstindex];
            arrayForNumbers = removeNumber(arrayForNumbers, firstRandom);
            
            let secondindex: number = (Math.floor(Math.random() * (arrayForNumbers.length))); 
            let secondRandom: number = arrayForNumbers[secondindex];
            arrayForNumbers = removeNumber(arrayForNumbers, secondRandom);

            let firstCard: HTMLElement = document.getElementById("cpu-id" + firstRandom);
            let secondCard: HTMLElement = document.getElementById("cpu-id" + secondRandom);

            setTimeout(function (): void {
                firstCard.setAttribute("src", cardsArrayHard[firstRandom].img);
            },         500);

            setTimeout(function (): void {
                secondCard.setAttribute("src", cardsArrayHard[secondRandom].img);
            },         1000);

            setTimeout(() => {
                checkForMatchesCpu(cardsArrayHard[firstRandom], cardsArrayHard[secondRandom], firstCard, secondCard);

            },         2000);
        }
    }

    function checkForMatchesCpu(cardObject1: Easycard, cardObject2: Easycard, firstCard: HTMLElement, secondCard: HTMLElement): void {

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

        } else {
            firstCard.setAttribute("src", "images/backside.png");
            secondCard.setAttribute("src", "images/backside.png");

            cardFlip = false;
        }

        playerScore.textContent = matchesWon.length.toString();
        computerScore.textContent = cmatchesWon.length.toString();

        whowon();
    }

    function flipCard(event: MouseEvent): void {

        if (cardFlip == false) {

            let cardType: string = (event.target as HTMLImageElement).getAttribute("data-id");

            cardPicked.push(cardsArrayHard[cardType].name);
            cardPicked.push(cardsArrayHard[cardType].id);

            cardPickedImg.push(cardType);
            (event.target as HTMLImageElement).setAttribute("src", cardsArrayHard[cardType].img);

            click++;
            if (click > 0 && click % 2 === 0) {
                cardFlip = true;
                setTimeout(checkForMatchesUser, 1000);
            }
        }
    }

    function checkForMatchesUser(): void {

        let matchCard: NodeList = document.querySelectorAll("img");

        const card1: string = cardPickedImg[0];
        const card2: string = cardPickedImg[1];

        if (cardPicked[0] === cardPicked[2] && cardPicked[1] != cardPicked[3]) {

            matchCard[card1].setAttribute("src", "");
            matchCard[card2].setAttribute("src", "");
            matchCard[card1].classList.add("is-hidden");
            matchCard[card2].classList.add("is-hidden");

            let usersFirstId: string = (matchCard[card1].getAttribute("id"));
            let usersFirstNumber: string = usersFirstId.slice(6); 
            allNumbersOfMatches = removeNumber(allNumbersOfMatches, parseFloat(usersFirstNumber));

            let usersSecondId: string = (matchCard[card2].getAttribute("id"));
            let usersSecondNumber: string = usersSecondId.slice(6); 
            allNumbersOfMatches = removeNumber(allNumbersOfMatches, parseFloat(usersSecondNumber));

            matchesWon.push(cardPicked[1]);

            cardFlip = false;

        } else {

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

    function whowon(): void {
        if (matchesWon.length + cmatchesWon.length == 16 && matchesWon.length > cmatchesWon.length) {
            playerScore.textContent = "You won!";
        }
        else if (matchesWon.length + cmatchesWon.length == 16 && matchesWon.length < cmatchesWon.length) { 
            computerScore.textContent = "Computer won!";
        } else if (matchesWon.length + cmatchesWon.length == 16 && cmatchesWon.length === matchesWon.length) {
            playerScore.textContent = "It´s a tie!";
            computerScore.textContent = "It´s a tie!";
        }
    }

    const newGAmeButton: HTMLElement = document.querySelector("#restart");
    newGAmeButton.addEventListener("click", restartGame);

    function restartGame(): void {

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

} // namespace - Klammer