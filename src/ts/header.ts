import { categories } from "./data/categories";
window.onload = () => {
    displayDropdownRows();
}
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