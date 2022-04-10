//Töne
var Keyboard;
(function (Keyboard) {
    var sound = [];
    sound[0] = new Audio('../Keyboard/notes/c.mp3');
    sound[1] = new Audio('../Keyboard/notes/df.mp3');
    sound[2] = new Audio('../Keyboard/notes/d.mp3');
    sound[3] = new Audio('../Keyboard/notes/ef.mp3');
    sound[4] = new Audio('../Keyboard/notes/e.mp3');
    sound[5] = new Audio('../Keyboard/notes/f.mp3');
    sound[6] = new Audio('../Keyboard/notes/gf.mp3');
    sound[7] = new Audio('../Keyboard/notes/g.mp3');
    sound[8] = new Audio('../Keyboard/notes/af.mp3');
    sound[9] = new Audio('../Keyboard/notes/a.mp3');
    sound[10] = new Audio('../Keyboard/notes/bf.mp3');
    sound[11] = new Audio('../Keyboard/notes/b.mp3');
    //Funktion
    function playSample(audio) {
        sound[audio].play();
    }
    //EventListener
    document.querySelector(".c").addEventListener('click', function () {
        playSample(0);
    });
    document.querySelector(".df").addEventListener('click', function () {
        playSample(1);
    });
    document.querySelector(".d").addEventListener('click', function () {
        playSample(2);
    });
    document.querySelector(".ef").addEventListener('click', function () {
        playSample(3);
    });
    document.querySelector(".e").addEventListener('click', function () {
        playSample(4);
    });
    document.querySelector(".f").addEventListener('click', function () {
        playSample(5);
    });
    document.querySelector(".gf").addEventListener('click', function () {
        playSample(6);
    });
    document.querySelector(".g").addEventListener('click', function () {
        playSample(7);
    });
    document.querySelector(".af").addEventListener('click', function () {
        playSample(8);
    });
    document.querySelector(".a").addEventListener('click', function () {
        playSample(9);
    });
    document.querySelector(".bf").addEventListener('click', function () {
        playSample(10);
    });
    document.querySelector(".h").addEventListener('click', function () {
        playSample(11);
    });
    //Intervall
    function Reihenfolge(c, f, ab) {
        setInterval(function () {
            playSample(c);
        }, 500);
        setInterval(function () {
            playSample(f);
        }, 750);
        setInterval(function () {
            playSample(ab);
        }, 250);
    }
    document.querySelector(".play").addEventListener('click', function () {
        Reihenfolge(0, 5, 8);
    });
    //Zusatzaufgabe 
    //Tasteneingabe
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "1":
                playSample(0);
                break;
            case "2":
                playSample(1);
                break;
            case "3":
                playSample(2);
                break;
            case "4":
                playSample(3);
                break;
            case "5":
                playSample(4);
                break;
            case "6":
                playSample(5);
                break;
            case "7":
                playSample(6);
                break;
            case "8":
                playSample(7);
                break;
            case "9":
                playSample(8);
                break;
            case "q":
                playSample(9);
                break;
            case "w":
                playSample(10);
                break;
            case "e":
                playSample(11);
                break;
            case "r":
                Reihenfolge(0, 5, 8);
                break;
        }
    });
})(Keyboard || (Keyboard = {}));
//# sourceMappingURL=kscript.js.map