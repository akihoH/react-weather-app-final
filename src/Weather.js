import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo"
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
    city: response.data.name,
    date: new Date(response.data.dt * 1000)
    });
  }

  function search () {
    const apiKey = "cbbbf47964f1e326cc360a17986bc388";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
          <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
     </div>  
    );
  } else {
  search()
  return ("loading...");
  }
}