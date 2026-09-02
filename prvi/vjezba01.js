//napravi polje s tri proizvoda
const proizvodi = [
  { naziv: "Laptop", cijena: 1900, dostupnost: true },
  { naziv: "Mobitel", cijena: 1200, dostupnost: true },
  { naziv: "Tablet", cijena: 800, dostupnost: false },
];

//ispiši naziv drugog proizvoda u konzolu
console.log(proizvodi[1].naziv);

//napiši funkciju koja iz proizvoda vraća tekst rečenice
const opisProizvoda = (proizvodi) => {
  return `Proizvod ${proizvodi.naziv} košta ${proizvodi.cijena} eura i je ${proizvodi.dostupnost ? "dostupan" : "nedostupan"}. `;
};
console.log(opisProizvoda(proizvodi[0]));

//dodaj četvri proizvod bez mijenjanja orginalnog proizvoda
const noviProizvod = { naziv: "Earbuds", cijena: 23, dostupnost: true };
const sviProizvodi = [...proizvodi, noviProizvod];
console.log(sviProizvodi);
