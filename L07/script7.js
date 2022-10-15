//Töne
var L07;
(function (L07) {
    var sound = [];
    sound[0] = new Audio('../L07/assets/A.mp3');
    sound[1] = new Audio('../L07/assets/C.mp3');
    sound[2] = new Audio('../L07/assets/F.mp3');
    sound[3] = new Audio('../L07/assets/G.mp3');
    sound[4] = new Audio('../L07/assets/hihat.mp3');
    sound[5] = new Audio('../L07/assets/kick.mp3');
    sound[6] = new Audio('../L07/assets/laugh-1.mp3');
    sound[7] = new Audio('../L07/assets/laugh-2.mp3');
    sound[8] = new Audio('../L07/assets/snare.mp3');
    //Funktion
    function playSample(audio) {
        sound[audio].play();
    }
    //EventListener
    document.querySelector(".square1").addEventListener('click', function () {
        playSample(0);
    });
    document.querySelector(".square2").addEventListener('click', function () {
        playSample(1);
    });
    document.querySelector(".square3").addEventListener('click', function () {
        playSample(2);
    });
    document.querySelector(".square4").addEventListener('click', function () {
        playSample(3);
    });
    document.querySelector(".square5").addEventListener('click', function () {
        playSample(4);
    });
    document.querySelector(".square6").addEventListener('click', function () {
        playSample(5);
    });
    document.querySelector(".square7").addEventListener('click', function () {
        playSample(6);
    });
    document.querySelector(".square8").addEventListener('click', function () {
        playSample(7);
    });
    document.querySelector(".square9").addEventListener('click', function () {
        playSample(8);
    });
    //Intervall
    function Reihenfolge(hihat, kick, snare) {
        setInterval(function () {
            playSample(hihat);
            playSample(kick);
            playSample(snare);
        }, 500);
    }
    document.querySelector(".play").addEventListener('click', function () {
        Reihenfolge(4, 5, 8);
    });
})(L07 || (L07 = {}));
//# sourceMappingURL=script7.js.map