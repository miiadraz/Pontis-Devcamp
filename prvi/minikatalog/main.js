//import
import { katalog } from "./catalog.js";

//unkkcija vraća dostupne proivode (filter)
const dohvatiDostupne = (proizvodi) => {
  return proizvodi.filter((proizvod) => proizvod.dostupnost === true);
};

// funkcije vraća ukupnu vrijendost zaliha (reduce)
const ukupnaVrijednostZaliha = (proizvodi) => {
  return proizvodi.reduce((ukupno, proizvod) => ukupno + proizvod.cijena, 0);
};

// funkcija koja svakom proizvodu dodaje cijenu s PDVom, bez mijenjanja orginala
const dodajPDF = (proizvodi) => {
  return proizvodi.map((proizvod) => {
    return { ...proizvod, cijenaS_PDV: proizvod.cijena * 1.25 };
  });
};

//dohvaćanje s javnog API-ja i ispis prvih pet naslova
const url = "https://jsonplaceholder.typicode.com/todos";

const main = async () => {
  try {
    const response = await fetch(url);
    const todos = await response.json();

    todos.slice(0, 5).forEach((element) => console.log(element.title));
  } catch (error) {
    console.error("Greška prilikom dohvata podataka:", error);
  }
};

console.log(dohvatiDostupne(katalog));
console.log(ukupnaVrijednostZaliha(katalog));
console.log(dodajPDF(katalog));
main();
