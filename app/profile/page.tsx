'use client';

import React from "react";
import { motion } from "framer-motion";

const user = {
  name: "Mio Terasaki",
  imageUrl: "/images/Temmyicon.png?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  email: "me512papiko512@gmail.com",
  bio: "I’m Temmy. I currently work as a Freelance Web Developer while traveling the world.",
  interests: [
    {
      sentense:
        [
          "I’m exploring ways to work freely while traveling the world.",
          "Working in both Japan and abroad has shown me how different cultures view work, and it’s been a great source of inspiration.",
          "I’m always thinking about what kind of life truly brings happiness."
        ]
    },
    {
      sentense:
        [
          "I’m a 25-year-old freelance web engineer from Toyama, Japan.",
          "After graduating and moving to Tokyo, I worked as a company engineer for about three years before going independent."
        ]
    },
    {
      sentense:
        [
          "These days, I spend a lot of time abroad, which often makes me crave fish.",
          "I can list tons of foods I dislike, but I don’t really have a favorite."
        ]
    },
    {
      sentense:
        [
          "My hobby is watching YouTube streams.",
          "I'm especially a fan of a VTuber group called Nijisanji, and I support them a lot."
        ]
    },
    {
      sentense:
        [
          "Big fan of VTuber content, especially streams by Mito Tsukino and Ange Katrina",
          " Curious about space and technology innovations"
        ]
    },
  ],
  links: [
    {
      name: "X",
      href: "https://x.com/kbBoNj3eiRW4fvD",
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
        >
          <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/temmy_insta",
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
        >
          <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
          <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Temmy3620",
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/%E6%9C%AA%E7%B7%92-%E5%AF%BA%E5%B4%8E-25b6732b6",
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
        >
          <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
        </svg>
      ),
    },
  ],
};

const LinkButton: React.FC<{ href: string; icon: React.ReactNode; name: string }> = ({
  href,
  icon,
  name,
}) => (
  <div className="mt-4 flex">
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      href={href}
    >
      {icon}
      <span className="ml-4">Follow on {name}</span>
    </a>
  </div>
);

export default function Profile() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <motion.img
            alt={user.name}
            loading="lazy"
            width="800"
            height="800"
            decoding="async"
            className="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800"
            sizes="(min-width: 1024px) 32rem, 20rem"
            src={user.imageUrl}
            style={{ color: "transparent" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {user.bio}
          </h1>
        </motion.div>
        <motion.div
          className="mt-10 space-y-7 text-base text-zinc-600 dark:text-zinc-400"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {user.interests.map((interest, index) => (
            <motion.ul
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {interest.sentense.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </motion.ul>
          ))}
        </motion.div>
      </div>
      <div className="lg:pl-20">

        <motion.ul
          role="list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {user.links.map((link, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <LinkButton href={link.href} icon={link.icon} name={link.name} />
            </motion.li>
          ))}
          <motion.li
            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              href={`mailto:${user.email}`}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
              >
                <path
                  fillRule="evenodd"
                  d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                ></path>
              </svg>
              <span className="ml-4">{user.email}</span>
            </a>
          </motion.li>
        </motion.ul>

      </div>
    </div>
  );
}
