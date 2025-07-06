import fs from 'fs';
import path from 'path';

export interface ProjectData {
  slug: string;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  overview: string;
  technicalDetails: {
    frontend: Array<{ name: string; description: string }>;
    features: Array<{ name: string; description: string }>;
  };
  developmentProcess: Array<{ title: string; description: string }>;
  challenges: Array<{ title: string; description: string; solution: string }>;
  futureEnhancements: {
    planned: string[];
    technical: string[];
  };
  icon: string;
  iconColor: string;
}

export function getProjectData(slug: string): ProjectData | null {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'projects', `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as ProjectData;
  } catch (error) {
    return null;
  }
}

export function getAllProjectSlugs(): string[] {
  try {
    const projectsDir = path.join(process.cwd(), 'src', 'data', 'projects');
    const files = fs.readdirSync(projectsDir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    return [];
  }
}

export function getAllProjects(): ProjectData[] {
  const slugs = getAllProjectSlugs();
  return slugs
    .map(slug => getProjectData(slug))
    .filter((project): project is ProjectData => project !== null);
} 