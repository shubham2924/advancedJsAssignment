import fetch from "node-fetch";
async function fetchData() {
  try {
    const response = await fetch("https://api.nobelprize.org/v1/prize.json");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    let output = [];
    const deta = data.prizes;
    deta.map((cat) => {
      if (cat.category == "chemistry") {
        deta.map((val) => {
          output.push(val.year);
        });
      }
    });
    let uniquechemyears = [...new Set(output)];

    let finalop = [];
    let c = 0;
    uniquechemyears.map((name) => {
      deta.map((move) => {
        if (
          move.year.includes(name) &&
          move.year <= 2019 &&
          move.year >= 2000 &&
          move.category === "chemistry"
        ) {
          move.laureates.map((dete) => {
            c++;
            finalop.push(dete.firstname);
          });
        }
      });
    });
    console.log(finalop);
    console.log(c);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchData();
