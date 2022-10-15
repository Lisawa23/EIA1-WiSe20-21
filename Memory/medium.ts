namespace medium {

    interface Easycards {
        name: string;
        img: string;
        id: string;
    }

    let cardsArrayMedium: Easycards[];

    function fillCardsArray(): void {
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

    document.querySelector("#buttonMedium").addEventListener("click", function (): void {

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
    let allNumbersOfMatches: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let arrayForNumbers: number[] = [];
    let click: number = 0;
    let cardFlip: boolean = true;

    const playerScore: HTMLElement = document.querySelector("#score");
    const computerScore: HTMLElement = document.querySelector("#Cscore");

    const gameBoard: HTMLDivElement = document.querySelector("#data-id");
    
    function gameB(): void {
        gameBoard.classList.add("grid-containerMedium"); 
        if (gameBoard.classList.contains("grid-containerEasy")) {
            gameBoard.classList.remove("grid-containerEasy");
        }
        if (gameBoard.classList.contains("grid-containerHard")) {
            gameBoard.classList.remove("grid-containerHard");
        }
    }
    
    function board(): void {

        cardsArrayMedium.sort(function (): number {
            return 0.5 - Math.random();
        });

        for (let i: number = 0; i < cardsArrayMedium.length; i++) { 
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
                firstCard.setAttribute("src", cardsArrayMedium[firstRandom].img);
            },         500);

            setTimeout(function (): void {
                secondCard.setAttribute("src", cardsArrayMedium[secondRandom].img);
            },         1000);

            setTimeout(() => {
                checkForMatchesCpu(cardsArrayMedium[firstRandom], cardsArrayMedium[secondRandom], firstCard, secondCard);

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

            cardPicked.push(cardsArrayMedium[cardType].name);
            cardPicked.push(cardsArrayMedium[cardType].id);

            cardPickedImg.push(cardType);
            (event.target as HTMLImageElement).setAttribute("src", cardsArrayMedium[cardType].img);

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
        if (matchesWon.length + cmatchesWon.length == 8 && matchesWon.length > cmatchesWon.length) {
            playerScore.textContent = "You won!";
        }
        else if (matchesWon.length + cmatchesWon.length == 8 && matchesWon.length < cmatchesWon.length) { 
            computerScore.textContent = "Computer won!";
        } else if (matchesWon.length + cmatchesWon.length == 8 && cmatchesWon.length === matchesWon.length) {
            playerScore.textContent = "It´s a tie!";
            computerScore.textContent = "It´s a tie!";
        }
    }

    const newGAmeButton: HTMLElement = document.querySelector("#restart");
    newGAmeButton.addEventListener("click", restartGame);

    function restartGame(): void {

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

} // namespace - Klammer