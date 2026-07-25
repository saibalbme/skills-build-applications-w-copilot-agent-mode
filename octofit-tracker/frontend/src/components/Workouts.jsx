import { useEffect, useState } from 'react';

const API_HOST = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

const API_URL = `${API_HOST}/api/workouts`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setWorkouts(Array.isArray(data) ? data : data.items || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      {error && <p className="text-danger">Error: {error}</p>}
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id ?? workout.id}>
            {workout.name} — {workout.duration} min ({workout.difficulty})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Workouts;
