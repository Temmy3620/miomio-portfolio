const projects = [
  {
    name: 'Planetaria',
    description: 'Creating technology to empower civilians to explore space on their own terms.',
    link: {
      href: 'http://planetaria.tech',
      label: 'planetaria.tech',
    },
    imageSrc: '/_next/static/media/planetaria.ecd81ade.svg',
  },
  {
    name: 'Animaginary',
    description: 'High performance web animation library, hand-written in optimized WASM.',
    link: {
      href: '#',
      label: 'github.com',
    },
    imageSrc: '/_next/static/media/animaginary.8d221e52.svg',
  },
  {
    name: 'HelioStream',
    description: 'Real-time video streaming library, optimized for interstellar transmission.',
    link: {
      href: '#',
      label: 'github.com',
    },
    imageSrc: '/_next/static/media/helio-stream.2ac8d11f.svg',
  },
  {
    name: 'cosmOS',
    description: 'The operating system that powers our Planetaria space shuttles.',
    link: {
      href: '#',
      label: 'github.com',
    },
    imageSrc: '/_next/static/media/cosmos.c70b0295.svg',
  },
  {
    name: 'OpenShuttle',
    description: 'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: {
      href: '#',
      label: 'github.com',
    },
    imageSrc: '/_next/static/media/open-shuttle.db0327e4.svg',
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name} className="group relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt={project.name}
                  src={project.imageSrc}
                  className="h-8 w-8"
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <a href={project.link.href}>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">{project.name}</span>
                </a>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                  <path
                    d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-2">{project.link.label}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
