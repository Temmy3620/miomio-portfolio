'use client';

import SkillRadarChart from "@/components/SkillRadarChart";
import { motion } from "framer-motion";
import { useLocale } from '@/components/LocaleProvider';

const frontEnd = [
  { subject: 'JavaScript', value: 4 },
  { subject: 'TypeScript', value: 3 },
  { subject: 'React.js', value: 3 },
  { subject: 'Next.js', value: 3 },
  { subject: 'Vue.js', value: 2 },
  { subject: 'Nuxt.js', value: 2 },
]

const backEnd = [
  { subject: 'PHP', value: 5 },
  { subject: 'Java', value: 1 },
  { subject: 'Python', value: 1 },
  { subject: 'Laravel', value: 4 },
  { subject: 'MySQL', value: 4 },
  { subject: 'MongoDB', value: 4 },
]

const DevOps = [
  { subject: 'AWS', value: 4 },
  { subject: 'Docker', value: 3 },
  { subject: 'GitHub', value: 4 },
  { subject: 'GCP', value: 3 },
  { subject: 'Azure', value: 1 },
  { subject: 'PHPUnit', value: 3 },
]

export default function SkillSet() {
  const { locale } = useLocale();
  const t = {
    title: locale === 'ja' ? 'エンジニアとしてのスキルについて' : 'Writing about my skills as an engineer.',
    lead: locale === 'ja'
      ? 'プログラミングやプロダクト設計など、これまでの取り組みを簡潔にまとめました。'
      : 'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
    desc1: locale === 'ja'
      ? 'これまでの学習や実務で身につけたスキルをグラフで整理しました。フロントエンドからバックエンドまで幅広く対応できるオールラウンダーとして、分野横断での改善に取り組んでいます。今後はとくにバックエンドやクラウド領域の比重を高め、専門性を深めていく予定です。'
      : 'I have graphically summarized the skills I have acquired through dedicated practice. While my expertise is broad and general, I have made an effort to improve my skills across a wide range, from frontend to backend development. My strength lies in being an all-rounder capable of adapting to various tasks; however, I am aware of my overall lack of depth and specialization. Moving forward, I plan to increase my involvement in backend development, including cloud-related work, to gradually deepen my expertise.',
    descNote: locale === 'ja' ? '※ 実務で使用した技術のみを記載しています。' : '※ Only technologies I have used in actual work are included.',
    front: 'Front end',
    back: 'Back end',
    guide: locale === 'ja' ? 'スキルレベルの目安' : 'Skill Level Guide',
    level: locale === 'ja' ? 'レベル' : 'Level',
    desc: locale === 'ja' ? '説明' : 'Description',
    devops: 'DevOps',
    lv1: locale === 'ja' ? '軽く使用／試験的段階' : 'Lightly used / experimental level',
    lv2: locale === 'ja' ? '実務で数か月使用、改善の余地あり' : 'Several months of practical use, still room to improve',
    lv3: locale === 'ja' ? '実務レベルで問題なく運用可能' : 'Capable of practical use at a professional level',
    lv4: locale === 'ja' ? '高度な実装・最適化が可能、チームから信頼' : 'Advanced implementation and optimization skills, trusted in team',
    lv5: locale === 'ja' ? 'エキスパート：主導・教育・技術判断を牽引' : 'Expert level: can lead, teach, and drive technical decisions',
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

        <motion.p
          className="mt-1 text-base text-zinc-600 dark:text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t.desc1}
        </motion.p>
        <motion.p
          className="mt-5 text-base text-zinc-600 dark:text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t.descNote}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 mx-auto mt-10">
          <SkillRadarChart title={t.front} data={frontEnd} />
          <SkillRadarChart title={t.back} data={backEnd} radarColor="#66cdaa" />
          <SkillRadarChart title={t.devops} data={DevOps} radarColor="#FAFAD2" />
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-300">{t.guide}</h2>
          <p className="my-1 text-base text-zinc-600 dark:text-zinc-400">
            {locale === 'ja' ? '上記のグラフの見方を示しています。' : 'The following is a guide to understanding the charts above.'}
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-400">
              <thead className="bg-zinc-100 dark:bg-zinc-800">
                <tr>
                  <th className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">{t.level}</th>
                  <th className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">{t.desc}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">1</td>
                  <td className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">{t.lv1}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">2</td>
                  <td className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">{t.lv2}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">3</td>
                  <td className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">{t.lv3}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">4</td>
                  <td className="py-2 px-4 border-b border-zinc-200 dark:border-zinc-700">{t.lv4}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">5</td>
                  <td className="py-2 px-4">{t.lv5}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
