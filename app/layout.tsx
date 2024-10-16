import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "miomio portfolio",
  description: "Generated by create next app",
};

const user = {
  name: 'Mio Terasaki',
  email: 'me512papiko512@gmail.com',
  imageUrl2:
    '/images/Temmyicon2.png?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: './', current: true },
  { name: 'Experience', href: './experience', current: false },
  { name: 'Projects', href: './projects', current: false }
  //{ name: 'Contact', href: './contact', current: false }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-full bg-black">
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-zinc-900 ring-zinc-300/20"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col">
            <div className="fixed-menu pt-6">
              <div className="sm:px-8 w-full">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="relative flex gap-4">
                        {/* Logo */}
                        <div className="flex flex-1">
                          <div className="h-10 w-10 rounded-full p-0.5 shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 ring-white/10">
                            <a aria-label="Home" href="./" className="pointer-events-auto">
                              <img
                                alt=""
                                fetchPriority="high"
                                width="512"
                                height="512"
                                decoding="async"
                                className="rounded-full object-cover bg-zinc-800 h-9 w-9"
                                sizes="2.25rem"
                                //srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=16&q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=32&q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=48&q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=64&q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=96&q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=256&q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=384&q=75 384w"
                                src={user.imageUrl2}
                              />
                            </a>
                          </div>
                        </div>
                        {/* Menu Button (Mobile) */}
                        <div className="flex flex-1 justify-end md:justify-center">
                          <div className="pointer-events-auto md:hidden">
                            <button
                              className="group flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-lg ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10 hover:ring-white/20"


                            >
                              Menu
                              <svg
                                viewBox="0 0 8 6"
                                aria-hidden="true"
                                className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400"
                              >
                                <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        {/* Navigation Links (Desktop) */}
                        <nav className={`pointer-events-auto md:block`}>
                          <ul className="flex rounded-full px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  className="relative text-gray-200 transition hover:text-teal-500 block px-3 py-2 ${item.current ? 'text-teal-400' : ''}`}"
                                  key={item.name}
                                  href={item.href}
                                  aria-current={item.current ? 'page' : undefined}
                                >
                                  {item.name}
                                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0"></span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <main className="flex-auto">
              <div className="sm:px-8 mt-16 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="mt-32 flex-none">
              <div className="sm:px-8">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="border-t pb-16 pt-10 border-zinc-700/40">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                      <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-200">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={`transition hover:text-teal-400 ${item.current ? 'text-teal-400' : ''
                                  }`}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                          <p className="text-sm text-zinc-500">
                            © 2024 Spencer Sharp. All rights reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html >
  );
}
