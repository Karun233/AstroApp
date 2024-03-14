// weatherForecast.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weatherForecast.css'; // Import CSS file

const WeatherForecast = ( coordinates ) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const apiKey = '0eb6fccdfb4dc326cd05c87f99c91444'
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=0eb6fccdfb4dc326cd05c87f99c91444`
  
        const response = await axios.get(apiUrl);
  
        setWeatherData(response.data);
        console.log(response.data); // You can see all the weather data in the console log
      } catch (error) {
        console.error(error);
      }
    };
  }, []); // Fetch data once when the component mounts


  const filterForecastFor12PM = (forecastList) => {
    // Filter the forecast list to only include entries for 12 PM
    return forecastList.filter((forecast) => {
      // Check if the timestamp (dt_txt) ends with ' 12:00:00'
      return forecast.dt_txt.endsWith(' 12:00:00');
    });
  };

  const getDayOfWeek = (dateString) => {
    // Convert dateString to a Date object
    const date = new Date(dateString);
    // Get the day of the week (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const dayOfWeek = date.getDay();
    // Define an array to map day indices to day names
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Return the corresponding day name
    return days[dayOfWeek];
  };

  return (
    <div className = 'weather-container'>
      {/* Display weather forecast data for 12 PM */}
      {weatherData ? (
        <>
          {/* Map over filtered weather data to display forecast details */}
          {filterForecastFor12PM(weatherData.list).map((forecast, index) => (
            <div className = 'weather-box' key={index}>
              <p>Day: {getDayOfWeek(forecast.dt_txt)}</p>
              <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="Weather Icon" />
              <p>Temperature: {forecast.main.temp}°C</p>
              <p>Description: {forecast.weather[0].description}</p>
              <p>Feels like : {forecast.main.feels_like}°C</p>
                <p>Humidity : {forecast.main.humidity}%</p>
                <p>Pressure : {forecast.main.pressure}</p>
                <p>Wind Speed : {forecast.wind.speed}m/s</p>
              {/* Add more forecast details as needed */}
            </div>
          ))}
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherForecast;
