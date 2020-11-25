namespace L06{
//Emissionswerte

//Africa
const Africa2008: number=1028
const Africa2018: number=1235.5

//SouthAmerica
const SouthAmerica2008: number=1132.6
const SouthAmerica2018: number=1261.5

//Europe
var Europe2008: number=4965.7
var Europe2018: number=4209.3

//NorthAmerica
const NorthAmerica2008: number=6600.4
const NorthAmerica2018: number=6035.6

//Asia
const Asia2008: number=12954.7
const Asia2018: number=16274.1

//Australia
const Australia2008: number=1993
const Australia2018: number=2100.5


//Gesamtemission
const Gesamtemission: number=(Africa2018+SouthAmerica2018+Europe2018+NorthAmerica2018+Asia2018+Australia2018)

//Funktion
function ChangeCountry(continent: string, newValue: number, oldValue: number){
    document.querySelector("#titleRegion").innerHTML = continent;
    document.querySelector(".titleRegion").innerHTML = "Emission absolute of "+continent+" in 2018";
    document.querySelector("#ueberschrift1").innerHTML = newValue.toFixed(2);
    document.querySelector("#ueberschrift2").innerHTML = ((newValue/Gesamtemission)*100).toFixed(2) + "%";
    document.querySelector("#ueberschrift3").innerHTML = (((newValue/oldValue)-1)*100).toFixed(2) + "%";
    document.querySelector("#ueberschrift4").innerHTML = (newValue-oldValue).toFixed(2) +"";
    document.querySelector(".chart").setAttribute('style', 'height:' + ((newValue/Gesamtemission)*100) + '%');
}

//EventListener
document.querySelector("#africa").addEventListener('click', function(){
    ChangeCountry("Africa", Africa2018, Africa2008);
})

document.querySelector("#southamerica").addEventListener('click', function(){
    ChangeCountry("South America", SouthAmerica2018, SouthAmerica2008);
})

document.querySelector("#europe").addEventListener('click', function(){
    ChangeCountry("Europe", Europe2018, Europe2008);
})

document.querySelector("#northamerica").addEventListener('click', function(){
    ChangeCountry("North America", NorthAmerica2018, NorthAmerica2008);
})

document.querySelector("#asia").addEventListener('click', function(){
    ChangeCountry("Asia", Asia2018, Asia2008);
})

document.querySelector("#australia").addEventListener('click', function(){
    ChangeCountry("Australia", Australia2018, Australia2008);
})

}