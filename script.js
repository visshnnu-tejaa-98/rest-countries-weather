let container = document.getElementById("row")
async function getData(){
    try{
        let restContList = await fetch("https://restcountries.eu/rest/v2/all")
        let restData = await restContList.json()
        let lat,long;
        for(let i=0;i<restData.length;i++){
            
            if(true){
            lat = restData[i].latlng[0]
            long = restData[i].latlng[1]
            let weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7e01312693145aa48718efca21b9550f`)
            let weatherResponse = await weatherAPI.json()
            restData[33].latlng = [10,20]
            let div = document.createElement("div")
            let tempCelsius = weatherResponse.main.temp - 273.15
            div.innerHTML = `<div class="card col col-lg-4 col-sm-12 border" style="max-width: 18rem;">
                <div class="card-head">
                    <p class="country-name">${restData[i].name}</p>
                </div>
                <div class="card-body body-bg">
                    <img src="${restData[i].flag}" class="card-img-top" alt="...">
                    <ul>
                        <li>Capital : ${restData[i].capital}</li>
                        <li>Region : ${restData[i].region}</li>
                        <li>Country Code : ${restData[i].alpha2Code, restData[i].alpha3Code}</li>
                        <li>LatLang : ${restData[i].latlng[0]}, ${restData[i].latlng[1]}</li>
                        <li class="hidden" id="hidden">Temp : ${tempCelsius.toFixed(2)}<sup> o</sup> C</li>
                    </ul>
                    <button type="button" class="btn btn-outline-light" id= "button" name ="button">Click for Weather</button>
                </div>
            </div>`
            container.append(div)
            let button = document.getElementsByName("button")
            button[i].addEventListener("click",function(){
                button[i].previousElementSibling.lastElementChild.classList.remove("hidden")
            })
            }
        }
        return weatherResponse;
    }catch(err){
        console.log(err)
    }
    
}

getData().then(data=>{
    console.log(data)
})
.catch(err=>console.log(err))

