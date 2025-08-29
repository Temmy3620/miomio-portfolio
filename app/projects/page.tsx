'use client';

import { motion } from "framer-motion";
import { useLocale } from '@/components/LocaleProvider';

const projects = [
  {
    name: 'Microsoft Send OfflineConvertions',
    textColor: 'text-blue-700',
    href: './projects/MicrosoftBingApi',
    imageSrc: 'https://media.licdn.com/dms/image/D4E12AQG-VLYWTLqTBw/article-cover_image-shrink_720_1280/0/1723114682752?e=2147483647&v=beta&t=fvzCJ8dOVMSS1TV-xYkkUvBQ_XNP3qqTY6fw56T9494',
  },
  //{
  //  name: 'Google Ads User Data Send',
  //  textColor: 'text-red-700',
  //  href: './projects/GoogleAdsUserDataSend',
  //  imageSrc: 'https://whello.id/wp-content/uploads/2021/03/belajar-google-ads.jpg',
  //},
  {
    name: 'In preparation...',
    textColor: 'text-gray-700',
    href: '#',
    imageSrc: 'https://yamaichiba.com/wp-content/uploads/2017/11/noimage.png',
  },
  {
    name: 'In preparation...',
    textColor: 'text-gray-700',
    href: '#',
    imageSrc: 'https://yamaichiba.com/wp-content/uploads/2017/11/noimage.png',
  },
  {
    name: 'In preparation...',
    textColor: 'text-gray-700',
    href: '#',
    imageSrc: 'https://yamaichiba.com/wp-content/uploads/2017/11/noimage.png',
  },
  {
    name: 'In preparation...',
    textColor: 'text-gray-700',
    href: '#',
    imageSrc: 'https://yamaichiba.com/wp-content/uploads/2017/11/noimage.png',
  },
];

export default function Projects() {
  const { locale } = useLocale();
  const t = {
    title: locale === 'ja'
      ? 'エンジニアとして取り組んできた制作物や、必要から生まれたプロジェクト'
      : 'Creations from my engineering efforts and things born out of necessity.',
    lead: locale === 'ja'
      ? 'これまで手がけたプロジェクトの一部を紹介します。多くはオープンソース化されています。気になるものがあれば、ぜひコードをご覧いただき、改善アイデアがあればコントリビュートしてください。'
      : 'I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.',
  };
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
        <motion.ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.li
              key={index}
              className="group relative flex flex-col items-start"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a href={project.href} className="group">
                <div className="md:w-64 md:h-40 overflow-hidden rounded-2xl bg-gray-200 relative">
                  <img
                    src={project.imageSrc}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="h-full w-full object-cover opacity-40 transition-opacity duration-250 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 flex items-end justify-start transition-opacity duration-250 opacity-100 group-hover:opacity-10">
                    <p className={`text-xl font-bold p-3 ${project.textColor}`}>{project.name === 'In preparation...' ? (locale === 'ja' ? '準備中...' : 'In preparation...') : project.name}</p>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
