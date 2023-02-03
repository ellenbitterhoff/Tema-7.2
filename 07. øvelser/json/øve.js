"use strict";
const fil = "øve.json";

async function hentData(fil) {
  const resultat = await fetch(fil);
  const json = await resultat.json();
  vis(json);
}

function vis(json) {
  console.log(json);
  const beholder = document.querySelector("main");
  const skabelon = document.querySelector("template");
  json.forEach((kunstner) => {
    const klon = skabelon.cloneNode(true).content;
    klon.querySelector("h1").textContent = kunstner.navn;
    klon.querySelector("h2").textContent = kunstner.alder;
    klon.querySelector("h3").textContent = kunstner.land;
    klon.querySelector("p").textContent = kunstner.genre;
    beholder.appendChild(klon);
  });
}
hentData(fil);
