const menuIcon: HTMLElement = document.getElementById("menu-icon");
const slideoutMenu: HTMLElement = document.getElementById("slideout-menu");

menuIcon.addEventListener("click", function (): void {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = "0";
    slideoutMenu.style.pointerEvents = "none";
  } else {
    slideoutMenu.style.opacity = "1";
    slideoutMenu.style.pointerEvents = "auto";
  }
});