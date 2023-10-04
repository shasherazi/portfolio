import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import skills from "../data/skills.json";

type Skill = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const skillsList: Skill[] = skills;

export default function Home() {
  return (
    <main className="font-sans flex flex-col px-4 home pb-10 pr-6">
      <div className="header">
        <h2 className="text-3xl mt-10">heloo 👋</h2>
        <h1 className="font-serif text-4xl mt-5 ml-6">
          I am <span className="italic font-bold">shasherazi</span>, an{" "}
          <span className="text-[#3DA639]">open source</span> enthusiast{" "}
          interested in <span className="text-[#F79B33]">Linux</span>,{" "}
          <span className="text-[#5E97D0]">C</span>,{" "}
          <span className="text-[#044F88]">C++</span>,{" "}
          <span className="text-[#3773A5]">Python</span>,{" "}
          <span className="text-[#b21e00]">Rust</span>, and{" "}
          <span className="text-[#00FF00]">hacking</span>, and a{" "}
          <span className="decoration-wavy underline underline-offset-8 decoration-[#FF3FA4] whitespace-nowrap">
            web developer
          </span>
          .
        </h1>
      </div>

      <div className="about mt-10">
        <h2 className="font-serif text-4xl mt-10">about me</h2>
        <p className="mt-5 ml-6 text-justify">
          Growing up, I would always disassemble every one of my toys on the
          first day I got them to understand what was happening under the hood.
          Eventually, I realized I could experiment more on the software side
          without any physical damage.
          <br />
          <br /> Fast forward to now, I have spent 1000+ hours building
          full-stack projects using pair programming and collaborating with
          developers worldwide. My hobbies have also evolved. I have automated
          nearly all the boring tasks in my development workflow using scripts.
          I disassemble software in my free time to find exploits and make them
          secure.
          <br />
          <br />I have experience with Python, Nodejs, React & Redux,
          TypeScript, and Ruby on Rails. I’m always learning new skills like
          Django, C/C++, Rust, DevOps, ethical hacking, etc. If you&apos;re
          interested in discussing a project, sharing ideas, or simply
          connecting with a fellow enthusiast, feel free to reach out.
        </p>
      </div>

      <div className="skills mt-10">
        <h2 className="font-serif text-4xl mt-10">skills</h2>
        <p className="my-5">
          Here are some of my skills in no particular order:
        </p>
        <ul className="text-2xl ml-6 flex flex-wrap gap-2">
          {skillsList.map((skill, index) => (
            <li key={index}>
              <Image
                src={skill.src}
                width={skill.width}
                height={skill.height}
                alt={skill.alt}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="contact mt-10">
        <h2 className="font-serif text-4xl mt-10">contact</h2>
        <ul className="text-2xl ml-6 leading-tight">
          <li className="mt-5">
            <a
              href="https://github.com/shasherazi"
              className="inline-flex items-center gap-2 hover:underline"
              target="_blank"
            >
              GitHub{" "}
              <span className="text-[#161614]">
                <FiExternalLink />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shasherazi"
              className="inline-flex items-center gap-2 hover:underline"
              target="_blank"
            >
              LinkedIn{" "}
              <span className="text-[#006699]">
                <FiExternalLink />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.buymeacoffee.com/syedhassanaskri"
              className="inline-flex items-center gap-2 hover:underline"
              target="_blank"
            >
              Buy Me A Coffee{" "}
              <span className="text-[#ffdd00]">
                <FiExternalLink />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://fosstodon.org/@shasherazi"
              className="inline-flex items-center gap-2 hover:underline"
              target="_blank"
            >
              Mastodon{" "}
              <span className="text-[#6364FF]">
                <FiExternalLink />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
