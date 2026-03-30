import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchInput(query);
    if (query.length) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().includes(query))
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setFilteredUsers([]);
      setShowDropdown(false);
    }
  }

  function handleClick(e) {
    setShowDropdown(false);
    setSearchInput(e.target.textContent);
    setFilteredUsers([]);
  }

  async function fetchData() {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();

      if (data && data.users && data.users.length)
        setUsers(data.users.map((user) => user.firstName));
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
        value={searchInput}
        name="search-users"
        placeholder="Search Users here..."
        type="text"
        onChange={handleChange}
      />
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
