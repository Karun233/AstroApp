import './App.css'
import React, { useState } from 'react';
import Weather from './Weather';
import WeatherForecast from './weatherForecast';
import Header from './Header'

const App = () => {
  const [city, setCity] = useState('');

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div>
      <Header />
      <Weather onCityChange={handleCityChange} />
      <WeatherForecast city={city} onCityChange={handleCityChange} />
    </div>
  );
};

export default App;
