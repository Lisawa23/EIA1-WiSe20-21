window.addEventListener("load", function () {
    var menuIcon = document.getElementById("menu-icon");
    var slideoutMenu = document.getElementById("slideout-menu");
    var time = document.querySelector(".mfirst");
    menuIcon.addEventListener("click", function () {
        if (slideoutMenu.style.opacity == "1") {
            slideoutMenu.style.opacity = "0";
            slideoutMenu.style.pointerEvents = "none";
        }
        else {
            slideoutMenu.style.opacity = "1";
            slideoutMenu.style.pointerEvents = "auto";
        }
    });
    var spr = [];
    spr[0] = "CREATIVE    ";
    spr[1] = "A TEAMPLAYER    ";
    spr[2] = "INDIVIDUAL    ";
    spr[3] = "HARDWORKING    ";
    spr[4] = "RELIABLY    ";
    spr[5] = "ADVENTUROUS    ";
    spr[6] = "AMBITIOUS    ";
    spr[7] = "HUMOROUS    ";
    spr[8] = "COMMUNICATIVE    ";
    var n = 0;
    var m = 0;
    function tick() {
        n++;
        if (n > spr[m].length) {
            n = 1;
            m++;
        }
        if (m > 8)
            m = 0;
        document.querySelector("#typed").innerHTML = spr[m].slice(0, n);
        window.setTimeout(tick, 300);
    }
    window.setTimeout(tick, 500);
});
//# sourceMappingURL=p_script.js.map