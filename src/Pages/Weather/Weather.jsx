import React, { useEffect, useState } from "react";
import axios from "axios";
import DateTime from "../../Components/DateTime";
import Box from "../../Components/Box";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const [data, setData] = useState({});
  const [yourName, setYourName] = useState("");
  const [city, setCity] = useState("Delhi");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchWeatherData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchWeatherDataByLocation = async () => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4bd2837c0343413245cee938f064c19b`;
          await fetchWeatherData(url);
          setLoading(false);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      console.error("Error fetching weather data by location:", error);
    }
  };

  const handleCityClick = async (selectedCity) => {
    setCity(selectedCity);
    setLoading(true);
    if (selectedCity === "") {
      fetchWeatherDataByLocation();
    } else {
      const apiCityWise = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=4bd2837c0343413245cee938f064c19b`;
      await fetchWeatherData(apiCityWise);
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedName = localStorage.getItem("yourName");
    if (storedName) {
      setYourName(storedName);
    }
    fetchWeatherDataByLocation();
  }, []);

  return (
    <div className="bg-sky-600 h-screen w-full max-md:h-auto">
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center text-4xl text-white font-bold">Your data is fetching please wait...</div>
      ) : (
        <div>
          <div className="h-14 w-full bg-sky-800 text-white flex justify-between items-center">
            <div className="h-[80%] w-36 bg-sky-600 rounded-md mx-2 flex justify-evenly items-center">
              <img src="/icon/logo.png" className="h-4/5 max-md:h-2/3" />
              <p className="text-sm font-semibold italic">Forecast</p>
            </div>
            <div className="text-xl font-medium max-md:text-sm max-md:font-light">
              Hello {yourName}, welcome! Glad you're here.
            </div>
            <div
              className="h-[80%] w-36 bg-sky-600 rounded-md mx-2 flex justify-evenly items-center"
              onClick={() => navigate("/")}
            >
              <p className="text-sm font-semibold italic">LogOut</p>
              <img src="/icon/logOut.png" className="h-4/5" />
            </div>
          </div>
          <div className="p-2 h-auto">
            <div className="bg-sky-800 text-white h-auto py-4 flex-wrap rounded-md my-2 flex justify-around items-center">
              <div
                onClick={() => handleCityClick("Delhi")}
                className="h-4/5 px-5 my-2 min-w-28  cursor-pointer shadow-lg py-2 text-white bg-sky-600 rounded-md flex justify-center items-center font-semibold"
              >
                Delhi
              </div>
              <div
                onClick={() => handleCityClick("Mumbai")}
                className="h-4/5 px-5 my-2 min-w-28 cursor-pointer shadow-lg py-2 text-white bg-sky-600 rounded-md flex justify-center items-center font-semibold"
              >
                Mumbai
              </div>
              <div
                onClick={() => handleCityClick("")}
                className="h-4/5 px-5 my-2 min-w-28 cursor-pointer shadow-lg py-2 text-white bg-sky-600 rounded-md flex justify-center items-center font-semibold"
              >
                Live
              </div>
              <div
                onClick={() => handleCityClick("Kolkata")}
                className="h-4/5 px-5 my-2 min-w-28 cursor-pointer shadow-lg py-2 text-white bg-sky-600 rounded-md flex justify-center items-center font-semibold"
              >
                Kolkata
              </div>
              <div
                onClick={() => handleCityClick("Chennai")}
                className="h-4/5 px-5 my-2 min-w-28 cursor-pointer shadow-lg py-2 text-white bg-sky-600 rounded-md flex justify-center items-center font-semibold"
              >
                Chennai
              </div>
            </div>
            <div className="justify-center items-center flex-wrap gap-5 grid grid-flow-row-dense md:grid-cols-4 grid-cols-1 ">
              <Box gridW={"col-span-2"} weatherValue={<DateTime />} />
              <Box
                name={"Temperature"}
                weatherValue={`${Math.round(data?.main?.temp - 273.15)}°C`}
              />
              <Box name={"City"} weatherValue={data?.name} />
              <Box
                name={"Humidity"}
                weatherValue={data?.main?.humidity}
                caption={"mm"}
              />
              <Box
                name={"Pressure"}
                weatherValue={data?.main?.pressure}
                caption={"mb"}
              />
              <Box
                name={"Wind"}
                weatherValue={data?.wind?.speed}
                caption={"Km/H"}
              />
              <Box
                name={"Visibility"}
                weatherValue={data?.visibility}
                caption={"m"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
