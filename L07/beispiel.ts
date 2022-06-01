window.addEventListener("load", addClickListenerDrumpad);

function playSample(soundQuelle: string): void {
    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}

function addClickListenerDrumpad(): void {
    document.querySelector("#button1").addEventListener("click", function (): void { playSample("./assets/DrumPad/A.mp3"); });
    document.querySelector("#button2").addEventListener("click", function (): void { playSample("./assets/DrumPad/C.mp3"); });
    document.querySelector("#button3").addEventListener("click", function (): void { playSample("./assets/DrumPad/F.mp3"); });
    document.querySelector("#button4").addEventListener("click", function (): void { playSample("./assets/DrumPad/G.mp3"); });
    document.querySelector("#button5").addEventListener("click", function (): void { playSample("./assets/DrumPad/hihat.mp3"); });
    document.querySelector("#button6").addEventListener("click", function (): void { playSample("./assets/DrumPad/kick.mp3"); });
    document.querySelector("#button7").addEventListener("click", function (): void { playSample("./assets/DrumPad/laugh-1.mp3"); });
    document.querySelector("#button8").addEventListener("click", function (): void { playSample("./assets/DrumPad/laugh-2.mp3"); });
    document.querySelector("#button9").addEventListener("click", function (): void { playSample("./assets/DrumPad/snare.mp3"); });
    document.querySelector(".play").addEventListener("click", function (): void { playBeat(); });
}

var beat: string[] = [
    "./assets/DrumPad/kick.mp3",
    "./assets/DrumPad/snare.mp3",
    "./assets/DrumPad/hihat.mp3"
];

var zaehler: number = 0;

function playBeat(): void {
    setInterval(function (): void {
        playSample (beat[zaehler]);
        zaehler ++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}

