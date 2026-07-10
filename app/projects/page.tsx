import { loadData } from '@/lib/dataLoader';
import ProjectsContent, { Project } from './ProjectsContent';

export default async function ProjectsPage() {
  const projects = await loadData<Project[]>('projects', 'projects.json');
  return <ProjectsContent projects={projects} />;
}
