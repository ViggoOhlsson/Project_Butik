import { identity } from "cypress/types/lodash";
import { albums } from "./data/albums";
import { Cart } from "./models/Cart";
import { CartItem } from "./models/CartItem";
import { Release } from "./models/release";

let cart = new Cart();

window.onload = function () {
  displayCart();
  displayRec();
  let toCheckoutButton = document.getElementById(
    "checkoutButton"
  ) as HTMLButtonElement;
  toCheckoutButton.addEventListener("click", toggleCheckout);
  let backButton = document.getElementById("backButton") as HTMLButtonElement;
  backButton.addEventListener("click", toggleCheckout);
  init();
};

function toggleCheckout() {
  let main = document.getElementById("main") as HTMLDivElement;
  let payment = document.getElementById("payment") as HTMLDivElement;
  if (main.style.display == "block") {
    main.style.display = "none";
    payment.style.display = "block";
  } else {
    main.style.display = "block";
    payment.style.display = "none";
  }
}

function displayRec() {
  let recWrapper = document.getElementById("recWrapper") as HTMLDivElement;
  let seedAlbum: Release =
    cart.items[Math.floor(Math.random() * cart.items.length)].item;
  let rec = selectRelease(seedAlbum);
  console.log(seedAlbum);
  console.log(rec);
  let recTitle = document.getElementById("recTitle") as HTMLSpanElement;
  recTitle.innerHTML =
    "Since you enjoy <span class='gold'>" +
    seedAlbum.artist +
    "</span>'s <span class='gold'>" +
    seedAlbum.title +
    "</span> we recommend to you...";

  let recImg = document.getElementById("recImg") as HTMLImageElement;
  recImg.src = "../" + rec.cover;
  let recName = document.getElementById("recName") as HTMLSpanElement;
  recName.innerHTML = rec.title;
  let recArtist = document.getElementById("recArtist") as HTMLSpanElement;
  recArtist.innerHTML = rec.artist;
  recWrapper.addEventListener("click", () => {
    cart.addToCart(rec);
    displayCart();
  });
}

function selectRelease(seedAlbum: Release): Release {
  let releases: Release[] = [];
  for (let release of albums) {
    if (release.category == seedAlbum.category && release != seedAlbum) {
      releases.push(release);
    }
  }
  return releases[Math.floor(Math.random() * releases.length)];
}

function displayCart() {
  if (cart.items != []) {
    let cartList = document.getElementById("cartList") as HTMLDivElement;
    let cost = document.getElementById("cartCost") as HTMLSpanElement;
    cost.innerHTML = cart.calculateCost().toString() + "kr";
    cartList.innerHTML = null;
    for (let i = 0; i < cart.items.length; i++) {
      console.log(i);
      let cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      let itemThumb = document.createElement("div");
      itemThumb.className = "item-thumb";
      let img = document.createElement("img");
      img.src = "../" + cart.items[i].item.cover;
      itemThumb.appendChild(img);
      cartItem.appendChild(itemThumb);

      let itemText = document.createElement("div");
      itemText.className = "item-text";
      let itemTitle = document.createElement("span");
      itemTitle.innerHTML = cart.items[i].item.title;
      itemTitle.className = "item-title";
      itemText.appendChild(itemTitle);
      let itemArtist = document.createElement("span");
      itemArtist.className = "item-artist";
      itemArtist.innerHTML = cart.items[i].item.artist;
      itemText.appendChild(itemArtist);
      cartItem.appendChild(itemText);

      let itemAmount = document.createElement("span");
      console.log(cart.items[i].amount.toString());
      itemAmount.innerHTML = cart.items[i].amount.toString();
      itemAmount.className = "item-amount";
      cartItem.appendChild(itemAmount);

      let itemCost = document.createElement("span");
      itemCost.className = "item-cost";
      itemCost.innerHTML =
        (cart.items[i].item.price * cart.items[i].amount).toString() + "kr";
      cartItem.appendChild(itemCost);
      cartList.appendChild(cartItem);
    }
  }
}
function init() {
  sortCategory();
  shows_form_part(1);
  //document.getElementById("addItem").addEventListener("click", addValue);
  //document.getElementById("removeItem").addEventListener("click", remVal);
  //  document.getElementById("submit").addEventListener("click", ValidationForm);
  document.getElementById("firstNext").addEventListener("click", () => {
    shows_form_part(2);
  });
  document.getElementById("firstPrev").addEventListener("click", () => {
    shows_form_part(1);
  });
  document.getElementById("lastNext").addEventListener("click", testx);
  document.getElementById("lastPrev").addEventListener("click", () => {
    shows_form_part(2);
  });
  document.getElementById("submit").addEventListener("click", testx2);
}

