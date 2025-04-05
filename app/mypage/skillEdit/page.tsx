'use client';

import { useRequireSession } from '@/lib/useRequireSession';

export default function SkillEdit() {
  const { user } = useRequireSession();

  return (
    <div className="p-4">
      {user && (
        <div>
          <h1>こんにちは、{user.email}</h1>
          <p>ここはスキル修正画面</p>
        </div>
      )}
    </div>
  );
}
