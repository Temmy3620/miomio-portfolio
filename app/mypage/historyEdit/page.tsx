'use client';

import { useRequireSession } from '@/lib/useRequireSession';

export default function HistoryEdit() {
  const { user, loading } = useRequireSession();

  if (loading) return <p>認証確認中...</p>;

  return (
    <div className="p-4">
      <h1>こんにちは、{user.email}</h1>
      <p>ここは履歴修正画面</p>
    </div>
  );
}