function validate1() {
  let firstname = document.forms["checkForm"]["fnamn"];
  let lastname = document.forms["checkForm"]["enamn"];
  let address = document.forms["checkForm"]["adress"];
  let postNb = document.forms["checkForm"]["postnr"];
  let city = document.forms["checkForm"]["stad"];
  let epost = document.forms["checkForm"]["epost"];
  let phone = document.forms["checkForm"]["mobil"];

  // If input empty do alert and focus on it.
  if (firstname.value == "") {
    alert("Enter a lastname.");
    firstname.focus();
    return false;
  }

  if (lastname.value == "") {
    alert("Enter a lastname.");
    lastname.focus();
    return false;
  }

  if (address.value == "") {
    alert("Enter an address.");
    address.focus();
    return false;
  }

  if (postNb.value == "") {
    alert("Enter a postal number");
    postNb.focus();
    return false;
  }

  if (city.value == "") {
    alert("Enter a city.");
    city.focus();
    return false;
  }

  if (epost.value == "") {
    alert("Email must be filled out.");
    epost.focus();
    return false;
  }

  if (phone.value == "") {
    alert("Enter a phone number.");
    phone.focus();
    return false;
  }
  return true;
}

function validate2() {
  // Finds the input from the form.
  let cardName = document.forms["checkForm"]["kortnamn"];
  let cardNb = document.forms["checkForm"]["kortnummer"];
  let expDate = document.forms["checkForm"]["utgångsdatum"];
  let cvc = document.forms["checkForm"]["cvc"];

  if (cardName.value == "") {
    alert("Enter a card name.");
    cardName.focus();
    return false;
  }

  if (cardNb.value == "") {
    alert("Enter a card number.");
    cardNb.focus();
    return false;
  }

  if (expDate.value == "") {
    alert("Expiry date must be filled out.");
    expDate.focus();
    return false;
  }

  if (cvc.value == "") {
    alert("CVC must be filled out.");
    cvc.focus();
    return false;
  }

  return true;
}

function testx() {
  if (validate1()) {
    shows_form_part(3);
  }
}

function testx2() {
  if (validate2()) {
    window.location.href = "http://localhost:1234/html/thankyou.html";
  }
}

function shows_form_part(n) {
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

// Quantity count.
let pn: number = 247;
// let t: number = Release[i].price;
let price: string = "$" + `<span>${pn}</span>`;

// function addValue() {
//   // Converts to decimal number, 10 = Decimal number.
//   let val = parseInt(document.getElementById("item-numb").value, 10);
//   // Checks if input value is a number, if it is use 0.
//   //Conditional operator =  condition ? exprIfTrue : exprIfFalse
//   val = isNaN(val) ? 0 : val;
//   val++;
//   document.getElementById("item-numb").value = val;
//   price = `Kostnad: <span>${pn * val}</span> kr`;
//   document.getElementById("price-cont").innerHTML = price;
// }

// function remVal() {
//   let val = parseInt(document.getElementById("item-numb").value, 10);
//   // Checks if val is a number;
//   val = isNaN(val) ? 0 : val;
//   val < 1 ? (val = 1) : "";
//   val--;
//   document.getElementById("item-numb").value = val;
//   price = `Kostnad: <span>${pn * val}</span> kr`;
//   document.getElementById("price-cont").innerHTML = price;
// }

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
    button.innerHTML = "Add";
    button.setAttribute("data-value", randomRelease.id);

    button.addEventListener("click", () => {
      let idx = (event.target as HTMLTextAreaElement).getAttribute(
        "data-value"
      );
      let itemObject = albums.find((x) => {
        return x.id === idx;
      });

      cart.addToCart(itemObject);
      displayCart();
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
