async function covid_data(){
    var api = await fetch("https://data.covid19india.org/v4/min/data.min.json")
    var api_data = await api.json();
    var confirmed = api_data.TN.total.confirmed
    var deceased = api_data.TN.total.deceased
    var recovered =api_data.TN.total.recovered
    var tested = api_data.TN.total.tested
    var vaccinated1 = api_data.TN.total.vaccinated1
    var vaccinated2 = api_data.TN.total.vaccinated1
    var div = document.createElement("div")
    div.innerHTML= `<div class="card" style="width: 18rem;">
    <div class="card-header">
      Chennai-covid-data
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Confirmed: ${confirmed}</li>
      <li class="list-group-item">Deceased: ${deceased}</li>
      <li class="list-group-item">Recovered: ${recovered}</li>
      <li class="list-group-item">Tested: ${tested}</li>
      <li class="list-group-item">Vaccinated1: ${vaccinated1}</li>
      <li class="list-group-item">Vaccinated2: ${vaccinated2}</li>
    </ul>
  </div>`
  document.body.append(div)
}

covid_data();