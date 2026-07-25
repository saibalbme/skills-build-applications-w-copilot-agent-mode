import { useEffect, useState } from 'react';

const API_HOST = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

const API_URL = `${API_HOST}/api/activities`;

function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setActivities(Array.isArray(data) ? data : data.items || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      {error && <p className="text-danger">Error: {error}</p>}
      <ul>
        {activities.map((activity) => (
          <li key={activity._id ?? activity.id}>
            {activity.type} by {activity.userId} — {activity.distance} km
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
