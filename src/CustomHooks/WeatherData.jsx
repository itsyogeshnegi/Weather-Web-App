import React, { useEffect, useState } from "react";
import axios from "axios";
const WeatherData = () => {
  const api_key = "4bd2837c0343413245cee938f064c19b";
  const city = "Delhi";
  // const urlLatLng = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`;
  const apiCityWise = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(apiCityWise);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);
  // return
};

export default WeatherData;
