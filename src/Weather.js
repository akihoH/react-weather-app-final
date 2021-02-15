import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"; 

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
    date: "Tuesday 7:00",
    iconUrl: "http://openweathermap.org/img/wn/01d@2x.png"
    });
  }

  if (weatherData.ready) {
    return (
    <div className="weather">
      <form className="search-engine">  
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>
        {weatherData.city} 
      </h1>
      <h2>{weatherData.date}</h2>
      <div className="row">
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="clear sky"></img>
            <ul className="main">
              <li className="text-capitalize">{weatherData.description}</li>
              <li><span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C|°F</span></li>
            </ul>
        </div>
        <div className="col-6">
          <ul className="details">
            <li>Lowest Temp: {Math.round(weatherData.minTemperature)}°C</li>
            <li>Higest Temp: {Math.round(weatherData.maxTemperature)}°C</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind Spped: {Math.round(weatherData.windSpeed*10)/10}km/h</li>  
          </ul>
        </div>
      </div>  
    </div>
    );
  } else {
    const apiKey = "cbbbf47964f1e326cc360a17986bc388";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResposne);

  return ("loading...");
  }
}