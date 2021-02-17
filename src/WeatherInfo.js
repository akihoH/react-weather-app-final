import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon"

export default function Weatherinfo (props) {

return (
  <div className="weatherInfo">
      <h1>
        {props.data.city} 
      </h1>
      <h2><FormattedDate date={props.data.date} /></h2>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} alt={props.data.description}/> 
            <ul className="main">
              <li className="text-capitalize">{props.data.description}</li>
              <li><span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C|°F</span></li>
            </ul>
        </div>
        <div className="col-6">
          <ul className="details">
            <li>Lowest Temp: {Math.round(props.data.minTemperature)}°C</li>
            <li>Higest Temp: {Math.round(props.data.maxTemperature)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Spped: {Math.round(props.data.windSpeed*10)/10}km/h</li>  
          </ul>
        </div>
      </div>  
    </div>
);
}