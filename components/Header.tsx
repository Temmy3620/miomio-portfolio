'use client';

import { usePathname } from 'next/navigation';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useSupabaseUser } from '@/lib/useRequireSession';
import { useLocale } from '@/components/LocaleProvider';
import ConfirmDialog from '@/components/ConfirmDialog';

const baseNavigation = [
  { key: 'profile', nameEn: 'Profile', nameJa: 'プロフィール', href: '/profile' },
  { key: 'skill', nameEn: 'Skill', nameJa: 'スキル', href: '/skillset' },
  { key: 'history', nameEn: 'History', nameJa: '経歴', href: '/history' },
  { key: 'projects', nameEn: 'Projects', nameJa: 'プロジェクト', href: '/projects' }
];

const adminNavigation = [
  { key: 'profileEdit', nameEn: 'ProfileEdit', nameJa: 'プロフィール編集', href: '/mypage/profileEdit' },
  { key: 'skillEdit', nameEn: 'SkillEdit', nameJa: 'スキル編集', href: '/mypage/skillEdit' },
  { key: 'historyEdit', nameEn: 'HistoryEdit', nameJa: '経歴編集', href: '/mypage/historyEdit' }
];

export default function Header() {
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(false);
  const user = useSupabaseUser();
  const [dialogOpen, setDialogOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)
  const { locale, setLocale } = useLocale();

  // Initialize and apply theme once mounted
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial: 'light' | 'dark' = (stored === 'light' || stored === 'dark') ? stored : (prefersDark ? 'dark' : 'light')
      setTheme(initial)
      const root = document.documentElement
      if (initial === 'dark') root.classList.add('dark')
      else root.classList.remove('dark')
      try { localStorage.setItem('theme', initial) } catch { }
    } catch {
      setTheme('dark')
    }
  }, [])

  const handleSignOut = async () => {
    console.log('サインアウト処理を実行')
    setDialogOpen(false)

    const { error } = await createSupabaseClient().auth.signOut()
    if (error) {
      console.error('サインアウト失敗:', error.message)
      alert('サインアウトに失敗しました')
      return
    }

    window.location.href = `/login?lang=${locale}`
  }

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setHideHeader(currentScroll > lastScroll && currentScroll > 10);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMyPage = pathname.startsWith('/mypage');
  const navigation = isMyPage ? (user === null ? baseNavigation : adminNavigation) : baseNavigation;
  return (
    <div className={`fixed-menu top-0 z-10 h-16 pt-6 transition-all duration-300 ${hideHeader ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
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
              <div className="relative flex gap-4">
                {/* Logo */}
                <div className="flex flex-1">
                  <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                    <button
                      onClick={user
                        ? async () => {
                          setDialogOpen(true);
                        }
                        : () => {
                          window.location.href = `/login?lang=${locale}`;
                        }
                      }
                      className="pointer-events-auto"
                      aria-label={locale === 'ja' ? 'サインアウト' : 'Sign out'}
                    >
                      <img
                        alt=""
                        fetchPriority="high"
                        width="512"
                        height="512"
                        decoding="async"
                        className="rounded-full object-cover bg-zinc-100 dark:bg-zinc-800 h-9 w-9"
                        sizes="2.25rem"
                        src='/images/Temmyicon2.png?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      />
                    </button>
                  </div>
                </div>
                {/* Menu Button (Mobile) */}
                <div className="flex flex-1 justify-end md:justify-center">
                  <Popover className="relative md:hidden">
                    <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                      {locale === 'ja' ? 'メニュー' : 'Menu'}
                      <svg
                        viewBox="0 0 8 6"
                        aria-hidden="true"
                        className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                      >
                        <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </PopoverButton>
                    <PopoverPanel
                      transition
                      className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 duration-150 bg-white ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800 transition ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                      <nav className="">
                        <ul className="-my-2 divide-y text-base divide-zinc-900/10 text-zinc-700 dark:divide-zinc-100/5 dark:text-zinc-300">
                          {navigation.map((item) => (
                            <li key={item.key}>
                              <a
                                href={`${item.href}?lang=${locale}`} className={`block py-2 hover:text-teal-400 ${pathname.startsWith(item.href) ? 'text-teal-400' : ''}`}
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
                {/* Navigation Links (Desktop) */}
                <nav className="pointer-events-auto hidden md:block">
                  <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                    {navigation.map((item) => (
                      <li key={item.key}>
                        <a
                          className={`relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${pathname.startsWith(item.href) ? 'text-teal-500 dark:text-teal-400' : ''}`}
                          key={item.key}
                          href={`${item.href}?lang=${locale}`}
                          aria-current={pathname === item.href ? 'page' : undefined}
                        >
                          {locale === 'ja' ? item.nameJa : item.nameEn}
                          {pathname.startsWith(item.href) && (
                            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                {/* Theme + Language Toggles (Right) */}
                <div className="flex items-center gap-2 justify-end md:flex-1">
                  {/* Language Toggle */}
                  <div className="pointer-events-auto">
                    <div className="rounded-full bg-white/90 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                      <button
                        type="button"
                        className={`px-3 py-2 text-sm font-medium ${locale === 'en' ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-700 dark:text-zinc-300'} hover:text-teal-600 dark:hover:text-teal-400`}
                        onClick={() => setLocale('en')}
                      >
                        English
                      </button>
                      <span className="text-zinc-300 dark:text-zinc-600">|</span>
                      <button
                        type="button"
                        className={`px-3 py-2 text-sm font-medium ${locale === 'ja' ? 'text-teal-600 dark:text-teal-400' : 'text-zinc-700 dark:text-zinc-300'} hover:text-teal-600 dark:hover:text-teal-400`}
                        onClick={() => setLocale('ja')}
                      >
                        日本語
                      </button>
                    </div>
                  </div>
                  <div className="pointer-events-auto">
                    <button
                      type="button"
                      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                      onClick={() => {
                        setTheme((t) => {
                          const next = (t === 'dark' ? 'light' : 'dark') as 'light' | 'dark'
                          const root = document.documentElement
                          if (next === 'dark') root.classList.add('dark')
                          else root.classList.remove('dark')
                          try {
                            localStorage.setItem('theme', next)
                            document.cookie = `theme=${next}; path=/; max-age=31536000`
                          } catch { }
                          return next
                        })
                      }}
                    >
                      <SunIcon aria-hidden className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden" />
                      <MoonIcon aria-hidden className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
