import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
import { useEffect } from 'react';

function ClimateStats() {
  const { temperature, humidity, desiredTemp, setDesiredTemp, desiredHumidity, setDesiredHumidity } = useClimate();


  useEffect(() => {
    const timeOut = setTimeout(() => {

      //Adjust temperature at 1 degree per second.
      if(desiredTemp > temperature) setDesiredTemp((prev) => prev -= 1);
      if(desiredTemp < temperature) setDesiredTemp((prev) => prev += 1);

      //Adjust humidity at 2% per second, 1% if difference is 1.
      const humidityDiff = Math.abs(desiredHumidity - humidity);
      if(desiredHumidity < humidity) {
        humidityDiff !== 1 ? setDesiredHumidity((prev) => prev += 2) : setDesiredHumidity((prev) => prev += 1);
      }
      if(desiredHumidity > humidity) {
        humidityDiff !== 1 ? setDesiredHumidity((prev) => prev -= 2) : setDesiredHumidity((prev) => prev -= 1);
      }
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [desiredTemp, temperature, setDesiredTemp, desiredHumidity, humidity, setDesiredHumidity]);

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {desiredTemp}°F
      </div>
      <div className="humidity">
        Humidity {desiredHumidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
