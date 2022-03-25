/**
 * Die Spiellogik wurde mit 5 Entitäten erstellt:
 *
 * 1-Karten-Schnittstelle:
 * Ein Wrapper für ein Kartenobjekt.
 * Ex. {Ziffer: 5, Farbe: 'blau'}
 *
 * 2- Spieler Klasse:
 * Eine abstrakte Klasse, die das Gemeinsame enthält
 * Attribute und Funktionalitäten zwischen Mensch,
 * und Computerspieler.
 *
 * 3- HumanPlayer-Klasse:
 * Die Funktionalität ist in zwei Teile unterteilt:
 * Automatisierte Funktionen, die Karten hervorheben,
 * und aktualisieren Sie die Modellkarten usw.
 * Ereignisgesteuerte Funktionen, die nur aufgerufen werden, wenn
 * Der Benutzer selbst löst ein Ereignis aus (Mausklick).
 *
 * 4- ComputerPlayer-Klasse:
 * Vollständig automatisierte Funktionalitäten, die ihre Aufgabe erfüllen
 * ohne auf Benutzerinteraktion zu warten.
 *
 * 5- Spielklasse:
 * Die Hauptklasse, die alle zuvor genannten Entites steuert.
 * Es ist für die gesamte Interaktion zwischen den Spielern, dem Deck und dem Boden verantwortlich.
 * und verantwortlich für das Abhören der Benutzerereignisse, deren Bearbeitung und für
 * Rendern der Karten nach jedem Update.
 */


interface Card {
    digit: number; // {1, 2, 3, 4, 5, 6, 7, 8}
    color: string; // {'red', 'lime', 'blue', 'yellow'}
}
abstract class Player {
    private cards: Array<Card>;
    private game: Game;

    constructor(game: Game) {
        this.game = game;
        this.cards = [];
    }

    public abstract playTurn(): void;

    public playCard(index: number): void {
        let toPlayCard: Card = this.cards[index];
        this.cards.splice(index, 1);
        this.game.insertToGround(toPlayCard);
        
        if (this.didWin()) this.game.announceWinner();
    }

    public drawCard (): void {
        let newCard: Card = this.game.drawCardFromDeck();
        this.cards.push(newCard);
    }

    public didWin(): boolean {
        return this.cards.length === 0;
    }

    public clearCards(): void {
        this.cards = [];
    }

    public getCardsInHand(): Array<Card> {
        return this.cards;
    }

    // Scannt alle Karten in der Hand und gibt eine Liste der gültigen Karten zurück,
    //die gespielt werden sollen

    protected scanCards(currentCard: Card): Array<number> {
        let validCards: Array<number> = [];
        for (let i = 0; i < this.cards.length; i++) {
        if (this.isValid(currentCard, this.cards[i])) {
         validCards.push(i); } }
        return validCards;
    }

    protected getGameCurrCard(): Card {
        return this.game.getCurrCard();
    }

    protected setGameState(state: string): void {
        this.game.setGameState(state);
    }

    // Prüft, ob eine Karte gültig zu spielen ist
    private isValid(firstCard: Card, secondCard: Card): boolean {
        return (firstCard.digit === secondCard.digit) ||
        (firstCard.color === secondCard.color) ;
    }
}


class HumanPlayer extends Player {
    public playTurn(): void {
        let currCard: Card = this.getGameCurrCard();
        let possibleCards: Array<number> = this.scanCards(currCard);
        if (possibleCards.length === 0) this.highlightDeck();
        else this.highlightPossibleCards(possibleCards);
    }

    public playCard(index: number): void {
        this.dimPossibleCards();
        super.playCard(index);
    }

    public drawCard(): void {
        this.dimDeck();
        super.drawCard();
    }

    private highlightPossibleCards(possibleCards: Array<number>): void {
        this.setGameState("play");
        let cardList: HTMLCollection;
        cardList = document.querySelector(".humanArea .cards").children;
        possibleCards.forEach(card => {
            cardList[card].classList.add("raise");
        });
        
    }

    private highlightDeck(): void {
        this.setGameState("draw");
        let deck: HTMLElement = document.querySelector(".deck .cardBack");
        deck.classList.add("glow");
    }

    private dimPossibleCards(): void {
        let cardList: HTMLCollection;
        cardList = document.querySelector(".humanArea .cards").children;
        for (let i = 0; i < cardList.length; i++) {
            cardList[i].classList.remove("raise"); }
    }
       private dimDeck(): void {
        let deck: HTMLElement = document.querySelector(".deck .cardBack");
        deck.classList.remove("glow"); }
}
class ComputerPlayer extends Player {
    playTurn(): void {
        let currCard: Card = this.getGameCurrCard();
        let possibleCards: Array<number> = this.scanCards(currCard);
        if (possibleCards.length === 0) this.drawCard();
        else this.playCard(possibleCards[0]); }
}
class Game {
    private state: string;
    private deck: Array<Card>;
    private ground: Array<Card>;
    private humanPlayer: HumanPlayer;
    private computerPlayer: ComputerPlayer;

    constructor() {
        this.humanPlayer = new HumanPlayer(this);
        this.computerPlayer = new ComputerPlayer(this);
        this.deck = [];
        this.ground = [];
        this.state = "start";

        this.setupCurtainListener();
        this.setupDeckListener();
    }

