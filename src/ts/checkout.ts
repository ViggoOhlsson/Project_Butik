import { albums } from "./data/albums";
import { Cart } from "./models/Cart";
import { CartItem } from "./models/CartItem";
import { Release } from "./models/release";
let cart = new Cart();

window.onload = function () {
  init();
};
function init() {
  sortCategory();
  shows_form(1);
  document.getElementById("firstNext").addEventListener("click", () => {
    shows_form(2);
  });
  document.getElementById("firstPrev").addEventListener("click", () => {
    shows_form(1);
  });
  document
    .getElementById("secondNext")
    .addEventListener("click", infoFormFunction);
  document.getElementById("lastPrev").addEventListener("click", () => {
    shows_form(2);
  });
  document.getElementById("submit").addEventListener("click", payFormFunction);
}

function infoValidate() {
  let firstname = document.forms["checkForm"]["fnamn"];
  let lastname = document.forms["checkForm"]["enamn"];
  let address = document.forms["checkForm"]["adress"];
  let postNb = document.forms["checkForm"]["postnr"];
  let city = document.forms["checkForm"]["stad"];
  let epost = document.forms["checkForm"]["epost"];
  let phone = document.forms["checkForm"]["mobil"];

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

function payValidate() {
  // Finds the input from the form.
  let cardName = document.forms["checkForm"]["kortnamn"];
  let cardNb = document.forms["checkForm"]["kortnummer"];
  let expDate = document.forms["checkForm"]["utgångsdatum"];
  let cvc = document.forms["checkForm"]["cvc"];

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

function infoFormFunction() {
  if (infoValidate()) {
    shows_form(3);
  }
}

function payFormFunction() {
  if (payValidate()) {
    window.location.href = "http://localhost:1234/html/thankyou.html";
  }
}

function shows_form(n) {
  let i = 1,
    p = document.getElementById("form_part" + 1);
  while (p !== null) {
    if (i === n) {
      p.style.display = "";
    } else {
      p.style.display = "none";
    }
    i++;
    p = document.getElementById("form_part" + i);
  }
}

function sortCategory() {
  //Hämta varukorgen från local storage
  //let cartItems = JSON.parse(localStorage.getItem("cart"));

  //Slumpa en random position från varukorgslistan
  let randomCartItem: number =
    Math.floor(Math.random() * cart.items.length) + 0;

  //Lagra objektets kategori i en variabel
  let cat: string = cart.items[randomCartItem].item.category;

  //Filtrerar alla album och plockar ut kategorin från variabeln cat
  let albumsInCategory: Release[] = albums.filter(
    (album) => album.category === cat
  );
  let wrapper: HTMLDivElement = document.getElementById(
    "random-container"
  ) as HTMLDivElement;
  wrapper.innerHTML = "";

  for (let i = 0; i < albumsInCategory.length; i++) {
    //Plockar ut ett slumpmässigt tal från listan som loopas
    let randomPosition: number =
      Math.floor(Math.random() * albumsInCategory.length) + 0;

    //Skapar variabel baserat på den angivna positionen
    let randomRelease = albumsInCategory[randomPosition];

    let releaseContainer = document.createElement("div");
    releaseContainer.className = "release-container";

    let imgContainer: HTMLDivElement = document.createElement("div");
    imgContainer.className = "img-container";

    let img: HTMLImageElement = document.createElement("img");
    img.className = "random-img";
    img.src = "../" + randomRelease.cover;
    imgContainer.appendChild(img);

    let title: HTMLSpanElement = document.createElement("span");
    title.innerHTML = randomRelease.title;

    let artist: HTMLSpanElement = document.createElement("span");
    artist.innerHTML = randomRelease.artist;

    let button: HTMLSpanElement = document.createElement("span");
    button.className = "btn";
    button.innerHTML = "Lägg till";
    button.addEventListener("click", () => {
      cart.addToCart(albumsInCategory[i]);
      init();
    });

    releaseContainer.appendChild(imgContainer);
    releaseContainer.appendChild(title);
    releaseContainer.appendChild(artist);
    releaseContainer.appendChild(button);

    wrapper.appendChild(releaseContainer);
    //Säkerställer att inte samma objekt kan köras två gånger
    albumsInCategory.splice(randomPosition, 1);

    //om if är lika med 1, avsluta loopen
    if (i == 2) {
      return;
    }
  }
}
