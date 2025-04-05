'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseClient } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export function useRequireSession() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await createSupabaseClient().auth.getSession();
      if (!session?.user) {
        router.replace('/login');
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  return { user, loading };
}

export function useSupabaseUser() {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const supabase = createSupabaseClient();

    const setSessionUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    setSessionUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return user;
}
