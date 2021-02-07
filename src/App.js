import React from "react";
import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
     <div className="container">
       <Weather />
      <footer>
      <a href="https://github.com/akh-io/react-weather-app-final" target="blank">
        Open source
      </a> 
        {""} project coded by Akiho 
      </footer>
      </div>
    </div>
  );
}

export default App;
