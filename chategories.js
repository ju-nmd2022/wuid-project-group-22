const popoutMenu = document.querySelector(".popout-menu-container");
const menuButton = document.querySelector(".menu");
const closeMenuButton = document.querySelector(".close-menu-button");
const popoutCart = document.querySelector(".popout-cart-container");
const cartButton = document.querySelector(".cart");
const closeCartButton = document.querySelector(".close-menu-button-cart");
const greyOut = document.querySelector(".grey-out");

// const itemBox = document.querySelector(".item-box-for-cart");
const nothingInCart = document.querySelector(".empty-cart-text");

// itemBox.style.visibility = "hidden";

greyOut.style.visibility = "hidden";

popoutCart.style.visibility = "hidden";
cartButton.style.visibility = "visible";

popoutMenu.style.visibility = "hidden";
menuButton.style.visibility = "visible";

menuButton.addEventListener("click", function (event) {
  menuButton.style.visibility = "hidden";
  popoutMenu.style.visibility = "visible";
  greyOut.style.visibility = "visible";
  cartButton.style.visibility = "hidden";
});
closeMenuButton.addEventListener("click", function (event) {
  menuButton.style.visibility = "visible";
  popoutMenu.style.visibility = "hidden";
  greyOut.style.visibility = "hidden";
  cartButton.style.visibility = "visible";
});
cartButton.addEventListener("click", function (event) {
  cartButton.style.visibility = "hidden";
  popoutCart.style.visibility = "visible";
  greyOut.style.visibility = "visible";
  menuButton.style.visibility = "hidden";
  //   itemBox.style.visibility = "visible";
});
closeCartButton.addEventListener("click", function (event) {
  cartButton.style.visibility = "visible";
  popoutCart.style.visibility = "hidden";
  greyOut.style.visibility = "hidden";
  menuButton.style.visibility = "visible";
  //   itemBox.style.visibility = "hidden";
});
