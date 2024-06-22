import React, { useEffect, useState } from 'react';
import TopButtons from './components/TopButtons';
import Input from './components/Input';
import TimeandLocation from './components/TimeandLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import Sidebar from './components/Sidebar';
import getFormattedWeatherData from './Services/WeatherServices';
import { TbLayoutSidebarFilled } from "react-icons/tb";
import { IoClose } from "react-icons/io5";


const App = () => {
  const [query, setQuery] = useState({ q: 'Bareilly' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  const [searchedCities, setSearchedCities] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then(data => {
      setWeather(data);
      setSearchedCities(prevCities => {
        const newCities = [query.q, ...prevCities.filter(city => city !== query.q)];
        return newCities.slice(0, 10);
      });
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 25 : 60;
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-yellow-600 to-orange-700';
  };

  return (
    <div className={`flex bg-gradient-to-br ${formatBackground()}`}>
      <button 
        className={`absolute top-4 ${sidebarVisible ? 'left-64 ms-2' : 'left-4'} z-10 p-2 bg-gray-900 ${sidebarVisible ? 'hover:bg-gradient-to-br from-red-500 to-red-700' : 'hover:bg-gradient-to-br from-cyan-500 to-blue-500'}  hover:scale-110 text-white rounded-md transition-all duration-300 `}
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        {sidebarVisible ? <IoClose size={20} /> : <TbLayoutSidebarFilled size={20} />}
      </button>
      <div className={`transition-transform duration-300 ${sidebarVisible ? 'translate-x-0' : '-translate-x-64'}`}>
        <Sidebar cities={searchedCities} setQuery={setQuery} />
      </div>
      <div className={`flex-1 mx-auto max-w-screen py-5 px-32 shadow-xl shadow-gray-400 transition-transform duration-300 ${sidebarVisible ? 'ml-64' : ''}`}>
        <TopButtons setQuery={setQuery} />
        <Input setQuery={setQuery} setUnits={setUnits} />
        {weather && (
          <>
            <TimeandLocation weather={weather} />
            <TempAndDetails weather={weather} units={units} />
            <Forecast title="3 hour step forecast" data={weather.hourly} />
            <Forecast title="Daily forecast" data={weather.daily} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
