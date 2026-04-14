import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const apiKey = import.meta.env.VITE_WEATHER_KEY;
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData() {}

  async function handleSearch() {}

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
