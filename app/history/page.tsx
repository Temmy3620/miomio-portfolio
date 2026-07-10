import { loadData } from '@/lib/dataLoader';
import HistoryContent, { HistoryArticle } from './HistoryContent';

export default async function HistoryPage() {
  const articles = await loadData<HistoryArticle[]>('history', 'history.json');
  return <HistoryContent articles={articles} />;
}
