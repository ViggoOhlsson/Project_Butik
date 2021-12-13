window.onload = function () {
  form_part(1);
  document.getElementById("addItem").addEventListener("click", addValue);
  document.getElementById("removeItem").addEventListener("click", remVal);
  //  document.getElementById("submit").addEventListener("click", ValidationForm);
  document.getElementById("firstNext").addEventListener("click", () => {
    form_part(2);
  });
  document.getElementById("firstPrev").addEventListener("click", () => {
    form_part(1);
  });
  document.getElementById("secondNext").addEventListener("click", testx);
  document.getElementById("lastPrev").addEventListener("click", () => {
    form_part(2);
  });
  // document.getElementById("submit").addEventListener("click", testx2);
};

function validate1() {
  let firstname: HTMLFormElement = document.forms["checkForm"]["fnamn"];
  let lastname: HTMLFormElement = document.forms["checkForm"]["enamn"];
  let address: HTMLFormElement = document.forms["checkForm"]["adress"];
  let postNb: HTMLFormElement = document.forms["checkForm"]["postnr"];
  let city: HTMLFormElement = document.forms["checkForm"]["stad"];
  let epost: HTMLFormElement = document.forms["checkForm"]["epost"];
  let phone: HTMLFormElement = document.forms["checkForm"]["mobil"];

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
  return true;
}

function validate2() {
  // Finds the input from the form.
  let cardName: HTMLFormElement = document.forms["checkForm"]["kortnamn"];
  let cardNb: HTMLFormElement = document.forms["checkForm"]["kortnummer"];
  let expDate: HTMLFormElement = document.forms["checkForm"]["utgångsdatum"];
  let cvc: HTMLFormElement = document.forms["checkForm"]["cvc"];

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

function testx() {
  if (validate1()) {
    form_part(3);
  }
}

function testx2() {
  if (validate2) {
  }
}

function form_part(n) {
  let i = 1,
    p: HTMLFormElement = document.getElementById(
      "form_part" + 1
    ) as HTMLFormElement;
  while (p !== null) {
    if (i === n) {
      p.style.display = "";
    } else {
      p.style.display = "none";
    }
    i++;
    p = document.getElementById("form_part" + i) as HTMLFormElement;
  }
}

// Quantity count.
let pn: number = 247;
// let t: number = Release[i].price;
let price: string = "$" + `<span>${pn}</span>`;

function addValue() {
  // Converts to decimal number, 10 = Decimal number.
  let val = parseInt(document.getElementById("item-numb").value, 10);
  // Checks if input value is a number, if it is use 0.
  //Conditional operator =  condition ? exprIfTrue : exprIfFalse
  val = isNaN(val) ? 0 : val;
  val++;
  document.getElementById("item-numb").value = val;
  price = `Kostnad: <span>${pn * val}</span> kr`;
  document.getElementById("price-cont").innerHTML = price;
}

function remVal() {
  let val = parseInt(document.getElementById("item-numb").value, 10);
  // Checks if val is a number;
  val = isNaN(val) ? 0 : val;
  val < 1 ? (val = 1) : "";
  val--;
  document.getElementById("item-numb").value = val;
  price = `Kostnad: <span>${pn * val}</span> kr`;
  document.getElementById("price-cont").innerHTML = price;
}
