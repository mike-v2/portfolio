import {
  mechanicWebsite,
  journalTranscribe,
  goodNews,
  harrysJournals,
  recreatingReact,
} from '@/app/projects/data';
import { ProjectData } from '@/types/project';

export const projects = [
  mechanicWebsite,
  journalTranscribe,
  goodNews,
  harrysJournals,
  recreatingReact,
].reverse();

export function getProjectById(id: string): ProjectData {
  return projects.find((project) => project.id === id) ?? recreatingReact;
}
