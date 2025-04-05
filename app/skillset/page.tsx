import SkillRadarChart from "../components/SkillRadarChart";

const frontEnd = [
  { subject: 'HTML/CSS', value: 3 },
  { subject: 'TypeScript', value: 2 },
  { subject: 'React.js', value: 2 },
  { subject: 'Next.js', value: 2 },
  { subject: 'Vue.js', value: 2 },
  { subject: 'Nuxt.js', value: 2 },
]

const backEnd = [
  { subject: 'PHP', value: 5 },
  { subject: 'Java', value: 1 },
  { subject: 'Python', value: 1 },
  { subject: 'Laravel', value: 2 },
  { subject: 'MySQL', value: 4 },
  { subject: 'MongoDB', value: 4 },
]

const DevOps = [
  { subject: 'AWS', value: 4 },
  { subject: 'Docker', value: 3 },
  { subject: 'GitHub', value: 4 },
  { subject: 'GCP', value: 2 },
  { subject: 'Azure', value: 1 },
  { subject: 'PHPUnit', value: 2.5 },
]

export default function SkillSet() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
          Writing about my skills as an engineer.
        </h1>
        <p className="mt-6 text-base text-zinc-400">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <p className="mt-1 text-base text-zinc-400">
          I have graphically summarized the skills I have acquired through dedicated practice. While my expertise is broad and general, I have made an effort to improve my skills across a wide range, from frontend to backend development. My strength lies in being an all-rounder capable of adapting to various tasks; however, I am aware of my overall lack of depth and specialization. Moving forward, I plan to increase my involvement in backend development, including cloud-related work, to gradually deepen my expertise.
        </p>
        <p className="mt-5 text-base text-zinc-400">
          ※ Only technologies I have used in actual work are included.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 mx-auto mt-10">
          <SkillRadarChart title="Front end" data={frontEnd} />
          <SkillRadarChart title="Back end" data={backEnd} radarColor="#66cdaa" />
          <SkillRadarChart title="DevOps" data={DevOps} radarColor="#ffffe0" />
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-zinc-300">Skill Level Guide</h2>
          <p className="my-1 text-base text-zinc-400">
            The following is a guide to understanding the charts above.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-zinc-700 text-zinc-400">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="py-2 px-4 border-b border-zinc-700">Level</th>
                  <th className="py-2 px-4 border-b border-zinc-700">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-700">1</td>
                  <td className="py-2 px-4 border-b border-zinc-700">Lightly used / experimental level</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-700">2</td>
                  <td className="py-2 px-4 border-b border-zinc-700">Several months of practical use, still room to improve</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-700">3</td>
                  <td className="py-2 px-4 border-b border-zinc-700">Capable of practical use at a professional level</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-zinc-700">4</td>
                  <td className="py-2 px-4 border-b border-zinc-700">Advanced implementation and optimization skills, trusted in team</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">5</td>
                  <td className="py-2 px-4">Expert level: can lead, teach, and drive technical decisions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
