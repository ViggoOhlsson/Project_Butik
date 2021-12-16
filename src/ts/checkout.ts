import { identity } from "cypress/types/lodash";
import { albums } from "./data/albums";
import { Cart } from "./models/Cart";
import { CartItem } from "./models/CartItem";
import { Release } from "./models/release";

let cart = new Cart();

window.onload = function () {
  displayCart();
  displayRec();
  let toCheckoutButton = document.getElementById("checkoutButton") as HTMLButtonElement;
  toCheckoutButton.addEventListener("click", toggleCheckout);
  let backButton = document.getElementById("backButton") as HTMLButtonElement;
  backButton.addEventListener("click", toggleCheckout);
};

function toggleCheckout() {
  let main = document.getElementById("main") as HTMLDivElement;
  let payment = document.getElementById("payment") as HTMLDivElement;
  if (main.style.display == "block") {
    main.style.display = "none";
    payment.style.display = "block";
  } else {
    main.style.display = "block";
    payment.style.display = "none";
  }
}

function displayRec() {
  let recWrapper = document.getElementById("recWrapper") as HTMLDivElement;
  let seedAlbum:Release = cart.items[Math.floor(Math.random() * cart.items.length)].item;
  let rec = selectRelease(seedAlbum);
  console.log(seedAlbum);
  console.log(rec);
  let recTitle = document.getElementById("recTitle") as HTMLSpanElement;
  recTitle.innerHTML = "Since you enjoy <span class='gold'>" + seedAlbum.artist + "</span>'s <span class='gold'>" + seedAlbum.title + "</span> we recommend to you...";

  let recImg = document.getElementById("recImg") as HTMLImageElement;
  recImg.src = "../" + rec.cover;
  let recName = document.getElementById("recName") as HTMLSpanElement;
  recName.innerHTML = rec.title;
  let recArtist = document.getElementById("recArtist") as HTMLSpanElement;
  recArtist.innerHTML = rec.artist;
  recWrapper.addEventListener("click", () => {
    cart.addToCart(rec);
    displayCart();
  });
}

function selectRelease(seedAlbum:Release):Release {
  let releases:Release[] = [];
  for (let release of albums) {
    if(release.category == seedAlbum.category && release != seedAlbum) {
      releases.push(release);
    }
  }
  return releases[Math.floor(Math.random() * releases.length)];
}

function displayCart() {

  if (cart.items != []) {
    let cartList = document.getElementById("cartList") as HTMLDivElement;
    let cost = document.getElementById("cartCost") as HTMLSpanElement;
    cost.innerHTML = cart.calculateCost().toString() + "kr";
    cartList.innerHTML = null;
    for(let i = 0; i < cart.items.length; i++) {
      console.log(i);
      let cartItem = document.createElement("div");
      cartItem.className = ("cart-item");

      let itemThumb = document.createElement("div");
      itemThumb.className = "item-thumb";
      let img = document.createElement("img");
      img.src = "../" + cart.items[i].item.cover;
      itemThumb.appendChild(img);
      cartItem.appendChild(itemThumb);

      let itemText = document.createElement("div");
      itemText.className = "item-text";
      let itemTitle = document.createElement("span");
      itemTitle.innerHTML = cart.items[i].item.title;
      itemTitle.className = "item-title";
      itemText.appendChild(itemTitle);
      let itemArtist = document.createElement("span");
      itemArtist.className = "item-artist";
      itemArtist.innerHTML = cart.items[i].item.artist;
      itemText.appendChild(itemArtist);
      cartItem.appendChild(itemText);

      let itemAmount = document.createElement("span");
      console.log(cart.items[i].amount.toString());
      itemAmount.innerHTML = cart.items[i].amount.toString();
      itemAmount.className = "item-amount";
      cartItem.appendChild(itemAmount);

      let itemCost = document.createElement("span");
      itemCost.className = "item-cost";
      itemCost.innerHTML = (cart.items[i].item.price * cart.items[i].amount).toString() + "kr";
      cartItem.appendChild(itemCost);
      cartList.appendChild(cartItem);
    }
  }
}