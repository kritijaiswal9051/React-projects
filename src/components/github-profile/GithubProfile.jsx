import { useEffect, useState } from "react";
import "./github.css";
import User from "./User";

function GithubProfile() {
  const [userName, setUserName] = useState("kritiJaiswal9051");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUser() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchGithubUser();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }
  const handleSubmit = () => {
    fetchGithubUser();
  };
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

export default GithubProfile;
