var L08;
(function (L08) {
    //Töne
    var sound = [];
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
    function playSample(audio) {
        sound[audio].play();
    }
    //EventListener
    document.querySelector(".square1").addEventListener("click", function () {
        playSample(0);
        recordSample(0);
    });
    document.querySelector(".square2").addEventListener("click", function () {
        playSample(1);
        recordSample(1);
    });
    document.querySelector(".square3").addEventListener("click", function () {
        playSample(2);
        recordSample(2);
    });
    document.querySelector(".square4").addEventListener("click", function () {
        playSample(3);
        recordSample(3);
    });
    document.querySelector(".square5").addEventListener("click", function () {
        playSample(4);
        recordSample(4);
    });
    document.querySelector(".square6").addEventListener("click", function () {
        playSample(5);
        recordSample(5);
    });
    document.querySelector(".square7").addEventListener("click", function () {
        playSample(6);
        recordSample(6);
    });
    document.querySelector(".square8").addEventListener("click", function () {
        playSample(7);
        recordSample(7);
    });
    document.querySelector(".square9").addEventListener("click", function () {
        playSample(8);
        recordSample(8);
    });
    //Buttons
    var playButton = document.querySelector(".fa-play");
    var stopButton = document.querySelector(".fa-stop");
    var trashButton = document.querySelector(".fa-trash-alt");
    var recordButton = document.querySelector(".fa-microphone");
    var randomButton = document.querySelector(".fa-random");
    var i = 0;
    //Wechsel Play- und Stop-Button
    playButton.addEventListener("click", function () {
        toggleClasses(this, stopButton);
        playLoop(true);
        recordButton.classList.remove("active");
        recordButton.classList.add("inactive");
    });
    stopButton.addEventListener("click", function () {
        toggleClasses(this, playButton);
        playLoop(false);
        randomBeat(false);
    });
    function toggleClasses(firstHTMLElement, secondHTMLElement) {
        firstHTMLElement.classList.add("is-hidden");
        secondHTMLElement.classList.remove("is-hidden");
    }
    //Array und Funktion - Intervall
    var beatArray = [];
    beatArray[0] = 4;
    beatArray[1] = 5;
    beatArray[2] = 8;
    var myInterval;
    function playLoop(b) {
        if (b == true) {
            myInterval = setInterval(function () {
                if (i < beatArray.length) {
                    playSample(beatArray[i]);
                    i++;
                }
                else {
                    i = 0;
                }
            }, 600);
        }
        else {
            clearInterval(myInterval);
        }
    }
    //Record
    var booleanRec;
    function recordSample(index) {
        if (booleanRec == true) {
            beatArray.push(index);
        }
    }
    //Wechsel Record und Not-Record
    recordButton.addEventListener("click", function () {
        if (recordButton.classList.contains("inactive")) {
            recordButton.classList.remove("inactive");
            recordButton.classList.add("active");
            booleanRec = true;
        }
        else {
            recordButton.classList.remove("active");
            recordButton.classList.add("inactive");
            booleanRec = false;
        }
    });
    //Zufallsbeat
    var leeresArray = [];
    var x = 0;
    var secInterval;
    function randomBeat(a) {
        if (a == true) {
            secInterval = setInterval(function () {
                for (x = 0; x <= 9; x++) {
                    leeresArray.push(Math.floor(Math.random() * 10) + 1);
                }
                if (x < leeresArray.length) {
                    playSample(leeresArray[x]);
                    x++;
                }
                else {
                    x = 0;
                }
            }, 600);
        }
        else {
            clearInterval(secInterval);
        }
    }
    randomButton.addEventListener("click", function () {
        playButton.classList.contains("is-hidden");
        playButton.classList.add("is-hidden");
        stopButton.classList.remove("is-hidden");
        randomBeat(true);
    });
    //Lösch-Button
    trashButton.addEventListener("click", function () {
        stopButton.classList.add("is-hidden");
        playButton.classList.remove("is-hidden");
        beatArray.length = 0;
        leeresArray.length = 0;
        randomBeat(false);
    });
    //Tasteneingabe
    document.addEventListener("keydown", function (event) {
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
            case "q":
                playButton.classList.contains("is-hidden");
                playButton.classList.add("is-hidden");
                stopButton.classList.remove("is-hidden");
                playLoop(true);
                break;
            case "w":
                stopButton.classList.add("is-hidden");
                playButton.classList.remove("is-hidden");
                playLoop(false);
                randomBeat(false);
                break;
            case "e":
                playButton.classList.add("is-hidden");
                stopButton.classList.remove("is-hidden");
                randomBeat(true);
                break;
            case "r":
                beatArray.length = 0;
                leeresArray.length = 0;
                randomBeat(false);
                stopButton.classList.add("is-hidden");
                playButton.classList.remove("is-hidden");
                break;
            case "t":
                recordButton.classList.remove("inactive");
                recordButton.classList.add("active");
                booleanRec = true;
                break;
            case "z":
                recordButton.classList.remove("active");
                recordButton.classList.add("inactive");
                booleanRec = false;
                break;
        }
    });
})(L08 || (L08 = {}));
//# sourceMappingURL=drumPad.js.map