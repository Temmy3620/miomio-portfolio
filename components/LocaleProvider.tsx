"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Locale = 'en' | 'ja';

type LocaleContextType = {
  locale: Locale;
  setLocale: (next: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\/+^])/g, '\\$1') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function LocaleProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || 'ja');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Initialize from localStorage/cookie
  useEffect(() => {
    try {
      const qp = (searchParams?.get('lang') as Locale | null);
      const stored = (localStorage.getItem('locale') as Locale | null);
      const cookie = (readCookie('locale') as Locale | undefined);
      const init = (qp === 'en' || qp === 'ja') ? qp : (stored === 'en' || stored === 'ja' ? stored : (cookie === 'en' || cookie === 'ja' ? cookie : (initialLocale || 'ja')));
      setLocaleState(init);
      document.documentElement.lang = init === 'ja' ? 'ja' : 'en';
    } catch {
      // ignore
    }
  }, [initialLocale, searchParams]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem('locale', next);
      document.cookie = `locale=${next}; path=/; max-age=31536000`;
      document.documentElement.lang = next === 'ja' ? 'ja' : 'en';
      window.dispatchEvent(new CustomEvent('app-locale-change', { detail: next }));
    } catch {
      // ignore
    }
    // reflect in URL query (?lang=en|ja) without adding history entries
    try {
      if (pathname) {
        const sp = new URLSearchParams(searchParams ?? undefined);
        sp.set('lang', next);
        router.replace(`${pathname}?${sp.toString()}`);
      }
    } catch { /* ignore */ }
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
