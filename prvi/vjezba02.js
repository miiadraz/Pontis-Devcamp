//dohvati listu zadatka s javnog API-ja
const url = "https://jsonplaceholder.typicode.com/todos";

const main = async () => {
  //dodaj try/catch i spisu razumljivu poruku greske
  try {
    const response = await fetch(url);
    const todos = await response.json();
    //console.log(todos);

    //zadrzi samo nedovrsene zadatke
    const nedovrseniZadaci = todos.filter(
      (element) => element.completed === false,
    );
    //console.log(nedovrseniZadaci);

    //ispisi prvih pet naslova, svaki u svom redu
    nedovrseniZadaci
      .slice(0, 5)
      .forEach((element) => console.log(element.title));
  } catch (error) {
    console.error("Greška prilikom dohvata podataka:", error);
  }
};

main();
