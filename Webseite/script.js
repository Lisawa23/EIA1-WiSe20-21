var menuIcon = document.getElementById("menu-icon");
var slideoutMenu = document.getElementById("slideout-menu");
menuIcon.addEventListener('click', function () {
    if (slideoutMenu.style.opacity == "1") {
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    }
    else {
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    }
});
//# sourceMappingURL=script.js.map