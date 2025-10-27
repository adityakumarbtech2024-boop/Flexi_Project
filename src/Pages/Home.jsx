import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>🎓 College Project Manager</h1>
      <p>
        Organize, track, and manage your college projects effortlessly.
        Add new projects, view details, and keep everything in one place.
      </p>
      <Link to="/add">
        <button>🚀 Get Started</button>
      </Link>
    </div>
  );
}
