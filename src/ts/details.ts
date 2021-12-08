import { divide } from "cypress/types/lodash";
import { albums } from "./data/albums";
import { Cart } from "./models/cart";
import { Release } from "./models/release";
import { CartItem } from "./models/CartItem";

let cart = new Cart();

window.onload = function () {
  let shoppingCart = document.getElementById("shopping-cart");
  shoppingCart.addEventListener("click", () => {
    createCartHtml();
  });

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("r");
  let currentProduct: Release = null;

  for (let i = 0; i < albums.length; i++) {
    if (albums[i].id === myParam) {
      currentProduct = albums[i];
    }
  }

  let buyButton = document.getElementById("buybutton");
  buyButton.addEventListener("click", () => {
    cart.addToCart(currentProduct);
  });

  console.log(myParam);
};

function createCartHtml() {
  for (let i = 0; i < cart.items.length; i++) {
    let cartitem = cart.items[i];

    let img = document.createElement("img");
    img.src = cartitem.item.cover;

    let p1 = document.createElement("p");
    p1.innerHTML = cartitem.item.artist;

    let p2 = document.createElement("p");
    p2.innerHTML = cartitem.item.title;

    let modal = document.getElementById("modal");
    modal.appendChild(img);
    modal.appendChild(p1);
    modal.appendChild(p2);

    let spanMinus = document.createElement("span");
    spanMinus.innerHTML = "-";

    let spanQuantity = document.createElement("span");
    spanQuantity.innerHTML = " ";

    let spanPlus = document.createElement("span");
    spanPlus.innerHTML = "+";

    let quantity = document.getElementById("quant");
    quantity.appendChild(spanMinus);
    quantity.appendChild(spanQuantity);
    quantity.appendChild(spanPlus);

    modal.appendChild(quantity);

    let price = document.createElement("p");
    price.innerHTML = " ";

    modal.appendChild(price);

    let svg = document.createElement("svg");
  }
}
