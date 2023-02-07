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
    "https://kea-alt-del.dk/t7/api/products?limit=30 "
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
  copy.querySelector(".category").textContent = produkt.category;
  copy.querySelector(".price").textContent = produkt.price;
  copy.querySelector(".type").textContent = produkt.brandname;

  copy.querySelector("a").href = "products.html?id=" + produkt.id;
  copy.querySelector(
    ".img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;

  if (produkt.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (produkt.discount) {
    copy.querySelector("article").classList.add("onSale");
    const discountPrice =
      produkt.price - produkt.price * (produkt.discount / 100);
    copy.querySelector(".newprice").textContent = discountPrice;
  }
  document.querySelector(".grid_1").appendChild(copy);
}
//
hentData();
