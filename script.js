async function covid_data(){
    var api = await fetch("https://data.covid19india.org/v4/min/data.min.json")
    var api_data = await api.json();
    var confirmed = api_data.TN.districts.Chennai.total.confirmed.toLocaleString();
    var deceased = api_data.TN.districts.Chennai.total.deceased.toLocaleString();
    var recovered =api_data.TN.districts.Chennai.total.recovered.toLocaleString();
    var tested = api_data.TN.districts.Chennai.total.tested.toLocaleString();
    var vaccinated1 = api_data.TN.districts.Chennai.total.vaccinated1.toLocaleString();
    var vaccinated2 = api_data.TN.districts.Chennai.total.vaccinated2.toLocaleString();
    var div = document.createElement("div")
    div.innerHTML= `<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header"><h5>Chennai-Covid-Data</h5></div>
    <div class="card-body">
      <p class="card-text">Confirmed: ${confirmed}.</p>
      <p class="card-text">Deceased: ${deceased}.</p>
      <p class="card-text">Recovered: ${recovered}.</p>
      <p class="card-text">Tested: ${tested}.</p>
      <p class="card-text">Vaccinated1: ${vaccinated1}.</p>
      <p class="card-text">Vaccinated2: ${vaccinated2}.</p>
    </div>
  </div>`
  document.body.append(div)
}

covid_data();

