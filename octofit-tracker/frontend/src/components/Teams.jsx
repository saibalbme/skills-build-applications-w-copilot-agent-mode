import { useEffect, useState } from 'react';

const API_HOST = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

const API_URL = `${API_HOST}/api/teams`;

function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTeams(Array.isArray(data) ? data : data.items || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      {error && <p className="text-danger">Error: {error}</p>}
      <ul>
        {teams.map((team) => (
          <li key={team._id ?? team.id}>
            {team.name} — {team.members} members
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Teams;
