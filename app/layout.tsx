"use client";

import "./globals.css";
import Script from 'next/script';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      <body className="flex h-full bg-black">
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-zinc-900 ring-zinc-300/20"></div>
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
