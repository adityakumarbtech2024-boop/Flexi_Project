import ProjectList from "../components/ProjectList";
import { useProjects } from "../context/ProjectContext";

export default function ViewProjects() {
  const { projects, deleteProject } = useProjects();

  return (
    <div className="page-container">
      <h2>All Projects</h2>
      <ProjectList projects={projects} onDelete={deleteProject} />
    </div>
  );
}
