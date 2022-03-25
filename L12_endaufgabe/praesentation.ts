//Variable

var person: string;
var age: number;
var likesCucumber: boolean;


var person: string = "Hans";
var age: number = 26;
var likesCucumber: boolean = false;


const hansAge: number = 26;

let hansage: number = 26; 


//Funktionen

function myFunction() {
};


function ageFunction(annaAge: number) {
 var hansAge: number = 26;
 var difference: number = annaAge - hansAge
 console.log(difference);
}

ageFunction(20);
ageFunction(47);




//Arrays
//einfache Arrays


var nameHans: string = "Hans";
var nameAnna: string = "Anna";
var nameTimo: string = "Timo";


var namePerson: string[] = ["Hans", "Anna", "Timo"];

console.log(namePerson);

console.log(namePerson[2]);
console.log(namePerson[1]);


console.log(namePerson.length);

namePerson.push("Johanna");
console.log(namePerson);

namePerson.shift();
console.log(namePerson);

//Objekte und Interfaces

var person: string = "Hans";
var age: number = 26;
var likesCucumber: boolean = false;

var person: string = "Anna";
var age: number = 34
var likesCucumber: boolean = true;

var person: string = "Timo";
var age: number = 21
var likesCucumber: boolean = true;


interface list{
    person: string;
    age: number;
    likesCucumber: boolean;
};

var objectName: list = {
    person: "Hans",
    age: 26,
    likesCucumber: false
};

console.log(objectName.person);
console.log(objectName.likesCucumber);

//Objekt-Instanz im Kontext vom Array

var objName: list[] = [
{
    person: "Hans",
    age: 26,
    likesCucumber: false
}, {
    person: "Anna",
    age: 34,
    likesCucumber: true 
},{
    person: "Timo",
    age: 21,
    likesCucumber: true 
}];



console.log(objName[2]);
console.log(objName[1].person);


// for (let i: number = 0; i < objName.length; i++){
//     console.log(objName[i].person);
//     console.log(objName[i].likesCucumber);
// };


function endeP(lastPhrase: string){
    var my: string = "meine";
    var fullPhrase: string = "Das war "+ my + " Präsentation.";
    var fullPhrase2: string = "Danke für Ihre "+ lastPhrase+ "!";
    console.log(fullPhrase);
    console.log(fullPhrase2);
};

endeP("Aufmerksamkeit");  



