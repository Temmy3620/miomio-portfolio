import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "miomio portfolio",
  description: "Generated by create next app",
};

const user = {
  name: 'Mio Terasaki',
  email: 'me512papiko512@gmail.com',
  imageUrl:
    '/images/Temmyicon.png?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
      <body>
        <div className="hidden md:block">
          <div className="fixed-menu flex items-center justify-between p-8 mx-20">
            <img src={user.imageUrl} alt="Icon" className="w-10 h-10 rounded-full border border-gray-400 mr-3 shadow-md" />
            <nav className="p-1 bg-white rounded-full shadow-md">
              <ul className="flex space-x-4 px-5 py-1">
                {navigation.map((item) => (
                  <li key={item.name} className="text-gray-700 hover:text-teal-500">
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <main className="mt-40 mx-20">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
