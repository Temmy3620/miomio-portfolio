'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

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

  // Initialize from localStorage/cookie
  useEffect(() => {
    try {
      const stored = (localStorage.getItem('locale') as Locale | null);
      const cookie = (readCookie('locale') as Locale | undefined);
      const init = stored === 'en' || stored === 'ja' ? stored : (cookie === 'en' || cookie === 'ja' ? cookie : (initialLocale || 'ja'));
      setLocaleState(init);
      document.documentElement.lang = init === 'ja' ? 'ja' : 'en';
    } catch {
      // ignore
    }
  }, [initialLocale]);

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
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}

