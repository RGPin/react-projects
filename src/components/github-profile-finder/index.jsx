import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("sangammukherjee");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [userData, setUserData] = useState();

  async function fetchGithubUserData() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {}

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) return <div>Loading! Please wait...</div>;

  if (error) return <div>Error! {error}</div>;

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}
