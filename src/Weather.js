import React from "react";
import "./Weather.css";

export default function Weather() {
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
        Tokyo 
      </h1>
      <h2>Tuesday 18:00</h2>
      <div className="row">
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="clear sky"></img>
            <ul className="main">
              <li>Sunny</li>
              <li><span className="temperature">17</span><span className="unit">°C|°F</span></li>
            </ul>
        </div>
        <div className="col-6">
          <ul className="details">
            <li>Lowest Temp: 12°C</li>
            <li>Higest Temp: 20°C</li>
            <li>Humidity: 30%</li>
            <li>Wind Spped: 6km/h</li>  
          </ul>
        </div>
      </div>  
    </div>
)
}