import ProjectForm from "../components/ProjectForm";
import { useProjects } from "../context/ProjectContext";

export default function AddProject() {
  const { addProject } = useProjects();

  const handleAdd = (project) => {
    addProject(project);
    alert("✅ Project added successfully!");
  };

  return (
    <div className="page-container">
      <h2>Add New Project</h2>
      <ProjectForm onAdd={handleAdd} />
    </div>
  );
}
