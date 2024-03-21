import React from 'react';
import AstroApi from './AstroApi';
import MyComponent from './planetPos.js';
import PlanetTable from './planetTable.js';

const AstroData = () => {
   

  return (
    <div>
      <h1>AstroData Page</h1>
      
      <AstroApi  />
      <PlanetTable></PlanetTable>

    </div>
  );
};

export default AstroData;
