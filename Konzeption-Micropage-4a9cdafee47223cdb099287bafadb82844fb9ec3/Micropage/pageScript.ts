

window.addEventListener("load", function(): void {
let hideBlock: HTMLElement = document.querySelector(".timeline-panel");
document.querySelector(".mfirst").addEventListener("mouseover", function(): void {
  let text: HTMLElement = document.querySelector(".text1");
  let text2: HTMLElement = document.querySelector(".text2");
  let text3: HTMLElement = document.querySelector(".text3");
  let text4: HTMLElement = document.querySelector(".text4");
  hideBlock.classList.remove("hidden");
  text.innerHTML = "Vorlesung";
  text2.innerHTML = "";
  text3.innerHTML = "";
  text4.innerHTML = "";
});
document.querySelector(".mfirst").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});
document.querySelector(".m2").addEventListener("mouseover", function(): void {
  let text: HTMLElement = document.querySelector(".text1");
  let text2: HTMLElement = document.querySelector(".text2");
  let text3: HTMLElement = document.querySelector(".text3");
  let text4: HTMLElement = document.querySelector(".text4");
  hideBlock.classList.remove("hidden");
  text.innerHTML = "Ideenfindung";
  text2.innerHTML = "Pitchentwurf 1";
  text3.innerHTML = "Pitch 1";
  text4.innerHTML = "";
});
document.querySelector(".m2").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});
document.querySelector(".m3").addEventListener("mouseover", function(): void {
  let text: HTMLElement = document.querySelector(".text1");
  let text2: HTMLElement = document.querySelector(".text2");
  let text3: HTMLElement = document.querySelector(".text3");
  let text4: HTMLElement = document.querySelector(".text4");
  hideBlock.classList.remove("hidden");
  text.innerHTML = "Pitchentwicklung";
  text2.innerHTML = "Pitch 2";
  text3.innerHTML = "Konzeptentwicklung";
  text4.innerHTML = "Illustrationen erstellen";
});
document.querySelector(".m3").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});
document.querySelector(".m4").addEventListener("mouseover", function(): void {
  let text: HTMLElement = document.querySelector(".text1");
  let text2: HTMLElement = document.querySelector(".text2");
  let text3: HTMLElement = document.querySelector(".text3");
  let text4: HTMLElement = document.querySelector(".text4");
  hideBlock.classList.remove("hidden");
  text.innerHTML = "Animieren";
  text2.innerHTML = "Postproduktion";
  text3.innerHTML = "Präsentationsvorbereitung";
  text4.innerHTML = "Präsentieren";
});
document.querySelector(".m4").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});
document.querySelector(".mlast").addEventListener("mouseover", function(): void {
  let text: HTMLElement = document.querySelector(".text1");
  let text2: HTMLElement = document.querySelector(".text2");
  let text3: HTMLElement = document.querySelector(".text3");
  let text4: HTMLElement = document.querySelector(".text4");
  hideBlock.classList.remove("hidden");
  text.innerHTML = "Letzte Schliffe";
  text2.innerHTML = "Micropage erstellen";
  text3.innerHTML = "";
  text4.innerHTML = "";
});
document.querySelector(".mlast").addEventListener("mouseout", function(): void {
  hideBlock.classList.add("hidden");
});



});