import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import the CSS file


const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0eb6fccdfb4dc326cd05c87f99c91444`
      );
      
      setWeatherData(response.data);
      console.log(response.data); //You can see all the weather data in console log
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className ='weather-container'>
      <form className = 'weather-form' onSubmit={handleSubmit}>
        <input className = 'weather-input'
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData ? (
        <>
        <div className = 'weather-info'>
          <h2>{weatherData.name}</h2>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like : {weatherData.main.feels_like}°C</p>
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Pressure : {weatherData.main.pressure}</p>
          <p>Wind Speed : {weatherData.wind.speed}m/s</p>
        </div>
        </>
        
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
