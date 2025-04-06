'use client';

import { DateBanner } from "@/components/DateBanner";
import { motion } from "framer-motion";

const articles = [
  //{
  //  title: 'a certain advertising company: Implementing enhanced user data functionality using the Google Ads API.',
  //  date: {
  //    start: '2024-11-08'
  //  },
  //  description:
  //    'Improved user features in accordance with the company’s policy, and worked closely with the project manager to build the best possible system.',
  //  link: {
  //    label: "Google Ads Send User's Data Project",
  //    href: './projects/GoogleAdsUserDataSend'
  //  },
  //},
  {
    title: 'a certain advertising company: Implementing the Offline Conversion API using the Microsoft Bing API.',
    date: {
      start: '2024-10-01'
    },
    description:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself',
    link: {
      label: 'Microsoft Bing API Project',
      href: './projects/MicrosoftBingApi'
    },
  },
  {
    title: 'I have been contracted by a certain advertising company. for outsourced work.',
    date: {
      start: '2024-10-01'
    },
  },
  {
    title: 'I’m starting my own business and beginning my career as a freelance engineer',
    date: {
      start: '2024-09-30'
    },
  }
];

export default function History() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
            Writing about the projects I have been involved in, freelance work, and my career history
          </h1>
        </motion.div>
        <motion.p
          className="mt-6 text-base text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </motion.p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="lg:border-l lg:pl-6 lg:border-zinc-700/40">
          <motion.div initial="hidden" animate="visible" className="flex max-w-3xl flex-col space-y-8">
            {articles.map((article) => (

              <motion.div
                key={article.title}
                className="lg:grid lg:grid-cols-4 lg:items-baseline"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <motion.time
                  className="mt-1 relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <DateBanner date={new Date(article.date.start)} />
                </motion.time>
                <div className="lg:col-span-3 flex flex-col items-start">
                  <motion.h2
                    className="text-base font-semibold tracking-tight text-zinc-100"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {article.title}
                  </motion.h2>

                  {article.description && (
                    <motion.p
                      className="relative z-10 mt-2 text-sm text-zinc-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {article.description}
                    </motion.p>
                  )}
                  {article.link?.href && (
                    <motion.a
                      href={article.link.href}
                      className="hover:opacity-100"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="relative z-10 mt-2 flex items-center text-sm font-medium text-teal-500 hover:bg-zinc-500/25 rounded-lg sm:rounded-xl lg:rounded-2xl py-1 px-3">
                        {article.link.label}
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </motion.a>
                  )}

                </div>
              </motion.div>

            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
