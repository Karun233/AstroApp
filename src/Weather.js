import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import the CSS file
import sunnyImage from './Assets/sunny.png'; // Image for Clear sky
import cloudyImage from './Assets/cloudy.png'; // Image for Clouds
import lightRainImage from './Assets/light_rain.png'; // Image for Light Rain
import rainyImage from './Assets/rainy.png'; // Image for Rain
import drizzleImage from './Assets/drizzle.png'; // Image for Drizzle
import thunderstormImage from './Assets/thunderstorm.png'; // Image for Thunderstorm
import mistImage from './Assets/mist.png'; // Image for Mist
import showerRainImage from './Assets/shower_rain.png'; // Image for Shower Rain
import defaultImage from './Assets/default.png'; // Default image (if weather condition is not matched)


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

 
  const getWeatherIcon = (weatherCondition, weatherDescription) => {
    switch (weatherCondition) {
      case 'Clear':
        return defaultImage;
      case 'Clouds':
        return cloudyImage;
      case 'Rain':
        if (weatherDescription && weatherDescription.toLowerCase().includes('light rain')) {
          return lightRainImage;
        } else {
          return rainyImage;
        }
      case 'Drizzle':
        return drizzleImage;
      case 'Thunderstorm':
        return thunderstormImage;
      case 'Mist':
        return mistImage;
      case 'Shower Rain':
        return showerRainImage;
      case 'Sunny':
        return sunnyImage;
      default:
        return defaultImage;
    }
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
            <h2>Today</h2>
            <img
              className='weather-image'
              src={getWeatherIcon(weatherData.weather[0].main)}
              alt="Weather Icon"
            />
            <p> <h1><b>{weatherData.name}</b></h1> {weatherData.main.temp}°C</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
