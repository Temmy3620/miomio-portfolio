const projects = [
  {
    name: 'Microsoft Bing Api PJ',
    textColor: 'text-blue-700',
    href: './projects/MicrosoftBingApi',
    imageSrc: 'https://media.licdn.com/dms/image/D4E12AQG-VLYWTLqTBw/article-cover_image-shrink_720_1280/0/1723114682752?e=2147483647&v=beta&t=fvzCJ8dOVMSS1TV-xYkkUvBQ_XNP3qqTY6fw56T9494',
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
  {
    name: 'In preparation...',
    textColor: 'text-gray-700',
    href: '#',
    imageSrc: 'https://yamaichiba.com/wp-content/uploads/2017/11/noimage.png',
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
          Creations from my engineering efforts and things born out of necessity.
        </h1>
        <p className="mt-6 text-base text-zinc-400">
          I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={index} className="group relative flex flex-col items-start">
              <a href={project.href} className="group">
                <div className="md:w-64 md:h-40 overflow-hidden rounded-2xl bg-gray-200 relative">
                  <img
                    src={project.imageSrc}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="h-full w-full object-cover opacity-40 transition-opacity duration-250 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 flex items-end justify-start transition-opacity duration-250 opacity-100 group-hover:opacity-10">
                    <p className={`text-xl font-bold p-3 ${project.textColor}`}>{project.name}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
