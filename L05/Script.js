//Emissionswerte
//Africa
var Africa2008 = 1028;
var Africa2018 = 1235.5;
//SouthAmerica
var SouthAmerica2008 = 1132.6;
var SouthAmerica2018 = 1261.5;
//Europe
var Europe2008 = 4965.7;
var Europe2018 = 4209.3;
//NorthAmerica
var NorthAmerica2008 = 6600.4;
var NorthAmerica2018 = 6035.6;
//Asia
var Asia2008 = 12954.7;
var Asia2018 = 16274.1;
//Australia
var Australia2008 = 1993;
var Australia2018 = 2100.5;
//Rechnungen
//Africa
var Africaprozent = ((Africa2018 / Gesamtemission) * 100);
var Africavergleich = (((Africa2018 / Africa2008) - 1) * 100);
var Africavergleich2 = (Africa2018 - Africa2008);
//SouthAmerica
var SouthAmericaprozent = ((SouthAmerica2018 / Gesamtemission) * 100);
var SouthAmericavergleich = (((SouthAmerica2018 / SouthAmerica2008) - 1) * 100);
var SouthAmericavergleich2 = (SouthAmerica2018 - SouthAmerica2008);
//Europe
var Europeprozent = ((Europe2018 / Gesamtemission) * 100);
var Europevergleich = (((Europe2018 / Europe2008) - 1) * 100);
var Europevergleich2 = (Europe2018 - Europe2008);
//NorthAmerica
var NorthAmericaprozent = ((NorthAmerica2018 / Gesamtemission) * 100);
var NorthAmericavergleich = (((NorthAmerica2018 / NorthAmerica2008) - 1) * 100);
var NorthAmericavergleich2 = (NorthAmerica2018 - NorthAmerica2008);
//Asia
var Asiaprozent = ((Asia2018 / Gesamtemission) * 100);
var Asiavergleich = (((Asia2018 / Asia2008) - 1) * 100);
var Asiavergleich2 = (Asia2018 - Asia2008);
//Australia
var Australiaprozent = ((Australia2018 / Gesamtemission) * 100);
var Australiavergleich = (((Australia2018 / Australia2008) - 1) * 100);
var Australiavergleich2 = (Australia2018 - Australia2008);
//Gesamtemission
var Gesamtemission = (Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018);
//Konsolenausgabe
//Africa
console.log("Die Emission von Afrika im Jahr 2018 ist: " + Africa2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + Africaprozent + " %.");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + Africavergleich + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Africavergleich2 + " kg CO2.");
//SouthAmerika
console.log("Die Emission von Südamerika im Jahr 2018 ist: " + SouthAmerica2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + SouthAmericaprozent + " %.");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + SouthAmericavergleich + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + SouthAmericavergleich2 + " kg CO2.");
//Europe
console.log("Die Emission von Europa im Jahr 2018 ist: " + Europe2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + Europeprozent + " %.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um  " + Europevergleich + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Europevergleich2 + " kg CO2.");
//NorthAmerika
console.log("Die Emission von Nordamerika im Jahr 2018 ist: " + NorthAmerica2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + NorthAmericaprozent + " %.");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + NorthAmericavergleich + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + NorthAmericavergleich2 + " kg CO2.");
//Asia
console.log("Die Emission von Asien im Jahr 2018 ist: " + Asia2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + Asiaprozent + " %.");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + Asiavergleich + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Asiavergleich2 + " kg CO2.");
//Australia
console.log("Die Emission von Australien im Jahr 2018 ist: " + Australia2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + Australiaprozent + " %.");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + Australiavergleich + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Australiavergleich2 + " kg CO2");
//# sourceMappingURL=Script.js.map