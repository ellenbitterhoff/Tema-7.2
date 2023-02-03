const mineVenner = ["Niels Ole", "Knus", "Henriette", "Jytte"];

mineVenner.forEach(viEnAfGangen);

console.log(mineVenner[2]);

function viEnAfGangen(enVen) {
  console.log(enVen + " er min ven");
  document.querySelector("main").innerHTML = <p>$(enVen)</p>;
}
