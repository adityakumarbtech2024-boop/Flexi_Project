export default function ProjectList({ projects, onDelete }) {
  if (projects.length === 0)
    return <p className="empty-msg">No projects found. Try adding one!</p>;

  return (
    <div className="project-grid">
      {projects.map((p) => (
        <div className="project-card" key={p.id}>
          <div className="card-header">
            <h3>{p.title}</h3>
            <span className={`status ${p.status.toLowerCase()}`}>
              {p.status}
            </span>
          </div>
          <p><strong>Guide:</strong> {p.guide}</p>
          <p><strong>Duration:</strong> {p.duration || "N/A"}</p>

          <button className="delete-btn" onClick={() => onDelete(p.id)}>
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
}
