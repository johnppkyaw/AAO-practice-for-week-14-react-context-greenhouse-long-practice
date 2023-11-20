import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

const ClimateProvider = ({children}) => {
  // Temperature has a default value of 50 degrees
  const [ temperature, setTemperature ] = useState(50);
  const [ desiredTemp, setDesiredTemp ] = useState(50);


  // Humidity has a default value of 40%
  const [ humidity, setHumidity ] = useState(40);
  const [ desiredHumidity, setDesiredHumidity ] = useState(40);

  return (
    <ClimateContext.Provider
      value={{
        temperature,
        setTemperature,
        desiredTemp,
        setDesiredTemp,
        humidity,
        setHumidity,
        desiredHumidity,
        setDesiredHumidity
      }}
    >
      {children}
    </ClimateContext.Provider>
  )
}

export default ClimateProvider;
