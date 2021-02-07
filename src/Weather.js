import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input type="search" placeholder="Enter a city" className="form-control"/>
          </div>
          <div className="col-4">
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
          <ul>
            <li>17°C</li>
            <li>Sunny</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Lowest 12°C</li>
            <li>Higest 20°C</li>
            <li>Humidity 30%</li>
            <li>Wind 6km/h</li>  
          </ul>
        </div>
      </div>  
    </div>
)
}