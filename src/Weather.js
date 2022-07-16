import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo"
import WeatherForecast from "./WeatherForecast"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState (props.defaultCity)
  function handleResposne(response) {
    setWeatherData({
    ready:true,
    temperature: response.data.main.temp,
    minTemperature: response.data.main.temp_min,
    maxTemperature: response.data.main.temp_max,
    humidity: response.data.main.humidity,
    windSpeed: response.data.wind.speed,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    city: response.data.name,
    date: new Date(response.data.dt *1000)
    });
  }
  function search () {
    const apiKey = "6e59e8f1afc966e28727aa609b4dc84b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResposne);

  }



  function handleSubmit (event) {
    event.preventDefault();
   search()
  }

  function handleCityChange (event) {
    setCity(event.target.value)
  }


  if (weatherData.ready) {
    return (
    <div className="weather">
      <form className="search-engine" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
      <WeatherForecast city={weatherData.city}/>
     </div>
    );
  } else {
  search()
  return ("loading...");
  }
}
