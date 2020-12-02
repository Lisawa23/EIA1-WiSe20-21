const sound1:HTMLAudioElement = new Audio('../L07/assets/A.mp3');
const sound2:HTMLAudioElement = new Audio('../L07/assets/C.mp3');
const sound3:HTMLAudioElement = new Audio('../L07/assets/F.mp3');
const sound4:HTMLAudioElement = new Audio('../L07/assets/G.mp3');
const sound5:HTMLAudioElement = new Audio('../L07/assets/hihat.mp3');
const sound6:HTMLAudioElement = new Audio('../L07/assets/kick.mp3');
const sound7:HTMLAudioElement = new Audio('../L07/assets/laugh-1.mp3');
const sound8:HTMLAudioElement = new Audio('../L07/assets/laugh-2.mp3');
const sound9:HTMLAudioElement = new Audio('../L07/assets/snare.mp3');

//button
//playSample = Funktion
//Der Beat bzw. die Reihenfolge der abzuspielenden Samples sollte in einem Array gespeichert werden.
function playSample(sound:string): any{
    document.getElementById('#square').innerHTML = sound;
}

//EventListener
document.querySelector(".square1").addEventListener('click', function(){
    sound1.play();
    
})

document.querySelector(".square2").addEventListener('click', function(){
    sound2.play();
})

document.querySelector(".square3").addEventListener('click', function(){
    sound3.play();
})

document.querySelector(".square4").addEventListener('click', function(){
    sound4.play();
})

document.querySelector(".square5").addEventListener('click', function(){
    sound5.play();
})

document.querySelector(".square6").addEventListener('click', function(){
    sound6.play();
})

document.querySelector(".square7").addEventListener('click', function(){
    sound7.play();
})

document.querySelector(".square8").addEventListener('click', function(){
    sound8.play();
})

document.querySelector(".square9").addEventListener('click', function(){
    sound9.play();
})


//Intervall
setInterval(function() {
    //Anweisung
   }, 500);
