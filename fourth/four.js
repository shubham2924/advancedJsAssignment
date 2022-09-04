// import fetch from "node-fetch";
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
      total = 0,
      airline="",
      airportName="";
      let arrr=[]
    data.map((fdata) => {
      canData = fdata.Statistics.Flights.Cancelled;
      delayData = fdata.Statistics.Flights.Delayed;
      diverted = fdata.Statistics.Flights.Diverted;
      onTime = fdata.Statistics.Flights["On Time"];
      total = fdata.Statistics.Flights.Total;
      airline = fdata.Airport.Code;
      airportName=fdata.Airport.Name;
      if (canData + delayData + diverted + onTime == total){
        let resobj={
            resultval:"true",
            airline: airline,
            name: airportName
        }
        arrr.push(resobj)
      };
    });
    console.log(arrr)

    //This is master data(i.e summation of all airport flights data)
    // console.log(canData) = 941364
    // console.log(delayData) = 10588018
    // console.log(diverted) = 122899
    // console.log(onTime) = 40793487
    // console.log(total) = 52445768
    
    var html = "<table border='1|1'>";
    for (var i = 0; i < arrr.length; i++) {
        html+="<tr>";
        html+="<td>"+arrr[i].airline+"</td>";
        html+="<td>"+arrr[i].resultval+"</td>";
        html+="<td>"+arrr[i].name+"</td>";
        
        html+="</tr>";

    }
    html+="</table>";
document.getElementById("box").innerHTML = html;


  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchData();
