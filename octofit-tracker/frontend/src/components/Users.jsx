import { useEffect, useState } from 'react';

const API_HOST = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

const API_URL = `${API_HOST}/api/users`;

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(Array.isArray(data) ? data : data.items || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {error && <p className="text-danger">Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user._id ?? user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
