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



//Rechnungen

//Africa
const Africaprozent: number=((Africa2018/Gesamtemission)*100)
const Africavergleich: number=(((Africa2018/Africa2008)-1)*100)
const Africavergleich2: number=(Africa2018-Africa2008)

//SouthAmerica
const SouthAmericaprozent: number=((SouthAmerica2018/Gesamtemission)*100)
const SouthAmericavergleich: number=(((SouthAmerica2018/SouthAmerica2008)-1)*100)
const SouthAmericavergleich2: number=(SouthAmerica2018-SouthAmerica2008)

//Europe
var Europeprozent: number=((Europe2018/Gesamtemission)*100)
var Europevergleich: number=(((Europe2018/Europe2008)-1)*100)
var Europevergleich2: number=(Europe2018-Europe2008)

//NorthAmerica
const NorthAmericaprozent: number=((NorthAmerica2018/Gesamtemission)*100)
const NorthAmericavergleich: number=(((NorthAmerica2018/NorthAmerica2008)-1)*100)
const NorthAmericavergleich2: number=(NorthAmerica2018-NorthAmerica2008)

//Asia
const Asiaprozent: number=((Asia2018/Gesamtemission)*100)
const Asiavergleich: number=(((Asia2018/Asia2008)-1)*100)
const Asiavergleich2: number=(Asia2018-Asia2008)

//Australia
const Australiaprozent: number=((Australia2018/Gesamtemission)*100)
const Australiavergleich: number=(((Australia2018/Australia2008)-1)*100)
const Australiavergleich2: number=(Australia2018-Australia2008)


//Africa
function africa(){
    document.querySelector("#titleRegion").innerHTML = "Africa";
    document.querySelector(".ueberschrift1").innerHTML = Africa2018.toFixed(2) +"";
    document.querySelector(".ueberschrift2").innerHTML = Africaprozent.toFixed(2) + "%";
    document.querySelector(".ueberschrift3").innerHTML = Africavergleich.toFixed(2) + "%";
    document.querySelector(".ueberschrift4").innerHTML = Africavergleich2.toFixed(2) +"";
    document.querySelector(".chart").setAttribute('style', 'height:' + Africaprozent + '%');
    //document.querySelector("aktuelleElement").setAttribute('class', 'region1');
}

window.addEventListener("load", function(){
    document.querySelector(".africa").addEventListener("click", africa)
})


//SouthAmerica
function southamerica(){
    document.querySelector("#titleRegion").innerHTML = "South America";
    document.querySelector(".ueberschrift1").innerHTML = SouthAmerica2018.toFixed(2) +"";
    document.querySelector(".ueberschrift2").innerHTML = SouthAmericaprozent.toFixed(2) + "%";
    document.querySelector(".ueberschrift3").innerHTML = SouthAmericavergleich.toFixed(2) + "%";
    document.querySelector(".ueberschrift4").innerHTML = SouthAmericavergleich2.toFixed(2) +"";
    document.querySelector(".chart").setAttribute('style', 'height:' + SouthAmericaprozent + '%');
}
window.addEventListener("load", function(){
    document.querySelector(".southamerica").addEventListener("click", southamerica)
})

//Europa
function europe(){
    document.querySelector("#titleRegion").innerHTML = "Europe";
    document.querySelector(".ueberschrift1").innerHTML = Europe2018.toFixed(2) +"";
    document.querySelector(".ueberschrift2").innerHTML = Europeprozent.toFixed(2) + "%";
    document.querySelector(".ueberschrift3").innerHTML = Europevergleich.toFixed(2) + "%";
    document.querySelector(".ueberschrift4").innerHTML = Europevergleich2.toFixed(2) +"";
    document.querySelector(".chart").setAttribute('style', 'height:' + Europeprozent + '%');
}
window.addEventListener("load", function(){
    document.querySelector(".europe").addEventListener("click", europe)
})

//NorthAmerica
function northamerica(){
    document.querySelector("#titleRegion").innerHTML = "North America";
    document.querySelector(".ueberschrift1").innerHTML = NorthAmerica2018.toFixed(2) +"";
    document.querySelector(".ueberschrift2").innerHTML = NorthAmericaprozent.toFixed(2) + "%";
    document.querySelector(".ueberschrift3").innerHTML = NorthAmericavergleich.toFixed(2) + "%";
    document.querySelector(".ueberschrift4").innerHTML = NorthAmericavergleich2.toFixed(2) +"";
    document.querySelector(".chart").setAttribute('style', 'height:' + NorthAmericaprozent + '%');
}
window.addEventListener("load", function(){
    document.querySelector(".northamerica").addEventListener("click", northamerica)
})

//Asia
function asia(){
    document.querySelector("#titleRegion").innerHTML = "Asia";
    document.querySelector(".ueberschrift1").innerHTML = Asia2018.toFixed(2) +"";
    document.querySelector(".ueberschrift2").innerHTML = Asiaprozent.toFixed(2) + "%";
    document.querySelector(".ueberschrift3").innerHTML = Asiavergleich.toFixed(2) + "%";
    document.querySelector(".ueberschrift4").innerHTML = Asiavergleich2.toFixed(2) +"";
    document.querySelector(".chart").setAttribute('style', 'height:' + Asiaprozent + '%');
}
window.addEventListener("load", function(){
    document.querySelector(".asia").addEventListener("click", asia)
})

//Australia
function australia(){
    document.querySelector("#titleRegion").innerHTML = "Australia";
    document.querySelector(".ueberschrift1").innerHTML = Australia2018.toFixed(2) +"";
    document.querySelector(".ueberschrift2").innerHTML = Australiaprozent.toFixed(2) + "%";
    document.querySelector(".ueberschrift3").innerHTML = Australiavergleich.toFixed(2) + "%";
    document.querySelector(".ueberschrift4").innerHTML = Australiavergleich2.toFixed(2) +"";
    document.querySelector(".chart").setAttribute('style','height:' + Australiaprozent + '%');
}
window.addEventListener("load", function(){
    document.querySelector(".australia").addEventListener("click", australia)
})
}




