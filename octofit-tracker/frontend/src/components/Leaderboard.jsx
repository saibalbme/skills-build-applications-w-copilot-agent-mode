import { useEffect, useState } from 'react';

const API_HOST = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

const API_URL = `${API_HOST}/api/leaderboard`;

function Leaderboard() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setItems(Array.isArray(data) ? data : data.items || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Leaderboard</h2>
      {error && <p className="text-danger">Error: {error}</p>}
      <ul>
        {items.map((entry) => (
          <li key={`${entry.rank}-${entry.entityName}`}>
            #{entry.rank} {entry.entityName} — {entry.score} pts
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Leaderboard;
