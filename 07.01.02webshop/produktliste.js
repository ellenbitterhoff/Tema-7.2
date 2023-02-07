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
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
  console.log(template);
  const copy = template.cloneNode(true);
  copy.querySelector("h3").textContent = produkt.productdisplayname;
  copy.querySelector(".subtle").textContent = produkt.category;
  copy.querySelector(".brand").textContent = produkt.brand;
  copy.querySelector(".img").src = imagePath;
  copy.querySelector(".price span").textContent = produkt.price;
  copy.querySelector(".percent span").textContent = produkt.discount;

  copy.querySelector("a").href = "products.html?id=" + produkt.id;

  if (produkt.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (produkt.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".price").style.textDecoration = "line-through";
    const discountPrice =
      produkt.price - produkt.price * (produkt.discount / 100);
    copy.querySelector(".newprice span").textContent = discountPrice.toFixed(2);
  }
  document.querySelector(".grid_1").appendChild(copy);
}
//
hentData();
