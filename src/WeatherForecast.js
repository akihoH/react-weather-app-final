import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastInfo from "./WeatherForecastInfo"
import axios from "axios"

export default function WeatherForecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response){
  
    setForecast(response.data);
    setLoaded(true);
  }
if (loaded && props.city === forecast.city.name) {
  return (
    <div className="weather-forecast row">
    <WeatherForecastInfo data={forecast.list[0]}/> 
    <WeatherForecastInfo data={forecast.list[1]}/> 
    <WeatherForecastInfo data={forecast.list[2]}/> 
    <WeatherForecastInfo data={forecast.list[3]}/> 
    <WeatherForecastInfo data={forecast.list[4]}/> 
    </div>
  )  
} else {
  let apiKey = "6e59e8f1afc966e28727aa609b4dc84b"
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleForecastResponse)

  return null;
}
}