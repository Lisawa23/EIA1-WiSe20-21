var L06;
(function (L06) {
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
    //Gesamtemission
    var Gesamtemission = (Africa2018 + SouthAmerica2018 + Europe2018 + NorthAmerica2018 + Asia2018 + Australia2018);
    //Funktion
    function ChangeCountry(continent, newValue, oldValue) {
        document.querySelector("#titleRegion").innerHTML = continent;
        document.querySelector(".titleRegion").innerHTML = "Emission absolute of " + continent + " in 2018";
        document.querySelector("#ueberschrift1").innerHTML = newValue.toFixed(2);
        document.querySelector("#ueberschrift2").innerHTML = ((newValue / Gesamtemission) * 100).toFixed(2) + "%";
        document.querySelector("#ueberschrift3").innerHTML = (((newValue / oldValue) - 1) * 100).toFixed(2) + "%";
        document.querySelector("#ueberschrift4").innerHTML = (newValue - oldValue).toFixed(2) + "";
        document.querySelector(".chart").setAttribute('style', 'height:' + ((newValue / Gesamtemission) * 100) + '%');
    }
    //EventListener
    document.querySelector("#africa").addEventListener('click', function () {
        ChangeCountry("Africa", Africa2018, Africa2008);
    });
    document.querySelector("#southamerica").addEventListener('click', function () {
        ChangeCountry("South America", SouthAmerica2018, SouthAmerica2008);
    });
    document.querySelector("#europe").addEventListener('click', function () {
        ChangeCountry("Europe", Europe2018, Europe2008);
    });
    document.querySelector("#northamerica").addEventListener('click', function () {
        ChangeCountry("North America", NorthAmerica2018, NorthAmerica2008);
    });
    document.querySelector("#asia").addEventListener('click', function () {
        ChangeCountry("Asia", Asia2018, Asia2008);
    });
    document.querySelector("#australia").addEventListener('click', function () {
        ChangeCountry("Australia", Australia2018, Australia2008);
    });
})(L06 || (L06 = {}));
//# sourceMappingURL=script.js.map