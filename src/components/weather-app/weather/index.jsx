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
      console.log(data);
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
      Weather
    </div>
  );
}
