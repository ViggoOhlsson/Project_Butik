import { albums } from "./data/albums";
import { categories } from "./data/categories";
import { Cart } from "./models/cart";
import { CartItem } from "./models/CartItem";
import { Release } from "./models/release";

let cart = new Cart();

window.onload = () => {
  addCategoriesToNav();
  addCategoryAnchors();
  printReleaseCells("catChristmas", "christmas", 4);
  printReleaseCells("catRock", "rock", 4);
  printReleaseCells("catJazz", "jazz", 4);
  displayDropdownRows();
};

function displayDropdownRows() {
  console.log("dropdown loaded");
  let dropdown = document.getElementById("dropDown");
  for (let category of categories) {
    let row = document.createElement("span");
    row.className = "dropdown-item";
    row.innerHTML = category.name;
    row.addEventListener("click", () => {
        window.location.href = "html/category.html?c=" + category.id;
    });
    dropdown.appendChild(row);
  }
}

function printReleaseCells(targetId: string, category: string, amount: number) {
  console.log("printReleaseCelss körs");
  let targetGrid: HTMLElement = document.getElementById(
    targetId
  ) as HTMLElement;
  // for (let release of albums) {
  let loops: number = 0;
  for (let album of albums) {
    if (loops >= amount) {
      break;
    }
    if (album.category == category) {
      let cellWrapper = document.createElement("div");
      cellWrapper.className = "cell";
      cellWrapper.addEventListener("click", () => {
        window.location.href = "html/details.html?r=" + album.id;
      });

      let cellCover = document.createElement("div");
      cellCover.className = "cell-cover";

      let coverImg = document.createElement("img");
      coverImg.src = album.cover;
      cellCover.appendChild(coverImg);
      let icon = document.createElement("i");
      icon.className = "fa fa-cart-plus";
      cellCover.appendChild(icon);
      let shadowBox = document.createElement("div");
      shadowBox.className = "img-shadow-box";
      cellCover.appendChild(shadowBox);
      cellWrapper.appendChild(cellCover);

      let cellInfoContainer = document.createElement("div");
      cellInfoContainer.className = "cell-info-container";

      let cellInfoLeft = document.createElement("div");
      cellInfoLeft.className = "cell-info-left";

      let cellTitle = document.createElement("span");
      cellTitle.className = "cell-title";
      cellTitle.innerHTML = album.title;
      cellInfoLeft.appendChild(cellTitle);
      let cellArtist = document.createElement("span");
      cellArtist.className = "cell-artist";
      cellArtist.innerHTML = album.artist;
      cellInfoLeft.appendChild(cellArtist);
      cellInfoContainer.appendChild(cellInfoLeft);

      let cellInfoRight = document.createElement("div");
      cellInfoRight.className = "cell-info-right";

      let cellType = document.createElement("span");
      cellType.className = "cell-type " + album.type;
      cellType.innerHTML = album.type;
      cellInfoRight.appendChild(cellType);
      let cellPrice = document.createElement("span");
      cellPrice.className = "cell-price";
      cellPrice.innerHTML = album.price + "kr";
      cellInfoRight.appendChild(cellPrice);
      cellInfoContainer.appendChild(cellInfoRight);
      cellWrapper.appendChild(cellInfoContainer);
      targetGrid.appendChild(cellWrapper);
      loops++;
    }
  }
}
function addCategoryAnchors() {
  for (let category of categories) {
    let targetID = "more" + category.name;
    let target: HTMLSpanElement = document.getElementById(
      targetID
    ) as HTMLSpanElement;
    target.addEventListener("click", () => {
      window.location.href = "html/category.html?c=" + category.id;
    });
  }
}
function addCategoriesToNav() {
  let target: HTMLElement = document.getElementById("nav");
  for (let category of categories) {
    let a = document.createElement("a");
    a.href = "html/category.html?c=" + category.id;
    a.innerHTML = category.name;
    target.appendChild(a);
  }
}

let shoppingCart = document.getElementById("shopping-cart");
shoppingCart.addEventListener("click", () => {
  refreshCartHTML();
  displayCartModal();
});

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
