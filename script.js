const popoutMenu = document.querySelector(".popout-menu-container");
const menuButton = document.querySelector(".menu");
const closeMenuButton = document.querySelector(".close-menu-button");
const popoutCart = document.querySelector(".popout-cart-container");
const cartButton = document.querySelector(".cart");
const closeCartButton = document.querySelector(".close-menu-button-cart");

popoutCart.style.visibility = "hidden";
cartButton.style.visibility = "visible";

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
cartButton.addEventListener("click", function (event) {
  cartButton.style.visibility = "hidden";
  popoutCart.style.visibility = "visible";
});
closeCartButton.addEventListener("click", function (event) {
  cartButton.style.visibility = "visible";
  popoutCart.style.visibility = "hidden";
});
