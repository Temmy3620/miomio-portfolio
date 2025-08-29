'use client';

import { usePathname } from 'next/navigation';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { createSupabaseClient } from '@/lib/supabaseClient';
import { useSupabaseUser } from '@/lib/useRequireSession';
import ConfirmDialog from '@/components/ConfirmDialog';

const baseNavigation = [
  { name: 'Profile', href: '/profile' },
  { name: 'Skill', href: '/skillset' },
  { name: 'History', href: '/history' },
  { name: 'Projects', href: '/projects' }
];

const adminNavigation = [
  { name: 'ProfileEdit', href: '/mypage/profileEdit' },
  { name: 'SkillEdit', href: '/mypage/skillEdit' },
  { name: 'HistoryEdit', href: '/mypage/historyEdit' }
];

export default function Header() {
  const pathname = usePathname();
  const [hideHeader, setHideHeader] = useState(false);
  const user = useSupabaseUser();
  const [dialogOpen, setDialogOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

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

    window.location.href = '/login'
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
    <div className={`fixed-menu pt-6 transition-all duration-300 ${hideHeader ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
      <ConfirmDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleSignOut}
        title="Sign out"
        message="Are you sure you want to sign out?"
        confirmText="Sign out"
        cancelText="Cancel"
      />
      <div className="sm:px-8 w-full">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="relative flex gap-4">
                {/* Logo */}
                <div className="flex flex-1">
                  <div className="h-10 w-10 rounded-full p-0.5 shadow-lg ring-1 backdrop-blur bg-white/90 ring-zinc-900/5 shadow-zinc-200/50 dark:bg-zinc-800/90 dark:ring-white/10 dark:shadow-zinc-800/5">
                    <button
                      onClick={user
                        ? async () => {
                          setDialogOpen(true);
                        }
                        : () => {
                          window.location.href = '/login';
                        }
                      }
                      className="pointer-events-auto"
                      aria-label="Sign out"
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
                    <PopoverButton className="group flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-lg ring-1 backdrop-blur bg-white/90 text-zinc-800 ring-zinc-900/5 hover:ring-zinc-900/20 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                      Menu
                      <svg
                        viewBox="0 0 8 6"
                        aria-hidden="true"
                        className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-600 dark:group-hover:stroke-zinc-400"
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
                            <li key={item.name}>
                              <a
                                href={item.href} className={`block py-2 hover:text-teal-400 ${pathname.startsWith(item.href) ? 'text-teal-400' : ''}`}
                                aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
                              >
                                {item.name}
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
                  <ul className="flex rounded-full px-3 text-sm font-medium shadow-lg ring-1 backdrop-blur bg-zinc-100 text-zinc-800 ring-zinc-900/5 shadow-zinc-200/50 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:shadow-zinc-800/5">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          className={`relative transition hover:text-teal-500 block px-3 py-2 ${pathname.startsWith(item.href) ? 'text-teal-400' : 'text-zinc-700 dark:text-gray-200'}`}
                          key={item.name}
                          href={item.href}
                          aria-current={pathname === item.href ? 'page' : undefined}
                        >
                          {item.name}
                          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                {/* Theme Toggle (Right) */}
                <div className="hidden md:flex flex-1 justify-end">
                  <button
                    type="button"
                    aria-label="Toggle theme"
                    onClick={() => {
                      setTheme((t) => {
                        const next = (t === 'dark' ? 'light' : 'dark') as 'light' | 'dark'
                        const root = document.documentElement
                        if (next === 'dark') root.classList.add('dark')
                        else root.classList.remove('dark')
                        try { localStorage.setItem('theme', next) } catch { }
                        return next
                      })
                    }}
                    className="flex items-center rounded-full px-3 py-2 text-sm font-medium shadow-lg ring-1 backdrop-blur bg-zinc-100 text-zinc-800 ring-zinc-900/5 hover:ring-zinc-900/20 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                    title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                  >
                    {theme === 'dark' ? 'Light' : 'Dark'}
                  </button>
                </div>
                {/* Theme Toggle (Mobile) */}
                <div className="md:hidden flex flex-none items-center">
                  <button
                    type="button"
                    aria-label="Toggle theme"
                    onClick={() => {
                      setTheme((t) => {
                        const next = (t === 'dark' ? 'light' : 'dark') as 'light' | 'dark'
                        const root = document.documentElement
                        if (next === 'dark') root.classList.add('dark')
                        else root.classList.remove('dark')
                        try { localStorage.setItem('theme', next) } catch { }
                        return next
                      })
                    }}
                    className="flex items-center rounded-full px-3 py-2 text-sm font-medium shadow-lg ring-1 backdrop-blur bg-zinc-100 text-zinc-800 ring-zinc-900/5 hover:ring-zinc-900/20 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                    title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
                  >
                    {theme === 'dark' ? 'Light' : 'Dark'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
