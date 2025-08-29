'use client';

import { usePathname } from 'next/navigation';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useSupabaseUser } from '@/lib/useRequireSession';
import { useLocale } from '@/components/LocaleProvider';
import ConfirmDialog from '@/components/ConfirmDialog';

const baseNavigation = [
  { key: 'profile', nameEn: 'Profile', nameJa: 'プロフィール', href: '/profile' },
  { key: 'skill', nameEn: 'Skill', nameJa: 'スキル', href: '/skillset' },
  { key: 'history', nameEn: 'History', nameJa: '経歴', href: '/history' },
  { key: 'projects', nameEn: 'Projects', nameJa: 'プロジェクト', href: '/projects' },
];

const adminNavigation = [
  { key: 'profileEdit', nameEn: 'ProfileEdit', nameJa: 'プロフィール編集', href: '/mypage/profileEdit' },
  { key: 'skillEdit', nameEn: 'SkillEdit', nameJa: 'スキル編集', href: '/mypage/skillEdit' },
  { key: 'historyEdit', nameEn: 'HistoryEdit', nameJa: '経歴編集', href: '/mypage/historyEdit' },
];

export default function Header() {
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(false);
  const user = useSupabaseUser();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const { locale, setLocale } = useLocale();

  // theme 初期化
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const prefersDark =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial: 'light' | 'dark' =
        stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light';
      setTheme(initial);
      const root = document.documentElement;
      if (initial === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
      try {
        localStorage.setItem('theme', initial);
      } catch { }
    } catch {
      setTheme('dark');
    }
  }, []);

  const handleSignOut = async () => {
    setDialogOpen(false);
    const { error } = await createSupabaseClient().auth.signOut();
    if (error) {
      console.error('サインアウト失敗:', error.message);
      alert('サインアウトに失敗しました');
      return;
    }
    window.location.href = `/login?lang=${locale}`;
  };

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.pageYOffset;
      setHideHeader(y > last && y > 10);
      last = y;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isMyPage = pathname.startsWith('/mypage');
  const navigation = isMyPage ? (user === null ? baseNavigation : adminNavigation) : baseNavigation;

  return (
    <div
      className={`fixed-menu top-0 z-10 h-16 pt-6 transition-all duration-300 ${hideHeader ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
    >
      <ConfirmDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleSignOut}
        title={locale === 'ja' ? 'サインアウト' : 'Sign out'}
        message={locale === 'ja' ? '本当にサインアウトしますか？' : 'Are you sure you want to sign out?'}
        confirmText={locale === 'ja' ? 'サインアウト' : 'Sign out'}
        cancelText={locale === 'ja' ? 'キャンセル' : 'Cancel'}
      />

      <div className="sm:px-8 w-full">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              {/* 3カラムバランス: 左=ロゴ, 中央=ナビ, 右=言語+テーマ */}
              <div className="relative flex items-center gap-4">
                {/* Left: Logo */}
                <div className="flex flex-1">
                  <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                    <button
                      onClick={
                        user
                          ? () => setDialogOpen(true)
                          : () => (window.location.href = `/login?lang=${locale}`)
                      }
                      className="pointer-events-auto"
                      aria-label={locale === 'ja' ? 'サインアウト' : 'Sign out'}
                    >
                      <img
                        alt=""
                        width="512"
                        height="512"
                        decoding="async"
                        className="rounded-full object-cover bg-zinc-100 dark:bg-zinc-800 h-9 w-9"
                        sizes="2.25rem"
                        src="/images/Temmyicon2.png?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      />
                    </button>
                  </div>
                </div>

                {/* Center: Navigation */}
                <div className="hidden md:flex md:flex-none">
                  <nav className="pointer-events-auto">
                    <ul className="flex rounded-full bg-white/90 h-10 items-center px-1.5 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                      {navigation.map((item) => {
                        const active = pathname.startsWith(item.href);
                        return (
                          <li key={item.key}>
                            <a
                              className={`relative block px-3 py-2 rounded-full transition hover:text-teal-500 dark:hover:text-teal-400 ${active ? 'text-teal-500 dark:text-teal-400' : ''
                                }`}
                              href={`${item.href}?lang=${locale}`}
                              aria-current={active ? 'page' : undefined}
                            >
                              {locale === 'ja' ? item.nameJa : item.nameEn}
                              {active && (
                                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>

                {/* Mobile: Menu Button */}
                <div className="flex flex-none md:hidden">
                  <Popover className="relative">
                    <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 h-10 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                      {locale === 'ja' ? 'メニュー' : 'Menu'}
                      <svg
                        viewBox="0 0 8 6"
                        aria-hidden="true"
                        className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                      >
                        <path
                          d="M1.75 1.75 4 4.25l2.25-2.5"
                          fill="none"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </PopoverButton>
                    <PopoverPanel
                      transition
                      className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 duration-150 bg-white ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800 transition ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                      <nav>
                        <ul className="-my-2 divide-y text-base divide-zinc-900/10 text-zinc-700 dark:divide-zinc-100/5 dark:text-zinc-300">
                          {navigation.map((item) => (
                            <li key={item.key}>
                              <a
                                href={`${item.href}?lang=${locale}`}
                                className={`block py-2 hover:text-teal-400 ${pathname.startsWith(item.href) ? 'text-teal-400' : ''
                                  }`}
                                aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
                              >
                                {locale === 'ja' ? item.nameJa : item.nameEn}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </PopoverPanel>
                  </Popover>
                </div>

                {/* Right: Language + Theme */}
                <div className="flex flex-1 justify-end gap-2">
                  {/* Language segmented */}
                  <div className="pointer-events-auto hidden sm:block">
                    <div className="flex items-center gap-1 rounded-full bg-white/90 h-10 px-1.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                      <GlobeAltIcon className="h-4 w-4 opacity-70" aria-hidden />
                      <div
                        role="tablist"
                        aria-label="language"
                        className="flex rounded-full overflow-hidden"
                      >
                        <button
                          role="tab"
                          aria-selected={locale === 'en'}
                          className={`px-2.5 text-xs font-medium leading-none h-7 ${locale === 'en'
                            ? 'bg-zinc-900/5 dark:bg-white/10 text-teal-600 dark:text-teal-400 rounded-full'
                            : 'text-zinc-700 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-400'
                            }`}
                          onClick={() => setLocale('en')}
                        >
                          EN
                        </button>
                        <button
                          role="tab"
                          aria-selected={locale === 'ja'}
                          className={`px-2.5 text-xs font-medium leading-none h-7 ${locale === 'ja'
                            ? 'bg-zinc-900/5 dark:bg-white/10 text-teal-600 dark:text-teal-400 rounded-full'
                            : 'text-zinc-700 dark:text-zinc-300 hover:text-teal-600 dark:hover:text-teal-400'
                            }`}
                          onClick={() => setLocale('ja')}
                        >
                          JP
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Theme toggle */}
                  <div className="pointer-events-auto">
                    <button
                      type="button"
                      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                      className="group rounded-full bg-white/90 h-10 px-3 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                      onClick={() =>
                        setTheme((t) => {
                          const next = (t === 'dark' ? 'light' : 'dark') as 'light' | 'dark';
                          const root = document.documentElement;
                          if (next === 'dark') root.classList.add('dark');
                          else root.classList.remove('dark');
                          try {
                            localStorage.setItem('theme', next);
                            document.cookie = `theme=${next}; path=/; max-age=31536000`;
                          } catch { }
                          return next;
                        })
                      }
                    >
                      <SunIcon
                        aria-hidden
                        className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden"
                      />
                      <MoonIcon
                        aria-hidden
                        className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* /row */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
