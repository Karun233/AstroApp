import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import the CSS file

const Weather = ({ onCityChange }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0eb6fccdfb4dc326cd05c87f99c91444`
      );
      setWeatherData(response.data);
      console.log(response.data); // You can see all the weather data in console log
      onCityChange(city);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <div className='weather-container'>
      <form className='weather-form' onSubmit={handleSubmit}>
        <input
          className='weather-input'
          type="text"
          placeholder="Search Location..."
          value={city}
          onChange={handleInputChange}
        />
      </form>

      {weatherData && (
        <div className='weather-box-container'>
          <div className='weather-info'>
            <h2>{weatherData.name}</h2>
            <img
              className='weather-image'
              src={getWeatherIconUrl(weatherData.weather[0].icon)}
              alt="Weather Icon"
            />
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Feels like: {weatherData.main.feels_like}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Pressure: {weatherData.main.pressure}</p>
            <p>Wind Speed: {weatherData.wind.speed}m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
