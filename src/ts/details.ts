import { divide } from "cypress/types/lodash";
import { albums } from "./data/albums";
import { Cart } from "./models/cart";
import { Release } from "./models/release";
import { CartItem } from "./models/CartItem";

let cart = new Cart();

window.onload = function () {
  let urlID = urlGet("r");
  console.log(urlID);
  displayReleaseInfo(selectRelease(urlID));
  document.title =
    selectRelease(urlID).artist + " | " + selectRelease(urlID).title;
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

function displayReleaseInfo(release: Release) {
  let coverImg: HTMLImageElement = document.getElementById(
    "cover"
  ) as HTMLImageElement;
  coverImg.src = "../" + release.cover;

  let releaseTitle: HTMLHeadingElement = document.getElementById(
    "releaseTitle"
  ) as HTMLHeadingElement;
  releaseTitle.innerHTML = release.title;

  let releaseArtist: HTMLParagraphElement = document.getElementById(
    "releaseArtist"
  ) as HTMLParagraphElement;
  releaseArtist.innerHTML = release.artist;

  let tracklist: HTMLOListElement = document.getElementById(
    "tracklist"
  ) as HTMLOListElement;
  for (let track of release.tracklist) {
    let row = document.createElement("li");
    row.innerHTML = track.length + " " + track.title;
    tracklist.appendChild(row);
  }
  let artist: HTMLLIElement = document.getElementById(
    "artist"
  ) as HTMLLIElement;
  artist.innerHTML = release.artist;

  let title: HTMLLIElement = document.getElementById("title") as HTMLLIElement;
  title.innerHTML = release.title;

  let year: HTMLLIElement = document.getElementById("year") as HTMLLIElement;
  year.innerHTML = release.year.toString();

  let type: HTMLLIElement = document.getElementById("type") as HTMLLIElement;
  type.innerHTML = release.type;

  let genre: HTMLLIElement = document.getElementById("genre") as HTMLLIElement;
  genre.innerHTML =
    release.category.charAt(0).toUpperCase() + release.category.slice(1);

  let listlength: HTMLLIElement = document.getElementById(
    "listlength"
  ) as HTMLLIElement;
  listlength.innerHTML = release.tracklist.length.toString();

  let length: HTMLLIElement = document.getElementById(
    "length"
  ) as HTMLLIElement;
  length.innerHTML = release.length;

  let price: HTMLParagraphElement = document.getElementById(
    "price"
  ) as HTMLParagraphElement;
  price.innerHTML = release.price.toString() + "kr";
}

function createCartHtml() {
  for (let i = 0; i < cart.items.length; i++) {
    let cartitem = cart.items[i];

    let div = document.createElement("div");
    div.className = "modal-div";

    let img = document.createElement("img");
    img.className = "img";
    img.src = "../" + cartitem.item.cover;

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
function selectRelease(inputID: string): Release {
  for (let release of albums) {
    if (release.id == inputID) {
      return release;
    }
  }
}

function urlGet(param: string): string {
  return new URLSearchParams(window.location.search).get(param);
}
