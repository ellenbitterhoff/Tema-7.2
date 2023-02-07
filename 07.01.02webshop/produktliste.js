var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

/*https://kea-alt-del.dk/t7/api/products/*/
async function hentData() {
  const response = await fetch(
    "https://kea-alt-del.dk/t7/api/products?brand=Nike?limit=10"
  );
  const data = await response.json();
  console.log(data);
  data.forEach(visProdukt);
}
hentData();

function visProdukt(produkt) {
  console.log(produkt);
  const template = document.querySelector("#smallProductTemplate").content;
  console.log(template);
  const copy = template.cloneNode(true);
  copy.querySelector("h3").textContent = produkt.productdisplayname;
  if (produkt.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (produkt.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  document.querySelector(".grid_1").appendChild(copy);
}
