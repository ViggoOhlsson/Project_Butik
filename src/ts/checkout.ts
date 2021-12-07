window.onload = function () {
  document.getElementById("addItem").addEventListener("click", addValue);
  document.getElementById("removeItem").addEventListener("click", remVal);
  document.getElementById("submit").addEventListener("click", ValidationForm);
};

function ValidationForm() {
  // Finds the input from the form.
  let firstname = document.forms["checkForm"]["fnamn"];
  let lastname = document.forms["checkForm"]["enamn"];
  let address = document.forms["checkForm"]["adress"];
  let postNb = document.forms["checkForm"]["postnr"];
  let city = document.forms["checkForm"]["stad"];
  let epost = document.forms["checkForm"]["epost"];
  let phone = document.forms["checkForm"]["mobil"];
  let cardName = document.forms["checkForm"]["kortnamn"];
  let cardNb = document.forms["checkForm"]["kortnummer"];
  let expDate = document.forms["checkForm"]["utgångsdatum"];
  let cvc = document.forms["checkForm"]["cvc"];

  // If input empty do alert and focus on it.
  if (firstname.value == "") {
    alert("Skriv in ett förnamn.");
    firstname.focus();
    return false;
  }

  if (lastname.value == "") {
    alert("Skriv in ett efternamn.");
    lastname.focus();
    return false;
  }

  if (address.value == "") {
    alert("Skriv in en adress.");
    address.focus();
    return false;
  }

  if (postNb.value == "") {
    alert("Skriv in ett postnummer");
    postNb.focus();
    return false;
  }

  if (city.value == "") {
    alert("Skriv in en stad.");
    city.focus();
    return false;
  }

  if (epost.value == "") {
    alert("Skriv in en epost.");
    epost.focus();
    return false;
  }

  if (phone.value == "") {
    alert("Skriv in ett telefonnummer.");
    phone.focus();
    return false;
  }

  if (cardName.value == "") {
    alert("Skriv in ett kortnamn.");
    cardName.focus();
    return false;
  }

  if (cardNb.value == "") {
    alert("Skriv in ett kortnummer.");
    cardNb.focus();
    return false;
  }

  if (expDate.value == "") {
    alert("Skriv in utgångsdatum.");
    expDate.focus();
    return false;
  }

  if (cvc.value == "") {
    alert("Skriv in cvc koden.");
    cvc.focus();
    return false;
  }

  return true;
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
