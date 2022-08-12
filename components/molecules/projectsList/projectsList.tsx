import type { Project } from "~/interfaces/project.interface";
import { ProjectCard } from "~/components";

interface ProjectsListProps {
  projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => (
  <div className="grid mb-8 sm:grid-cols-2 gap-4">
    {projects?.map((project: Project) => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </div>
);
