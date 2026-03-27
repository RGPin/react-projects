import { useState } from "react";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState();

  function handleSubmit() {}

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