    public startGame(): void {
        this.humanPlayer.clearCards();
        this.computerPlayer.clearCards();
        this.clearGround();
        this.clearDeck();

        this.fillDeck();
        this.shuffleDeck();
        this.insertToGround(this.deck.pop());

        this.drawInitialCards();
        this.renderCards();
        
        this.humanPlayer.playTurn();
    }

    public getGameState(): string {
        return this.state;
    }

    public setGameState(state: string): void {
        this.state = state;
    }

    public insertToGround(card: Card): void {
        this.ground.push(card);
    }

    public getCurrCard(): Card {
        return this.ground[this.ground.length - 1];
    }

    public drawCardFromDeck(): Card {
        if (this.deck.length === 0) {
            this.moveGroundToDeck();
        }
        let newCard = this.deck.pop();
        return newCard;
    }

    public announceWinner(): void {
        setTimeout(() => {
            let curtain: HTMLElement = document.querySelector("#curtain");
            let startBtn: HTMLElement = document.querySelector("#curtain button");
            let heading: HTMLElement = document.querySelector("#curtain h1");

            if (this.humanPlayer.didWin())
                heading.innerHTML = "You Won! Hooraaay";
            else heading.innerHTML = "Better Luck next time";
            
            startBtn.innerHTML = "Restart?";
            curtain.style.display = 'block'; } , 1000);

        this.setGameState("end");
    }

    private setupCurtainListener(): void {
        document.querySelector("#curtain button")
        .addEventListener('click', function() {
            document.getElementById("curtain").style.display = "none";
            game.startGame(); }); 
        }

    private setupDeckListener(): void {
    document.querySelector(".deck .cardBack")
    .addEventListener('click', function() {
     if (game.getGameState() === "draw") {
     game.humanPlayer.drawCard();
    game.completeTurn();} }); 
}

    private setupHumanCardListener(): void {
     document.querySelectorAll(".humanArea .cardFront")
    .forEach(function(card) {
    card.addEventListener('click', function(event) {
    if (game.getGameState() === "play") {
    let selectedCard: HTMLElement = (event.target as HTMLElement);
    if (selectedCard.parentElement.classList.contains("raise")) {
    let index: number;
    index = parseInt(selectedCard.getAttribute("index"));
    game.humanPlayer.playCard(index);
    game.completeTurn(); } } }); 
    }); }

    private completeTurn(): void {
        this.renderCards();
        this.setGameState("computer");
        setTimeout(() => {
            game.computerPlayer.playTurn();
            game.renderCards();
            game.humanPlayer.playTurn();
        }, 1000); }

    private drawInitialCards(): void {
        for (let i = 0; i < 4; i++) {
            this.humanPlayer.drawCard();
            this.computerPlayer.drawCard();
        } }

    private renderCards(): void {
        let computerCardsCount = this.computerPlayer.getCardsInHand().length;
        let humanCards = this.humanPlayer.getCardsInHand();
        let groundCard = this.ground[this.ground.length - 1];

        this.updateGroundCard(groundCard);
        this.updateComputerCards(computerCardsCount);
        this.updateHumanCards(humanCards);

        this.setupHumanCardListener(); }

    private updateGroundCard(groundCard: Card) {
        let groundCardElement: HTMLElement;
        groundCardElement = document.querySelector(".ground .cardFront");
        let strDigit: string = groundCard.digit.toString();
        let cardTag: string = `<span class="digit">${strDigit}</span>`;
        groundCardElement.innerHTML = cardTag;
        groundCardElement.style.backgroundColor = groundCard.color; }

    private updateComputerCards(computerCardsCount: number) {
        let computerCardList: HTMLElement;
        computerCardList = document.querySelector(".computerArea .cards");
        computerCardList.innerHTML = '';

        for (let i = 0; i < computerCardsCount; i++) {
            let backCard = `<li><div class="cardBack"></div></li>`;
            computerCardList.innerHTML += backCard;
        }}

    private updateHumanCards(humanCards: Array<Card>) {
        let computerCardList: HTMLElement;
        computerCardList = document.querySelector(".humanArea .cards");
        computerCardList.innerHTML = '';

        for (let i = 0; i < humanCards.length; i++) {
            let digit = humanCards[i].digit;
            let color = humanCards[i].color;
            let frontCard = `<li><div class="cardFront" index="${i}" 
            style="background-color:${color};">
            <span class="digit">${digit}</span>
            </div></li>`;
            computerCardList.innerHTML += frontCard;
        } }

    private clearGround(): void {
        this.ground = [];
    }

    private clearDeck(): void {
        this.deck = [];
    }

    private fillDeck(): void {
        let colors = ['red', 'lime', 'blue', 'yellow'];
        for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 9; j++) {
        this.deck.push({digit: j, color: colors[i]}); } } }

  //Deck zufällig sortieren (50%)
    private shuffleDeck(): void {
        
    this.deck.sort( () => Math.random() - 0.5); }

    private moveGroundToDeck(): void {
        if (this.ground.length < 2) alert("No more cards!");
        else {
        let currCard = this.ground.pop();
        while (this.ground.length > 0) {
        this.deck.push(this.ground.pop()); }
        this.shuffleDeck();
        this.ground.push(currCard); } } }

let game = new Game();