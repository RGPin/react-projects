import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const apiKey = import.meta.env.VITE_WEATHER_KEY;
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param, signal) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&exclude={part}&appid=${apiKey}`,
        { signal },
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setWeatherData(data);
    } catch (e) {
      if (e.name !== "AbortError") {
        console.error(e);
        setError(e);
      }
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchWeatherData("bangalore", signal);
    return () => controller.abort();
  }, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading, please wait... </div>
      ) : error ? (
        <div>Error encountered: {error}</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temperature">{weatherData?.main?.temp}</div>
          <p className="description">{weatherData?.weather[0].description}</p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
