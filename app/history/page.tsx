import { DateBanner } from "../components/DateBanner";

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
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
          Writing about the projects I have been involved in, freelance work, and my career history
        </h1>
        <p className="mt-6 text-base text-zinc-400">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="lg:border-l lg:pl-6 lg:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-8">
            {articles.map((article) => (
              <div key={article.title} className="lg:grid lg:grid-cols-4 lg:items-baseline">
                <time className="mt-1 relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500">
                  <DateBanner date={new Date(article.date.start)} />
                </time>
                <div className="lg:col-span-3 flex flex-col items-start">
                  <h2 className="text-base font-semibold tracking-tight text-zinc-100">{article.title}</h2>

                  {article.description && (
                    <p className="relative z-10 mt-2 text-sm text-zinc-400">
                      {article.description}
                    </p>
                  )}
                  {article.link?.href && (
                    <a href={article.link.href} className="hover:opacity-100" target="_blank" rel="noopener noreferrer">
                      <div className="relative z-10 mt-2 flex items-center text-sm font-medium text-teal-500 hover:bg-zinc-500/25 rounded-lg sm:rounded-xl lg:rounded-2xl py-1 px-3">
                        {article.link.label}
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </a>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
