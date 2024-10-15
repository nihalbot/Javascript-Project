const apiKey = "5d9ba8a263827e8b2eeea7b17e703bbe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const  searchBox = document.querySelector(".input_city");
const searchBtn = document.querySelector("button");
const weatherIcon = document.querySelector(".weather_icon");

async function chhekWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();



    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather-info").style.display = "flex";
}
 searchBtn.addEventListener('click', ()=>{
   chhekWeather(searchBox.value);
 })

 searchBox.addEventListener("keydown", function (event) {
   if (event.key === "Enter") {
     chhekWeather(searchBox.value);
   }
 });
