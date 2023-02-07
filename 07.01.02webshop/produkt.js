const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("#id").textContent = produkt.id;
  document.querySelector("#farve").textContent = produkt.basecolour;
  document.querySelector("#category").textContent = produkt.category;
  document.querySelector("#gender").textContent = produkt.gender;
  document.querySelector("#price").textContent = produkt.price;
  document.querySelector("#images").src = imagePath;
}
hentData();

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}
