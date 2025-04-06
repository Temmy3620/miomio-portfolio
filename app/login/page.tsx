'use client';
import { Field, Fieldset, Input } from '@headlessui/react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabaseClient';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createSupabaseClient();

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
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">Admin</h2>
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
                className="bg-slate-600 mt-1 w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm"
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
                className="bg-slate-600 mt-1 w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm"
              />
            </Field>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="bg-slate-600 h-4 w-4 border-gray-500 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-500">save login state</label>
              </div>
            </div>

            <button type="submit" className="w-full bg-slate-700 text-gray-300 py-2 px-4 rounded-md shadow hover:bg-slate-800">
              Submit
            </button>
          </Fieldset>
        </form>
      </div>
    </div>
  );
}
