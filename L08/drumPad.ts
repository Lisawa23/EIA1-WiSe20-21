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

let i: number = 0;

//Wechsel Play- und Stop-Button
playButton.addEventListener("click", function(): void {
    toggleClasses(this, stopButton);
    playLoop(true);
});

stopButton.addEventListener("click", function(): void {
    toggleClasses(this, playButton);
    playLoop(false);
});

function toggleClasses(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
    firstHTMLElement.classList.add("is-hidden");
    secondHTMLElement.classList.remove("is-hidden");
}


//Array und Funktion - Intervall
let beatArray: number [] = [];
beatArray[0] = 4;
beatArray[1] = 5;
beatArray[2] = 8;
// ohne den Loop von Aufgabe 7???

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
//Lösch-Button:
trashButton.addEventListener("click", function(): void {
    beatArray.length = 0;

}); 
}