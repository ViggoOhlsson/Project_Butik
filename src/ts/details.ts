import { divide } from "cypress/types/lodash";
import { albums } from "./data/albums";
import { Cart } from "./models/cart";
import { Release } from "./models/release";
import { CartItem } from "./models/CartItem";

let cart = new Cart();
cart.SetStorage();

window.onload = function () {

  // cart.items = [];
  // cart.items.push(new CartItem(albums[1], 1));
  let urlID = urlGet("r");
  console.log(urlID);
  displayReleaseInfo(selectRelease(urlID));
  document.title = selectRelease(urlID).artist + " | " + selectRelease(urlID).title;


  let shoppingCart = document.getElementById("shopping-cart");
  shoppingCart.addEventListener("click", () => {
    refreshCartHTML();
    displayCartModal();
  });



  let buyButton = document.getElementById("buyButton") as HTMLButtonElement;
  buyButton.addEventListener("click", () => {
    let release = selectRelease(urlID);
    if (cart.contains(release) == false) {
      console.log(cart.contains(release));
      cart.addToCart(release);
    }
    refreshCartHTML();
    
  });
  refreshCartHTML();
};


function displayCartModal() {
  let modal = document.getElementById("cartModal") as HTMLDivElement;
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

function refreshCartHTML():void {
  if (cart.items != []) {
    console.log("cart refresh running");
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

      let itemAmount = document.createElement("div");
      itemAmount.className = "item-amount";

      let itemAdd = document.createElement("i");
      itemAdd.className = "fa fa-plus add";
      itemAdd.addEventListener("click", () => {
        cart.increaseAmount(i);
        refreshCartHTML();
      })
      itemAmount.appendChild(itemAdd);

      let itemNumber = document.createElement("span");
      itemNumber.className = "amount";
      itemNumber.innerHTML = cart.items[i].amount.toString();
      itemAmount.appendChild(itemNumber);

      let itemRemove = document.createElement("i");
      itemRemove.className = "fa fa-minus remove";
      itemRemove.addEventListener("click", () => {
        if (cart.items[i].amount == 1) {
          cart.remove(i);
        } else {
          cart.decreaseAmount(i);
        }
        refreshCartHTML();
      });
      itemAmount.appendChild(itemRemove);

      let itemDelete = document.createElement("i");
      itemDelete.className = "fa fa-trash delete";
      itemDelete.addEventListener("click", () => {
        console.log("item at ", i, "deleted")
        cart.remove(i);
        refreshCartHTML();
      })
      itemAmount.appendChild(itemDelete);
      cartItem.appendChild(itemAmount);

      let itemCost = document.createElement("span");
      itemCost.className = "item-cost";
      itemCost.innerHTML = (cart.items[i].item.price * cart.items[i].amount).toString() + "kr";
      cartItem.appendChild(itemCost);
      cartList.appendChild(cartItem);
    }
  }
}

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
  let loops = 1;
  for (let track of release.tracklist) {
    let row = document.createElement("li");
    let trackTitle = document.createElement("span");

    trackTitle.innerHTML = loops + ". " + track.title;
    row.appendChild(trackTitle);
    let trackLength = document.createElement("span");
    trackLength.innerHTML = track.length;
    row.appendChild(trackLength);
    tracklist.appendChild(row);
    loops++;
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

// function createCartHtml() {
//   for (let i = 0; i < cart.items.length; i++) {
//     let cartitem = cart.items[i];

//     let div: HTMLDivElement = document.createElement("div");
//     div.className = "modal-div";

//     let img: HTMLImageElement = document.createElement("img");
//     img.className = "img";
//     img.src = "../" + cartitem.item.cover;

//     let p1: HTMLParagraphElement = document.createElement("p");
//     p1.className = "p1";
//     p1.innerHTML = cartitem.item.artist;

//     let p2: HTMLParagraphElement = document.createElement("p");
//     p2.className = "p2";
//     p2.innerHTML = cartitem.item.title;

//     let spanMinus: HTMLSpanElement = document.createElement("span");
//     spanMinus.innerHTML = "-";

//     let spanQuantity: HTMLSpanElement = document.createElement("span");
//     spanQuantity.innerHTML = "2";

//     let spanPlus: HTMLSpanElement = document.createElement("span");
//     spanPlus.innerHTML = "+";

//     let price: HTMLParagraphElement = document.createElement("p");
//     price.innerHTML = "0";

//     let trash = document.createElement("i");
//     trash.className = "fa fa-trash";

//     div.appendChild(img);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(spanMinus);
//     div.appendChild(spanQuantity);
//     div.appendChild(spanPlus);
//     div.appendChild(price);
//     div.appendChild(trash);

//     let modal: HTMLDivElement = document.getElementById(
//       "modal"
//     ) as HTMLDivElement;
//     modal.appendChild(div);
//   }
// }
function selectRelease(ID: string): Release {
  for (let release of albums) {
    if (release.id == ID) {
      console.log("selected release is:", release);
      return release;
    }
  }
}

function urlGet(param: string): string {
  return new URLSearchParams(window.location.search).get(param);
}
