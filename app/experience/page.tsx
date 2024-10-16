const articles = [
  {
    title: 'Crafting a design system for a multiplanetary future',
    href: '/articles/crafting-a-design-system-for-a-multiplanetary-future',
    date: '2022-09-05',
    description:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
  },
  {
    title: 'Introducing Animaginary: High performance web animations',
    href: '/articles/introducing-animaginary',
    date: '2022-09-02',
    description:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
  },
  {
    title: 'Rewriting the cosmOS kernel in Rust',
    href: '/articles/rewriting-the-cosmos-kernel-in-rust',
    date: '2022-07-14',
    description:
      'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
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
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <article key={article.title} className="md:grid md:grid-cols-4 md:items-baseline">
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl bg-zinc-800/50"></div>
                    <a href={article.href}>
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                      <span className="relative z-10">{article.title}</span>
                    </a>
                  </h2>
                  <time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5" dateTime={article.date}>
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span className="h-4 w-0.5 rounded-full bg-zinc-500"></span>
                    </span>
                    {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <p className="relative z-10 mt-2 text-sm text-zinc-400">
                    {article.description}
                  </p>
                  <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                    Read article
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                      <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
                <time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
