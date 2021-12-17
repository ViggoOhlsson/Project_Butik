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
