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
    //Africa
    function africa() {
        document.querySelector("#titleRegion").innerHTML = "Africa";
        document.querySelector(".ueberschrift1").innerHTML = Africa2018.toFixed(2) + "";
        document.querySelector(".ueberschrift2").innerHTML = Africaprozent.toFixed(2) + "%";
        document.querySelector(".ueberschrift3").innerHTML = Africavergleich.toFixed(2) + "%";
        document.querySelector(".ueberschrift4").innerHTML = Africavergleich2.toFixed(2) + "";
        document.querySelector(".chart").innerHTML = Africa2018 + "";
        document.querySelector(".chart").setAttribute('style', 'height:' + Africaprozent + '%');
    }
    window.addEventListener("load", function () {
        document.querySelector(".africa").addEventListener("click", africa);
    });
    //SouthAmerica
    function southamerica() {
        document.querySelector("#titleRegion").innerHTML = "South America";
        document.querySelector(".ueberschrift1").innerHTML = SouthAmerica2018.toFixed(2) + "";
        document.querySelector(".ueberschrift2").innerHTML = SouthAmericaprozent.toFixed(2) + "%";
        document.querySelector(".ueberschrift3").innerHTML = SouthAmericavergleich.toFixed(2) + "%";
        document.querySelector(".ueberschrift4").innerHTML = SouthAmericavergleich2.toFixed(2) + "";
        document.querySelector(".chart").innerHTML = SouthAmerica2018 + "";
        document.querySelector(".chart").setAttribute('style', 'height:' + SouthAmericaprozent + '%');
    }
    window.addEventListener("load", function () {
        document.querySelector(".southamerica").addEventListener("click", southamerica);
    });
    //Europa
    function europe() {
        document.querySelector("#titleRegion").innerHTML = "Europe";
        document.querySelector(".ueberschrift1").innerHTML = Europe2018.toFixed(2) + "";
        document.querySelector(".ueberschrift2").innerHTML = Europeprozent.toFixed(2) + "%";
        document.querySelector(".ueberschrift3").innerHTML = Europevergleich.toFixed(2) + "%";
        document.querySelector(".ueberschrift4").innerHTML = Europevergleich2.toFixed(2) + "";
        document.querySelector(".chart").innerHTML = Europe2018 + "";
        document.querySelector(".chart").setAttribute('style', 'height:' + Europeprozent + '%');
    }
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", europe);
    });
    //NorthAmerica
    function northamerica() {
        document.querySelector("#titleRegion").innerHTML = "North America";
        document.querySelector(".ueberschrift1").innerHTML = NorthAmerica2018.toFixed(2) + "";
        document.querySelector(".ueberschrift2").innerHTML = NorthAmericaprozent.toFixed(2) + "%";
        document.querySelector(".ueberschrift3").innerHTML = NorthAmericavergleich.toFixed(2) + "%";
        document.querySelector(".ueberschrift4").innerHTML = NorthAmericavergleich2.toFixed(2) + "";
        document.querySelector(".chart").innerHTML = NorthAmerica2018 + "";
        document.querySelector(".chart").setAttribute('style', 'height:' + NorthAmericaprozent + '%');
    }
    window.addEventListener("load", function () {
        document.querySelector(".northamerica").addEventListener("click", northamerica);
    });
    //Asia
    function asia() {
        document.querySelector("#titleRegion").innerHTML = "Asia";
        document.querySelector(".ueberschrift1").innerHTML = Asia2018.toFixed(2) + "";
        document.querySelector(".ueberschrift2").innerHTML = Asiaprozent.toFixed(2) + "%";
        document.querySelector(".ueberschrift3").innerHTML = Asiavergleich.toFixed(2) + "%";
        document.querySelector(".ueberschrift4").innerHTML = Asiavergleich2.toFixed(2) + "";
        document.querySelector(".chart").innerHTML = Asia2018 + "";
        document.querySelector(".chart").setAttribute('style', 'height:' + Asiaprozent + '%');
    }
    window.addEventListener("load", function () {
        document.querySelector(".asia").addEventListener("click", asia);
    });
    //Australia
    function australia() {
        document.querySelector("#titleRegion").innerHTML = "Australia";
        document.querySelector(".ueberschrift1").innerHTML = Australia2018.toFixed(2) + "";
        document.querySelector(".ueberschrift2").innerHTML = Australiaprozent.toFixed(2) + "%";
        document.querySelector(".ueberschrift3").innerHTML = Australiavergleich.toFixed(2) + "%";
        document.querySelector(".ueberschrift4").innerHTML = Australiavergleich2.toFixed(2) + "";
        document.querySelector(".chart").innerHTML = Australia2018 + "";
        document.querySelector(".chart").setAttribute('style', 'height:' + Australiaprozent + '%');
    }
    window.addEventListener("load", function () {
        document.querySelector(".australia").addEventListener("click", australia);
    });
})(L06 || (L06 = {}));
//# sourceMappingURL=script.js.map