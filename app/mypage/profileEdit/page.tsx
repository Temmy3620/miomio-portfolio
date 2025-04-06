'use client';

import { useRequireSession } from '@/lib/useRequireSession';
import { useProfile } from "@/hooks/useProfile";
import { updateProfile } from "@/lib/supabaseProfile";
import { useState, useEffect } from 'react';

export default function ProfileEdit() {
  const { user } = useRequireSession();
  const profile = useProfile();

  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (profile) {
      setTitle(profile.title || '');
      setEmail(profile.email || '');
    }
  }, [profile]);

  const handleSave = async () => {
    if (!profile) return;

    const success = await updateProfile(profile.id, {
      title,
      email,
    });

    if (success) {
      alert('プロフィールを更新しました！');
      setIsEditing(false); // 編集モード終了
    } else {
      alert('更新に失敗しました。');
    }
  };

  return (
    <div className="p-4">
      {user && (
        <div className="max-w-2xl mx-auto space-y-6 mt-8">
          {isEditing ? (
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-teal-500 text-zinc-100 rounded hover:bg-teal-600 transition"
              >
                Save
              </button>
              <button
                onClick={() => {
                  if (profile) {
                    setTitle(profile.title || '');
                    setEmail(profile.email || '');
                  }
                  setIsEditing(false);
                }}
                className="px-4 py-2 bg-teal-500 text-zinc-100 rounded hover:bg-teal-600 transition"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-teal-500 text-zinc-100 rounded hover:bg-teal-600 transition"
            >
              Edit
            </button>
          )}
          <div>
            <label className="block font-semibold text-zinc-300 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={!isEditing}
              className="w-full bg-zinc-700 text-zinc-400 border border-zinc-600 rounded p-2 disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block font-semibold text-zinc-300 mb-1">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
              className="w-full bg-zinc-700 text-zinc-400 border border-zinc-600 rounded p-2 disabled:opacity-50"
            />
          </div>
        </div>
      )}
    </div>
  );
}
