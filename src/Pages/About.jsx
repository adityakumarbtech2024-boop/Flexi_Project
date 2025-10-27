export default function About() {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>About <span>College Project Manager</span></h1>
        <p>
          <strong>College Project Manager</strong> is a modern React-based web application built to help students and faculty
          easily manage academic projects. Add, view, and organize details like title, guide, duration, and project status.
        </p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>✨ Key Features</h2>
          <ul>
            <li>📋 Add and manage multiple projects</li>
            <li>📊 Track project progress (Ongoing, Completed, Pending)</li>
            <li>🔍 Search and filter project details</li>
            <li>⚡ Lightweight, fast, and responsive — powered by React + Vite</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>🧠 Technologies Used</h2>
          <ul>
            <li><strong>React:</strong> For UI and component logic</li>
            <li><strong>Vite:</strong> For fast development and hot reload</li>
            <li><strong>CSS:</strong> For clean, minimal styling</li>
            <li><strong>UUID:</strong> For unique project identifiers</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>👨‍💻 About the Developer</h2>
          <p>
            This project was developed as part of a college web development portfolio.
            The goal is to provide a modern, easy-to-understand example of using React hooks,
            routing, and component-driven design to manage real-world data.
          </p>
          <blockquote>
            “Organize your ideas, manage your progress, and complete your college projects with confidence.”
          </blockquote>
        </div>
      </div>
    </div>
  );
}
