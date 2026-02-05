import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import InputSeacrch from "../components/InputSeacrch.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import RightSide from "../components/RightSide.jsx";

function Dashboard() {
  const [city, setCity] = useState("Goma");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const api_Key = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (searchCity) => {
    if (!searchCity || searchCity.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_Key}&q=${searchCity}&days=5&aqi=yes&alerts=no`,
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
      setCity("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(weather);
  // chargement initial
  useEffect(() => {
    fetchWeather(city);
  }, []);

  if (loading)
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-700">
        Error: {error}
      </div>
    );

  return (
    <>
      <main className="relative p-8">
        <section className="section1 flex items-start">
          <Sidebar />
          <InputSeacrch
            city={city}
            setCity={setCity}
            onSearch={() => fetchWeather(city)}
            onLocate={() => fetchWeather("")}
          />
        </section>

        {weather && (
          <section className="section2 w-[85%] flex justify-between items-center p-8 mx-auto absolute top-[17%] left-[15%]">
            <WeatherCard weather={weather} />
            <RightSide weather={weather} />
          </section>
        )}
      </main>
    </>
  );
}

export default Dashboard;
