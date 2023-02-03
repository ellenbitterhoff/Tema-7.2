const minPlayliste = [
  "Two of Us",
  "Dig a Pony",
  "Across the universe",
  "I Me Mine",
  "Dig it",
  "Let it be",
  "Maggie Mae",
  "Ive Got a Feeling",
  "One After 909",
  "The Long and Winding Road",
  "For You Blue",
  "Get Back",
];

minPlayliste.forEach(viEnAfGangen);

function viEnAfGangen(enSang) {
  console.log(enSang + " er min yndlings");
  document.querySelector("main").innerHTML += `<p>${enSang}</p>`;
}
