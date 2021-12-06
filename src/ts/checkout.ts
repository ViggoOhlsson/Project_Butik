window.onload = function () {
  document.getElementById("my").addEventListener("click", time);
};

// For adding items
// https://stackoverflow.com/questions/47426929/javascript-adjust-price-when-changing-quantity

// Tack Sida:
// tack sida med set timmer()
// funktion som skickar tillbaka till förstasidan
// font-family: "Playball", cursive;
// Readerecting to home page;
function time() {
  let delay = 3000;
  setTimeout(function () {
    window.location.href = "/";
  }, delay);
}
