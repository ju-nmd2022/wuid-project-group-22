const popoutMenu = document.querySelector(".popout-menu-container");
const menuButton = document.querySelector(".menu");
const closeMenuButton = document.querySelector(".close-menu-button");

popoutMenu.style.visibility = "hidden";
menuButton.style.visibility = "visible";

menuButton.addEventListener("click", function (event) {
  menuButton.style.visibility = "hidden";
  popoutMenu.style.visibility = "visible";
});
closeMenuButton.addEventListener("click", function (event) {
  menuButton.style.visibility = "visible";
  popoutMenu.style.visibility = "hidden";
});