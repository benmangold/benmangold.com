import Link from "next/link";

export default function Intro({ description = "" }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        benmangold.com
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {description}
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </h4>
    </section>
  );
}
