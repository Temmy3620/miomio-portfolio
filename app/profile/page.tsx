import { loadData } from '@/lib/dataLoader';
import ProfileContent, { ProfileData } from './ProfileContent';

export default async function ProfilePage() {
  const profileData = await loadData<ProfileData>('profile', 'profile.json');
  return <ProfileContent profileData={profileData} />;
}
