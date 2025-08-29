'use client';
import { Field, Fieldset, Input } from '@headlessui/react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useLocale } from '@/components/LocaleProvider';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createSupabaseClient();
  const { locale } = useLocale();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
    } else {
      router.push('/mypage/profileEdit');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-zinc-900 dark:text-gray-300">{locale === 'ja' ? '管理者' : 'Admin'}</h2>
        <form onSubmit={login}>
          <Fieldset className="space-y-6">

            <Field>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 rounded-md shadow-sm border border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-gray-500 dark:bg-slate-600 dark:text-zinc-100"
              />
            </Field>

            <Field>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 rounded-md shadow-sm border border-zinc-300 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-gray-500 dark:bg-slate-600 dark:text-zinc-100"
              />
            </Field>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 rounded border-zinc-300 text-teal-600 focus:ring-teal-500 dark:bg-slate-600 dark:border-gray-500"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-zinc-600 dark:text-gray-500">{locale === 'ja' ? 'ログイン状態を保存する' : 'save login state'}</label>
              </div>
            </div>

            <button type="submit" className="w-full py-2 px-4 rounded-md shadow bg-teal-600 text-white hover:bg-teal-700 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-800">
              {locale === 'ja' ? 'ログイン' : 'Submit'}
            </button>
          </Fieldset>
        </form>
      </div>
    </div>
  );
}
