import React from "react";
import WeatherIcon from "./WeatherIcon";



export default function WeatherForecastInfo(props) {
  function time() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours()
    if (hours < 10) {
      return `0${hours}:00`
    } else {
      return `${hours}:00`
    }
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp)
    return `${temperature}°`
  }

  return(
     <div className="col"> 
      {time()}
      <WeatherIcon code={props.data.weather[0].icon} /> 
      {temperature()}
     </div>
  )
}
