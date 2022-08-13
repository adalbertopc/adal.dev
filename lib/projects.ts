import type { Project } from "~/interfaces/project.interface";
import { getDomain } from "~/utils/getDomain";

export const getProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${getDomain()}/api/projects`);
  return await res.json();
};
