import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [planetaryPositions, setPlanetaryPositions] = useState(null);

  useEffect(() => {
    const authString = "NzBmMDE1MWQtMmU4Ni00MDRlLWE1NzQtNDQwZjEyM2ZmMDhiOjQ0OWQxZDQ0N2I1NWVmYjhhNjMzNzdiZTRhNjhhZmIxM2MwODNhNzAxN2MyNDI1OGU3MmEzMGU5OGE0ZmMxYzk2Y2QyNDk5YzIyOTU0MTQzNzdlMmM5NWQxY2ZkNTA2MzExNjZmOThmYjE4N2RiZWE4OTgyNzgyNGZmZDI1Nzc5ZjkyMmYzM2E0NzRjZmJhODBhZjQwOTJmN2UxYjE5MTBjM2RmZTQwODRiMDQ3NTc4ODgzZjM3NzhhNmVhODI5MmVjMTRiMDkxNTk3YzZmMDk1NjY4ZjIxYzk1M2Y3YTBm";

    const fetchPlanetaryPositions = async () => {
      try {
        const fromDate = "2024-03-21";
        const toDate = "2024-03-21";
        const time = "04:07:51";
        const latitude = "33.775867";
        const longitude = "-84.39733";
        const elevation = "1";

        const response = await fetch(`https://api.astronomyapi.com/api/v2/bodies/positions?latitude=${latitude}&longitude=${longitude}&elevation=${elevation}&from_date=${fromDate}&to_date=${toDate}&time=${time}`, {
          headers: {
            Authorization: `Basic ${btoa(authString)}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch planetary positions');
        }

        const data = await response.json();
        setPlanetaryPositions(data);
      } catch (error) {
        console.error('Error fetching planetary positions:', error);
      }
    };

    fetchPlanetaryPositions();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  useEffect(() => {
    const authString = "NzBmMDE1MWQtMmU4Ni00MDRlLWE1NzQtNDQwZjEyM2ZmMDhiOjQ0OWQxZDQ0N2I1NWVmYjhhNjMzNzdiZTRhNjhhZmIxM2MwODNhNzAxN2MyNDI1OGU3MmEzMGU5OGE0ZmMxYzk2Y2QyNDk5YzIyOTU0MTQzNzdlMmM5NWQxY2ZkNTA2MzExNjZmOThmYjE4N2RiZWE4OTgyNzgyNGZmZDI1Nzc5ZjkyMmYzM2E0NzRjZmJhODBhZjQwOTJmN2UxYjE5MTBjM2RmZTQwODRiMDQ3NTc4ODgzZjM3NzhhNmVhODI5MmVjMTRiMDkxNTk3YzZmMDk1NjY4ZjIxYzk1M2Y3YTBm";

    const script = document.createElement('script');
    script.src = 'https://widgets.astronomyapi.com/cdn/astronomy-api-widgets.js';
    script.async = true;
    script.onload = () => {
      const client = new window.AstronomyAPI({
        basicToken: authString,
      });

      client.moonPhase();
      
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      <div id="moon-phase"></div>
      
      {planetaryPositions && (
        <div>
          <h2>Planetary Positions</h2>
          <pre>{JSON.stringify(planetaryPositions, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
