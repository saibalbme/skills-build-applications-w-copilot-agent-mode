import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const CODESPACE_NAME = import.meta.env.VITE_CODESPACE_NAME;
const API_HOST = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>OctoFit Tracker</h1>
        <p>
          Use <code>VITE_CODESPACE_NAME</code> to connect to Codespaces or run locally
          on <code>http://localhost:8000</code>.
        </p>
        <p className="api-info">API host: {API_HOST}</p>
      </header>

      <nav className="app-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/workouts">Workouts</NavLink>
      </nav>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return (
    <section>
      <h2>Welcome to OctoFit Tracker</h2>
      <p>Explore the tracker data using the navigation links above.</p>
      <p>
        The frontend uses <code>import.meta.env.VITE_CODESPACE_NAME</code> to build the
        backend API base URL when running in Codespaces.
      </p>
    </section>
  );
}

export default App;
