import { divide } from "cypress/types/lodash";
import { albums } from "./data/albums";
import { Cart } from "./models/cart";
import { Release } from "./models/release";

let cart = new Cart();
cart.items;
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("r");
  let currentProduct: Release = null;

  for (let i = 0; i < albums.length; i++) {
    let targetAlbum = albums[i];

    if (albums[i].id === myParam) {
      currentProduct = albums[i];
      let imgAlbum = document.getElementById("album-img") as HTMLImageElement;
      imgAlbum.src = albums[i].cover;

      let pArtist = document.getElementById("artist-name");
      pArtist.innerHTML = albums[i].artist;

      let pAlbum = document.getElementById("album-name");
      pAlbum.innerHTML = albums[i].title;
    }
  }

  let buyButton = document.getElementById("buybutton");
  buyButton.addEventListener("click", () => {
    cart.addToCart(currentProduct);
  });

  console.log(myParam);
};

function removeItem() {}
