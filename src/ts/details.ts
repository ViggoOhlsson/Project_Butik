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

    let div = document.createElement("div");
    div.className = "modal-div";

    let img = document.createElement("img");
    img.className = "img";
    img.src = cartitem.item.cover;

    let p1 = document.createElement("p");
    p1.className = "p1";
    p1.innerHTML = cartitem.item.artist;

    let p2 = document.createElement("p");
    p2.className = "p2";
    p2.innerHTML = cartitem.item.title;

    let spanMinus = document.createElement("span");
    spanMinus.innerHTML = "-";

    let spanQuantity = document.createElement("span");
    spanQuantity.innerHTML = "2";

    let spanPlus = document.createElement("span");
    spanPlus.innerHTML = "+";

    let price = document.createElement("p");
    price.innerHTML = "0";

    let trash = document.createElement("i");
    trash.className = "fa fa-trash";

    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(spanMinus);
    div.appendChild(spanQuantity);
    div.appendChild(spanPlus);
    div.appendChild(price);
    div.appendChild(trash);

    let modal = document.getElementById("modal");
    modal.appendChild(div);
  }
}
