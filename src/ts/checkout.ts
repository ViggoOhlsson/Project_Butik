window.onload = function () {
  document.getElementById("addItem").addEventListener("click", addValue);
  document.getElementById("removeItem").addEventListener("click", remVal);
  document.getElementById("submit").addEventListener("click", validate);
};

//let submit = document.getElementById("submit");
function validate(e) {
  // Prevents the default validation.
  e.preventDefault();

  let firstname = document.getElementById("fnamn");
  let valid = true;

  if (!firstname.value) {
    let nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    firstname.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  return valid;
}

let p: number = 247;
let price: any = "$" + `<span>${p}</span>`;

function addValue() {
  let val = parseInt(document.getElementById("item-numb").value, 10);
  val = isNaN(val) ? 0 : val;
  val++;
  document.getElementById("item-numb").value = val;
  price = `Kostnad: <span>${p * val}</span> kr`;
  document.getElementById("price-cont").innerHTML = price;
}

function remVal() {
  let val = parseInt(document.getElementById("item-numb").value, 10);
  // Checks if val is a number;
  val = isNaN(val) ? 0 : val;
  val < 1 ? (val = 1) : "";
  val--;
  document.getElementById("item-numb").value = val;
  price = `Kostnad: <span>${p * val}</span> kr`;
  document.getElementById("price-cont").innerHTML = price;
}
