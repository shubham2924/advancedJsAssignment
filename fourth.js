import fetch from "node-fetch";
async function fetchData() {
  try {
    const response = await fetch(
      "https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    let canData = 0,
      delayData = 0,
      diverted = 0,
      onTime = 0,
      total = 0;
    data.map((fdata) => {
      canData = canData + fdata.Statistics.Flights.Cancelled;
      delayData = delayData + fdata.Statistics.Flights.Delayed;
      diverted = diverted + fdata.Statistics.Flights.Diverted;
      onTime = onTime + fdata.Statistics.Flights["On Time"];
      total = total + fdata.Statistics.Flights.Total;
    });
    // console.log(canData) = 941364
    // console.log(delayData) = 10588018
    // console.log(diverted) = 122899
    // console.log(onTime) = 40793487
    // console.log(total) = 52445768
    if (canData + delayData + diverted + onTime == total) console.log("true");
    else {
      console.log("false");
    }
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchData();
