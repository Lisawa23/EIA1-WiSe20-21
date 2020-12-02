var sound1 = new Audio('../L07/assets/A.mp3');
var sound2 = new Audio('../L07/assets/C.mp3');
var sound3 = new Audio('../L07/assets/F.mp3');
var sound4 = new Audio('../L07/assets/G.mp3');
var sound5 = new Audio('../L07/assets/hihat.mp3');
var sound6 = new Audio('../L07/assets/kick.mp3');
var sound7 = new Audio('../L07/assets/laugh-1.mp3');
var sound8 = new Audio('../L07/assets/laugh-2.mp3');
var sound9 = new Audio('../L07/assets/snare.mp3');
//button
//playSample = Funktion
//Der Beat bzw. die Reihenfolge der abzuspielenden Samples sollte in einem Array gespeichert werden.
function playSample(sound) {
    document.getElementById('#square').innerHTML = sound;
}
//EventListener
document.querySelector(".square1").addEventListener('click', function () {
    sound1.play();
});
document.querySelector(".square2").addEventListener('click', function () {
    sound2.play();
});
document.querySelector(".square3").addEventListener('click', function () {
    sound3.play();
});
document.querySelector(".square4").addEventListener('click', function () {
    sound4.play();
});
document.querySelector(".square5").addEventListener('click', function () {
    sound5.play();
});
document.querySelector(".square6").addEventListener('click', function () {
    sound6.play();
});
document.querySelector(".square7").addEventListener('click', function () {
    sound7.play();
});
document.querySelector(".square8").addEventListener('click', function () {
    sound8.play();
});
document.querySelector(".square9").addEventListener('click', function () {
    sound9.play();
});
//Intervall
setInterval(function () {
    //Anweisung
}, 500);
//# sourceMappingURL=script7.js.map