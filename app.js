const output = document.querySelector('#output');
output.innerHTML = `Loading...`;
let html;

fetch('https://api.covid19api.com/summary')
  .then(res => res.json())
  .then(data => {
    console.log(data.Countries[73]);
    const {
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered
    } = data.Countries[76];

    html = `
    <p>
      😷 Total Confirmed Cases:<span class="stat"> ${TotalConfirmed}</span> <br />
      🆕 New Cases: <span class="stat">${NewConfirmed}</span> <br /><br />
    </p>
    
    <p>
      💀 Total Deaths: <span class="stat">${TotalDeaths}</span> <br />
      🆕 New Deaths:<span class="stat"> ${NewDeaths}</span> <br /><br />
    </p>

    <p>
      👨‍⚕️ Total Recovered: <span class="stat">${TotalRecovered}</span> <br />
      🆕 New Recovered:<span class="stat"> ${NewRecovered} </span>
    </p>

    `;

    output.innerHTML = html;
  });
