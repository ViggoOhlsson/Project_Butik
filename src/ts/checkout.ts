window.onload = function () {
  document.getElementById("addItem").addEventListener("click", addValue);
  document.getElementById("removeItem").addEventListener("click", remVal);
  document.getElementById("submit").addEventListener("click", validate);
};

//let submit = document.getElementById("submit");
function validate(e) {
  // Prevents the default validation.
  e.preventDefault();

  // Finds the input element.
  let firstname: HTMLInputElement = document.getElementById(
    "fnamn"
  ) as HTMLInputElement;
  let valid = true;

  // If input empty find <span> and change class.
  if (!firstname.value) {
    let nameError: HTMLSpanElement = document.getElementById(
      "nameError"
    ) as HTMLSpanElement;
    nameError.classList.add("visible");
    firstname.classList.add("invalid");
  }
  // If input is okay.
  return valid;
}

// Quantity count.
let p: number = 247;
let price: string = "$" + `<span>${p}</span>`;

function addValue() {
  // Converts to decimal number, 10 = Decimal number.
  let val = parseInt(document.getElementById("item-numb").value, 10);
  // Checks if input value is a number, if it is use 0.
  //Conditional operator =  condition ? exprIfTrue : exprIfFalse
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

function formCreation() {
  let info = document.createElement("div");
  info.id = "info-con";
}
