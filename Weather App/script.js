const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=> {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response =>  {
        console.log(response)
        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees 
        sunrise.innerHTML = response.sunrise 
        sunset.innerHTML = response.sunset 
    })
    .catch(err => console.error(err));
}
const getWeather1 = (city, cityID) => {
    // ...
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        document.getElementById(cityID + '_cloud_pct').textContent = response.cloud_pct;
        document.getElementById(cityID + '_feels_like').textContent = response.feels_like;
        document.getElementById(cityID + '_temp').textContent = response.temp;
        document.getElementById(cityID + '_humidity').textContent = response.humidity;
        document.getElementById(cityID + '_min_temp').textContent = response.min_temp;
        document.getElementById(cityID + '_max_temp').textContent = response.max_temp;
        document.getElementById(cityID + '_wind_speed').textContent = response.wind_speed;
        document.getElementById(cityID + '_wind_degrees').textContent = response.wind_degrees;
        document.getElementById(cityID + '_sunset').textContent = response.sunset;
        document.getElementById(cityID + '_sunrise').textContent = response.sunrise;
      })
      .catch(err => console.error(err));
  }
  
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

getWeather1("Visakhapatnam", "visakhapatnam");
getWeather1("Himachal Pradesh", "himachal_pradesh");
getWeather1("Lucknow", "lucknow");
getWeather1("Kolkata", "kolkata");
