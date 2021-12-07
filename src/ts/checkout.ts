window.onload = function () {
  document.getElementById("addItem").addEventListener("click", addValue);
  document.getElementById("removeItem").addEventListener("click", remVal);
};

let p = "247";
let price = " Kostnad: $" + `<span>${p}</span>`;

function addValue() {
  let val = parseInt(document.getElementById("item-numb").value, 10);
  val = isNaN(val) ? 0 : val;
  val++;
  document.getElementById("item-numb").value = val;
  price = "$" + `<span>${p * val}</span>`;
  document.getElementById("price-cont").innerHTML = price;
}

function remVal() {
  let val = parseInt(document.getElementById("item-numb").value, 10);
  val = isNaN(val) ? 0 : val;
  val < 1 ? (val = 1) : "";
  val--;
  document.getElementById("item-numb").value = val;
  price = "$" + `<span>${p * val}</span>`;
  document.getElementById("price-cont").innerHTML = price;
}
