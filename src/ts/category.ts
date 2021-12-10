import { albums } from "./data/albums";
import { categories } from "./data/categories";

window.onload = () => {
    addCategoriesToNav();
    printReleaseCells("catGrid", urlGet("c"), 50);
    applyCategoryBanner(urlGet("c"));
}

function applyCategoryBanner(c:string) {
    let title:HTMLSpanElement = document.getElementById("title") as HTMLSpanElement;
    let hero:HTMLDivElement = document.getElementById("hero") as HTMLDivElement;

    let done = false;
    for (let category of categories) {
        if (category.id == c) {
            hero.style.backgroundImage = "url(" + category.image + ")";
            title.innerHTML = category.name;
            document.title = category.name + " | Homegrown Records";

            done = true;
        }
        if (!done) {
            title.innerHTML = "This category does not exist :(";
            hero.style.backgroundImage = "url(../assets/category-bgs/undefined.png)";
        }
    }
}

function printReleaseCells(targetId:string, category:string, amount:number) {
    let targetGrid:HTMLElement = document.getElementById(targetId) as HTMLElement;
    for (let album of albums) {
        console.log(albums);
        if (album.category == category) {
            let cellWrapper = document.createElement("div");
            cellWrapper.className = "cell";
            cellWrapper.addEventListener("click", () => {
                window.location.href = "../html/details.html?r=" + album.id;
            });

            let cellCover = document.createElement("div");
            cellCover.className = "cell-cover";
            
            let coverImg = document.createElement("img");
            coverImg.src = "../" + album.cover;
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
        }
    }
}

function urlGet(param:string):string {
    return new URLSearchParams(window.location.search).get(param);
}

export function addCategoriesToNav() {
    let target:HTMLElement = document.getElementById("nav");
    for (let category of categories) {
        let a = document.createElement("a");
        a.href = "category.html?c=" + category.id;
        a.innerHTML = category.name;
        target.appendChild(a);
    } 
}