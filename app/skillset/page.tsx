import { loadData } from '@/lib/dataLoader';
import SkillsetContent, { SkillsData } from './SkillsetContent';

export default async function SkillSetPage() {
  const skills = await loadData<SkillsData>('skills', 'skills.json');
  return <SkillsetContent skills={skills} />;
}
