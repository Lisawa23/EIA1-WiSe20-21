//Variable
var person;
var age;
var likesCucumber;
var person = "Hans";
var age = 26;
var likesCucumber = false;
var hansAge = 26;
var hansage = 26;
//Funktionen
function myFunction() {
}
;
function ageFunction(annaAge) {
    var hansAge = 26;
    var difference = annaAge - hansAge;
    console.log(difference);
}
ageFunction(20);
ageFunction(47);
//Arrays
//einfache Arrays
var nameHans = "Hans";
var nameAnna = "Anna";
var nameTimo = "Timo";
var namePerson = ["Hans", "Anna", "Timo"];
console.log(namePerson);
console.log(namePerson[2]);
console.log(namePerson[1]);
console.log(namePerson.length);
namePerson.push("Johanna");
console.log(namePerson);
namePerson.shift();
console.log(namePerson);
//Objekte und Interfaces
var person = "Hans";
var age = 26;
var likesCucumber = false;
var person = "Anna";
var age = 34;
var likesCucumber = true;
var person = "Timo";
var age = 21;
var likesCucumber = true;
;
var objectName = {
    person: "Hans",
    age: 26,
    likesCucumber: false
};
console.log(objectName.person);
console.log(objectName.likesCucumber);
//Objekt-Instanz im Kontext vom Array
var objName = [
    {
        person: "Hans",
        age: 26,
        likesCucumber: false
    }, {
        person: "Anna",
        age: 34,
        likesCucumber: true
    }, {
        person: "Timo",
        age: 21,
        likesCucumber: true
    }
];
console.log(objName[2]);
console.log(objName[1].person);
// for (let i: number = 0; i < objName.length; i++){
//     console.log(objName[i].person);
//     console.log(objName[i].likesCucumber);
// };
function endeP(lastPhrase) {
    var my = "meine";
    var fullPhrase = "Das war " + my + " Präsentation.";
    var fullPhrase2 = "Danke für Ihre " + lastPhrase + "!";
    console.log(fullPhrase);
    console.log(fullPhrase2);
}
;
endeP("Aufmerksamkeit");
//# sourceMappingURL=praesentation.js.map