const articles = [
  {
    title: 'I’m starting my own business and beginning my career as a freelance engineer',
    date: {
      start: '2024-09-30'
    },
  },
  {
    title: 'I have been contracted by Lograph Inc. for outsourced work.',
    date: {
      start: '2024-10-01'
    },
  },
  {
    title: 'Lograph Inc: Implementing the Offline Conversion API using the Microsoft Bing API.',
    date: {
      start: '2024-10-01',
      end: '2024-10-30'
    },
    description:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself',
    link: {
      label: 'Detail Product',
      href: '#'
    },
  },
];

export default function Experience() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
          Writing on software design, company building, and the aerospace industry.
        </h1>
        <p className="mt-6 text-base text-zinc-400">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:pl-6 md:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-8">
            {articles.map((article) => (
              <div key={article.title} className="md:grid md:grid-cols-4 md:items-baseline">
                <div className="md:col-span-3 flex flex-col items-start">
                  <h2 className="text-base font-semibold tracking-tight text-zinc-100">{article.title}</h2>

                  {article.description && (
                    <p className="relative z-10 mt-2 text-sm text-zinc-400">
                      {article.description}
                    </p>
                  )}
                  {article.link?.href && (
                    <a href="#" className="hover:opacity-100" target="_blank" rel="noopener noreferrer">
                      <div className="relative z-10 mt-2 flex items-center text-sm font-medium text-teal-500 hover:bg-zinc-500/25 rounded-lg sm:rounded-xl lg:rounded-2xl py-1 px-3">
                        {article.link.label}
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </a>
                  )}

                </div>
                <time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500">
                  {new Date(article.date.start).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
                  {article.date.end && (
                    <>
                      <span className="mx-2">|</span><br />
                      {new Date(article.date.end).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                      <br />
                    </>
                  )}
                </time>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
