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
    var i = 0;
    //Wechsel Play- und Stop-Button
    playButton.addEventListener("click", function () {
        toggleClasses(this, stopButton);
        playLoop(true);
    });
    stopButton.addEventListener("click", function () {
        toggleClasses(this, playButton);
        playLoop(false);
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
    // ohne den Loop von Aufgabe 7???
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
    //Lösch-Button:
    trashButton.addEventListener("click", function () {
        beatArray.length = 0;
    });
})(L08 || (L08 = {}));
//# sourceMappingURL=drumPad.js.map