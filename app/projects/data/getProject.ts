import {
  mechanicWebsite,
  journalTranscribe,
  goodNews,
  harrysJournals,
  recreatingReact,
} from '@/app/projects/data';
import { ProjectData } from '@/types/project';

const projects = [
  mechanicWebsite,
  journalTranscribe,
  goodNews,
  harrysJournals,
  recreatingReact,
].reverse();

export default function getProjectById(id: string): ProjectData {
  return projects.find((project) => project.id === id) ?? recreatingReact;
}
