const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#search-btn")
const weatherImg = document.querySelector(".weather-img");
const Temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity")
const windSpeed = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body")


async function checkWeather(city){
    const api_key = "b18b983147663a63024aeb7a730e64e6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
         location_not_found.style.display = "flex";
         weather_body.style.display = "none";
         console.log("error");
         return;
     }

     console.log("run");
     location_not_found.style.display = "none";
     weather_body.style.display = "flex";


    Temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherImg.src = "/images/cloud.png";
            break;
        case 'Haze':
            weatherImg.src = "/images/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "/images/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "/images/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "/images/snow.png";
            break;

    }

    console.log(weather_data);
}
                                                                                                                           
    



searchBtn.addEventListener("click" , ()=>{
    checkWeather(inputBox.value)
});
 
                                                                                                                                                                                                                       