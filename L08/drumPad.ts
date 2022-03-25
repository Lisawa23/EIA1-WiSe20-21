namespace L08 {
//Töne
const sound: HTMLAudioElement [] = [];
sound[0] = new Audio("../L08/assets/A.mp3");
sound[1] = new Audio("../L08/assets/C.mp3");
sound[2] = new Audio("../L08/assets/F.mp3");
sound[3] = new Audio("../L08/assets/G.mp3");
sound[4] = new Audio("../L08/assets/hihat.mp3");
sound[5] = new Audio("../L08/assets/kick.mp3");
sound[6] = new Audio("../L08/assets/laugh-1.mp3");
sound[7] = new Audio("../L08/assets/laugh-2.mp3");
sound[8] = new Audio("../L08/assets/snare.mp3");

//Funktion für DrumPads
function playSample(audio: number): void {
    sound [audio].play();
}

//EventListener
document.querySelector(".square1").addEventListener("click", function(): void {
    playSample(0);
    recordSample(0);
});

document.querySelector(".square2").addEventListener("click", function(): void {
    playSample(1);
    recordSample(1);
});

document.querySelector(".square3").addEventListener("click", function(): void {
    playSample(2);
    recordSample(2);
});

document.querySelector(".square4").addEventListener("click", function(): void {
    playSample(3);
    recordSample(3);
});

document.querySelector(".square5").addEventListener("click", function(): void {
    playSample(4);
    recordSample(4);
});

document.querySelector(".square6").addEventListener("click", function(): void {
    playSample(5);
    recordSample(5);
});

document.querySelector(".square7").addEventListener("click", function(): void {
    playSample(6);
    recordSample(6);
});

document.querySelector(".square8").addEventListener("click", function(): void {
    playSample(7);
    recordSample(7);
});

document.querySelector(".square9").addEventListener("click", function(): void {
    playSample(8);
    recordSample(8);
});

//Buttons
const playButton: HTMLElement = document.querySelector(".fa-play");
const stopButton: HTMLElement = document.querySelector(".fa-stop");
const trashButton: HTMLElement = document.querySelector(".fa-trash-alt");
const recordButton: HTMLElement = document.querySelector(".fa-microphone");
const randomButton: HTMLElement = document.querySelector(".fa-random");

let i: number = 0;


//Array und Funktion - Intervall
let beatArray: number [] = [];
beatArray[0] = 4;
beatArray[1] = 5;
beatArray[2] = 8;

var myInterval: number;
function playLoop (b: boolean): void {

    if (b == true) {
        myInterval = setInterval(() => {        
            if (i < beatArray.length) {
                playSample(beatArray[i]);
                i++;
            }
            else {
                i = 0;
            }
        },                       600 );
    }
    else {
        clearInterval(myInterval);
    }
}

//Record
let booleanRec: boolean;
function recordSample(index: number): void {
    if (booleanRec == true) {
       beatArray.push(index);
      }
    }

//Wechsel Record und Not-Record
recordButton.addEventListener("click", function(): void {
    if (recordButton.classList.contains("inactive")) {
        recordButton.classList.remove("inactive");
        recordButton.classList.add("active");
        booleanRec = true;
    } else {
        recordButton.classList.remove("active");
        recordButton.classList.add("inactive");
        booleanRec = false;
    }
});

//Zufallsbeat
let leeresArray: number [] = [];
let x: number = 0;
var secInterval: number;

function randomBeat (a: boolean): void {
    if (a == true) {
        secInterval = setInterval(() => {     
                let randomSound: number = Math.floor(Math.random() * sound.length);
                leeresArray.push(randomSound);
                if (x < leeresArray.length) {
                playSample(leeresArray[x]);
                x++;
            }
            else {
                x = 0;
            }
        },                        600);
    }
    else {
        clearInterval(secInterval);
    }
}

randomButton.addEventListener("click", function(): void {
    playButton.classList.contains("is-hidden");
    playButton.classList.add("is-hidden");
    stopButton.classList.remove("is-hidden");
    randomBeat(true);
});

//Lösch-Button
trashButton.addEventListener("click", function(): void {
    stopButton.classList.add("is-hidden");
    playButton.classList.remove("is-hidden");
    beatArray = [];
    leeresArray = [];
    randomBeat(false);
}); 

//Wechsel Play- und Stop-Button
playButton.addEventListener("click", function(): void {
    toggleClasses(this, stopButton);
    playLoop(true);
    recordButton.classList.remove("active");
    recordButton.classList.add("inactive");
});

stopButton.addEventListener("click", function(): void {
    toggleClasses(this, playButton);
    playLoop(false);
    randomBeat(false);
});

function toggleClasses(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
    firstHTMLElement.classList.add("is-hidden");
    secondHTMLElement.classList.remove("is-hidden");
}


//Tasteneingabe
document.addEventListener("keydown", function(event: KeyboardEvent): void {
switch (event.key) {
    case "1":
        playSample(0);
        recordSample(0);
        break;
    case "2":
        playSample(1);
        recordSample(1);
        break;
    case "3":
        playSample(2);
        recordSample(2);
        break;
    case "4":
        playSample(3);
        recordSample(3);
        break;
    case "5":
        playSample(4);
        recordSample(4);
        break;
    case "6":
        playSample(5);
        recordSample(5);
        break;
    case "7":
        playSample(6);
        recordSample(6);
        break;
    case "8":
        playSample(7);
        recordSample(7);
        break;
    case "9":
        playSample(8);
        recordSample(8);
        break;
    case"q":
        playButton.classList.contains("is-hidden");
        playButton.classList.add("is-hidden");
        stopButton.classList.remove("is-hidden");
        playLoop(true);
        break;
    case"w":
        stopButton.classList.add("is-hidden");
        playButton.classList.remove("is-hidden");
        playLoop(false);
        randomBeat(false);
        break;
    case"e":
        playButton.classList.add("is-hidden");
        stopButton.classList.remove("is-hidden");
        randomBeat(true);
        break;
    case"r":
        beatArray = [];
        leeresArray = [];
        randomBeat(false);
        stopButton.classList.add("is-hidden");
        playButton.classList.remove("is-hidden");
        break;
    case"t":
        recordButton.classList.remove("inactive");
        recordButton.classList.add("active");
        booleanRec = true;
        break;
    case"z":
        recordButton.classList.remove("active");
        recordButton.classList.add("inactive");
        booleanRec = false;
        break;
    }
});
}

