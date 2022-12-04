const popoutMenu = document.querySelector(".popout-menu-container");
const menuButton = document.querySelector(".menu");
const closeMenuButton = document.querySelector(".close-menu-button");
const grayOut = document.querySelector(".gray-out");
popoutMenu.style.visibility = "hidden";
menuButton.style.visibility = "visible";
grayOut.style.visibility = "hidden";

menuButton.addEventListener("click", function (event) {
  menuButton.style.visibility = "hidden";
  popoutMenu.style.visibility = "visible";
  grayOut.style.visibility = "visible";
});
closeMenuButton.addEventListener("click", function (event) {
  menuButton.style.visibility = "visible";
  popoutMenu.style.visibility = "hidden";
  grayOut.style.visibility = "hidden";
});
grayOut.addEventListener("click", function (event) {
  menuButton.style.visibility = "visible";
  popoutMenu.style.visibility = "hidden";
  grayOut.style.visibility = "hidden";
});
