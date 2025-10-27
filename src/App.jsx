import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext";

import Home from "./pages/Home";
import AddProject from "./pages/AddProject";
import ViewProjects from "./pages/ViewProjects";
import About from "./pages/About";

import "./styles.css";

export default function App() {
  return (
    <ProjectProvider>
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/add">Add Project</Link>
          <Link to="/view">View Projects</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProject />} />
          <Route path="/view" element={<ViewProjects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
}
