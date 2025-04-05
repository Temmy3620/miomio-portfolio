'use client';

import { useRequireSession } from '@/lib/useRequireSession';

export default function ProfileEdit() {
  const { user } = useRequireSession();

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
