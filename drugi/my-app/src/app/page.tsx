import Kartica from "@/components/kartica";
import Counter from "@/components/counter";

const osobe = [
  {
    ime: "Mia",
    uloga: "Frontend Developer",
    opis: "Strastvena sam frontend developerica s iskustvom u izradi responzivnih web aplikacija. Uvijek sam spremna učiti nove tehnologije i raditi na izazovnim projektima.",
  },
  {
    ime: "Ivan",
    uloga: "Backend Developer",
    opis: "Iskusan backend developer s fokusom na izgradnju skalabilnih i sigurnih web aplikacija. Strastven sam u optimizaciji performansi i implementaciji najboljih praksi.",
  },
  {
    ime: "Nina",
    uloga: "UI/UX Designer",
    opis: "Kreativna UI/UX dizajnerica s iskustvom u izradi intuitivnih i vizualno privlačnih korisničkih sučelja. Uvijek težim stvaranju najboljeg korisničkog iskustva.",
    istaknuto: true,
  },
];

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {osobe.map((osoba) => (
        <Kartica
          key={osoba.ime}
          ime={osoba.ime}
          uloga={osoba.uloga}
          opis={osoba.opis}
          istaknuto={osoba.istaknuto}
        />
      ))}
      <Counter />
    </main>
  );
}
