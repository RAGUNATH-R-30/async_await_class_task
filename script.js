async function covid_data(){
    var api = await fetch("https://data.covid19india.org/v4/min/data.min.json")
    var api_data = await api.json();
    var data_path = api_data.TN.districts.Chennai.total
    var div = document.createElement("div")
    div.innerHTML= `<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header"><h5>Chennai-Covid-Data</h5></div>
    <div class="card-body">
      <p class="card-text">Confirmed: ${data_path.confirmed.toLocaleString()}.</p>
      <p class="card-text">Deceased: ${data_path.deceased.toLocaleString()}.</p>
      <p class="card-text">Recovered: ${data_path.recovered.toLocaleString()}.</p>
      <p class="card-text">Tested: ${data_path.tested.toLocaleString()}.</p>
      <p class="card-text">Vaccinated1: ${data_path.vaccinated1.toLocaleString()}.</p>
      <p class="card-text">Vaccinated2: ${data_path.vaccinated2.toLocaleString()}.</p>
    </div>
  </div>`
  document.body.append(div)
}

covid_data();
