'use client';

import { DateBanner } from "@/components/DateBanner";
import { motion } from "framer-motion";
import { useLocale } from '@/components/LocaleProvider';
import articles from '@/data/history.json';

type HistoryLink = {
  label: string;
  labelJa?: string;
  href: string;
};

type HistoryArticle = {
  title: string;
  titleJa?: string;
  date: string; // YYYY-MM
  description?: string;
  descriptionJa?: string;
  responsibilities?: string;
  responsibilitiesJa?: string;
  environment?: string;
  environmentJa?: string;
  infrastructure?: string;
  infrastructureJa?: string;
  teamRole?: string;
  teamRoleJa?: string;
  link?: HistoryLink;
};

export default function History() {
  const { locale } = useLocale();
  const t = {
    title: locale === 'ja'
      ? '携わってきたプロジェクト、受託案件、これまでの経歴について'
      : 'Writing about the projects I have been involved in, freelance work, and my career history',
    lead: locale === 'ja'
      ? '取り組んできた内容を時系列でまとめています。'
      : 'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
  };
  // YYYY-MM の文字列で降順ソート
  const orderedArticles: HistoryArticle[] = [...(articles as HistoryArticle[])].sort(
    (a, b) => a.date.localeCompare(b.date)
  );
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-900 dark:text-zinc-100">
            {t.title}
          </h1>
        </motion.div>
        <motion.p
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t.lead}
        </motion.p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="lg:border-l lg:pl-6 lg:border-zinc-900/10 dark:border-zinc-700/40">
          <motion.div initial="hidden" animate="visible" className="flex max-w-3xl flex-col space-y-8">
            {orderedArticles.map((article) => (

              <motion.div
                key={`${article.date}-${article.title}`}
                className="lg:grid lg:grid-cols-4 lg:items-baseline"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <motion.time
                  className="mt-1 relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <DateBanner date={new Date(`${article.date}-01`)} />
                </motion.time>
                <div className="lg:col-span-3 flex flex-col items-start">
                  <motion.h2
                    className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {locale === 'ja' ? article.titleJa ?? article.title : article.title}
                  </motion.h2>

                  {(() => {
                    const pick = (en?: string, ja?: string) =>
                      locale === 'ja' ? (ja ?? en) : en;

                    const fields = [
                      {
                        label: locale === 'ja' ? '【担当業務】' : 'Responsibilities: ',
                        value: pick(article.responsibilities, article.responsibilitiesJa),
                      },
                      {
                        label: locale === 'ja' ? '【開発環境】' : 'Tech Stack: ',
                        value: pick(article.environment, article.environmentJa),
                      },
                      {
                        label: locale === 'ja' ? '【インフラ】' : 'Infrastructure: ',
                        value: pick(article.infrastructure, article.infrastructureJa),
                      },
                      {
                        label: locale === 'ja' ? '【メンバー構成/役割】' : 'Team/Role: ',
                        value: pick(article.teamRole, article.teamRoleJa),
                      },
                    ].filter((f) => Boolean(f.value));

                    if (fields.length > 0) {
                      return (
                        <motion.div
                          className="relative z-10 mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          {fields.map((f, idx) => (
                            <div key={idx} className="leading-6">
                              <span className="font-medium text-zinc-700 dark:text-zinc-300">{f.label}</span>
                              <span>{f.value}</span>
                            </div>
                          ))}
                        </motion.div>
                      );
                    }

                    return null;
                  })()}
                  {article.link?.href && (
                    <motion.a
                      href={`${article.link.href}?lang=${locale}`}
                      className="hover:opacity-100"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className="relative z-10 mt-2 flex items-center text-sm font-medium text-teal-500 hover:bg-zinc-500/25 rounded-lg sm:rounded-xl lg:rounded-2xl py-1 px-3">
                        {locale === 'ja' ? article.link.labelJa ?? article.link.label : article.link.label}
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
