import "./globals.css";
import Script from 'next/script';
import { cookies } from 'next/headers';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme')?.value as 'light' | 'dark' | undefined
  const htmlClass = themeCookie === 'dark' ? 'dark' : undefined
  return (
    <html lang="en" className={htmlClass} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const stored = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
              if (theme === 'dark') document.documentElement.classList.add('dark');
              else document.documentElement.classList.remove('dark');
            } catch {}
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FGSHNZ2S1J"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FGSHNZ2S1J');
          `}
        </Script>
      </head>
      <body className="flex h-full bg-zinc-100 text-zinc-900 dark:bg-black dark:text-zinc-200">
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-900/10 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col">
            <Header />
            <main className="flex-auto">
              <div className="sm:px-8 mt-32 sm:mt-32">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html >
  );
}
