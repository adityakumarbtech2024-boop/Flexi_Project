import { useState } from "react";

export default function ProjectForm({ onAdd }) {
  const [project, setProject] = useState({
    title: "",
    guide: "",
    status: "pending",
    duration: ""
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!project.title || !project.guide) {
      alert("Please fill in all required fields.");
      return;
    }

    onAdd(project);

    // Clear form
    setProject({ title: "", guide: "", status: "pending", duration: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={project.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="guide"
        placeholder="Project Guide"
        value={project.guide}
        onChange={handleChange}
        required
      />

      <select
        name="status"
        value={project.status}
        onChange={handleChange}
      >
        <option value="pending">Pending</option>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>

      <input
        type="text"
        name="duration"
        placeholder="Duration (e.g., 3 months)"
        value={project.duration}
        onChange={handleChange}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}
