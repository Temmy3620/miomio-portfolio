'use client';

import { usePathname } from 'next/navigation';
import { useSupabaseUser } from '@/lib/useRequireSession';

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

export default function Footer() {
  const pathname = usePathname();
  const user = useSupabaseUser();

  const isMyPage = pathname.startsWith('/mypage');
  const navigation = isMyPage ? (user === null ? baseNavigation : adminNavigation) : baseNavigation;
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t pb-16 pt-10 border-zinc-900/10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`transition hover:text-teal-500 dark:hover:text-teal-400 ${pathname === item.href ? 'text-teal-600 dark:text-teal-400' : ''
                          }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-500">
                    © 2024 Mio Terasaki. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
