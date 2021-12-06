import { albums } from "./data/albums";
import { Release } from "./models/release";

window.onload = () => {
    console.log(albums);
    printReleaseCells("catRock", "Rock");
}

function printReleaseCells(targetId:string, category:string) {
    let targetGrid:HTMLElement = document.getElementById(targetId) as HTMLElement;
    // for (let release of albums) {
    for (let i = 0; i < 4; i++) {
        if (albums[i].category == category) {
            let cellWrapper = document.createElement("div");
            cellWrapper.className = "cell";
            cellWrapper.addEventListener("click", () => {
                window.location.href = "html/details.html?release=" + albums[i].id;
            });

            let cellCover = document.createElement("div");
            cellCover.className = "cell-cover";
            
            let coverImg = document.createElement("img");
            coverImg.src = albums[i].cover;
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
            cellTitle.innerHTML = albums[i].title;
            cellInfoLeft.appendChild(cellTitle);
            let cellArtist = document.createElement("span");
            cellArtist.className = "cell-artist";
            cellArtist.innerHTML = albums[i].artist;
            cellInfoLeft.appendChild(cellArtist);
            cellInfoContainer.appendChild(cellInfoLeft);

            let cellInfoRight = document.createElement("div");
            cellInfoRight.className = "cell-info-right";

            let cellType = document.createElement("span");
            cellType.className = "cell-type " + albums[i].type;
            cellType.innerHTML = albums[i].type;
            cellInfoRight.appendChild(cellType);
            let cellPrice = document.createElement("span");
            cellPrice.className = "cell-price";
            cellPrice.innerHTML = albums[i].price + "kr";
            cellInfoRight.appendChild(cellPrice);
            cellInfoContainer.appendChild(cellInfoRight);
            cellWrapper.appendChild(cellInfoContainer);
            targetGrid.appendChild(cellWrapper);
        }
    }
}