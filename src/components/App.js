
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {

  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    const fetchWeather = { temperature: 25, conditions: "Sunny" }
    setWeather(fetchWeather)
  }, []);
  
  return (
    <div>
      < WeatherDisplay weather={weather} />
    </div>
  )
}

export default App
