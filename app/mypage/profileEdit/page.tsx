'use client';

import { useRequireSession } from '@/lib/useRequireSession';

export default function ProfileEdit() {
  const { user, loading } = useRequireSession();

  if (loading) return <p>認証確認中...</p>;

  return (
    <div className="p-4">
      {user && (
        <div>
          <h1>こんにちは、{user.email}</h1>
          <p>ここはプロフィール修正画面</p>
        </div>
      )}
    </div>
  );
}
