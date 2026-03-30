import { useEffect, useState } from "react";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1>Loading. Please wait...</h1>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="search-autocomplete-container">
      <input
        name="search-users"
        placeholder="Search Users here..."
        type="text"
      />
    </div>
  );
}
