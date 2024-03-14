// WeatherForecast.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weatherForecast.css'; // Import CSS file

const WeatherForecast = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=0eb6fccdfb4dc326cd05c87f99c91444`
      );
      setWeatherData(response.data);
      console.log(response.data); // You can see all the weather data in the console log
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]); // Fetch data whenever the city changes

  const filterForecastFor12PM = (forecastList) => {
    return forecastList.filter((forecast) => {
      return forecast.dt_txt.endsWith(' 12:00:00');
    });
  };

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayOfWeek];
  };

  return (
    <div className='weather-container'>
      {weatherData &&
        filterForecastFor12PM(weatherData.list).map((forecast, index) => (
          <div className={`weather-box${index + 1}`} key={index}>
            <p>Day: {getDayOfWeek(forecast.dt_txt)}</p>
            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="Weather Icon" />
            <p>Temperature: {forecast.main.temp}°C</p>
            <p>Description: {forecast.weather[0].description}</p>
            <p>Feels like : {forecast.main.feels_like}°C</p>
            <p>Humidity : {forecast.main.humidity}%</p>
            <p>Pressure : {forecast.main.pressure}</p>
            <p>Wind Speed : {forecast.wind.speed}m/s</p>
          </div>
        ))}
    </div>
  );
};

export default WeatherForecast;
