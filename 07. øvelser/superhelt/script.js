const minBil = {
  brand: "Mercedes",
  model: "AMG - G 63",
  motor: "benzin",
  passagerer: ["Lotte", "Sofie", "Katrine"],
};

const card = document.querySelector("#bilkort");

card.querySelector("h1").textContent = minBil.brand;
card.querySelector("h2").textContent = minBil.model;
card.querySelector("p").textContent = minBil.motor;
card.querySelector("div").textContent = minBil.passagerer;

const minBil2 = [
  {
    brand: "Mercedes",
    model: "AMG - G 63",
    motor: "benzin",
    passagerer: ["Lotte", "Sofie", "Katrine"],
  },
  {
    brand: "Mercedes",
    model: "AMG - G 63",
    motor: "benzin",
    passagerer: ["Lotte", "Sofie", "Katrine"],
  },
  {
    brand: "Mercedes",
    model: "AMG - G 63",
    motor: "benzin",
    passagerer: ["Lotte", "Sofie", "Katrine"],
  },
];
