"use client";
import React from "react";
import "./App.css";
import { abrilFatface } from "./fonts";
import { PiArrowUpRight } from "react-icons/pi";
import { useState, useEffect } from "react";
import works from "./data/work";
import { fontdiner_swanky } from "./utils/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("intro");
  const [previousSection, setPreviousSection] = useState("");

  useEffect(() => {
    const scrollContainer = document.querySelector(".after-main");

    const handleScroll = (e: Event) => {
      const scrollPosition = (e.target as HTMLElement).scrollTop;
      const sections: NodeListOf<HTMLDivElement> =
        document.querySelectorAll("div[id]");
      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop - 100 &&
          scrollPosition < section.offsetTop + section.offsetHeight - 100
        ) {
          if (currentSection !== section.id) {
            setPreviousSection(currentSection);
            setCurrentSection(section.id);
          }
        }
      });
    };

    scrollContainer?.addEventListener("scroll", handleScroll);
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 text-2xl max-sm:text-xl bg-background py-4 pr-8 z-50">
        <ul className={`flex justify-end gap-8 ${abrilFatface.className}`}>
          <li className="underline-animation">
            <a
              href="#intro"
              className={
                currentSection === "intro"
                  ? "underline-in"
                  : previousSection === "intro"
                  ? "underline-out"
                  : ""
              }
            >
              about
            </a>
          </li>
          <li className="underline-animation">
            <a
              href="#work"
              className={
                currentSection === "work"
                  ? "underline-in"
                  : previousSection === "work"
                  ? "underline-out"
                  : ""
              }
            >
              work
            </a>
          </li>
          <li className="underline-animation">
            <a
              href="#contact"
              className={
                currentSection === "contact"
                  ? "underline-in"
                  : previousSection === "contact"
                  ? "underline-out"
                  : ""
              }
            >
              contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col h-screen after-main snap-y snap-mandatory overflow-y-scroll">
        <div
          className="intro h-screen px-20 max-sm:px-10 pt-24 snap-start snap-always flex-shrink-0"
          id="intro"
        >
          <h1 className="text-3xl max-sm:text-2xl">
            hi, im <br />
            <span className="font-bold">Syed Hassan Askri</span>
          </h1>
          <p className="text-xl max-sm:text-base pt-8">
            i am a full-stack developer experienced in javascript, react, ruby
            on rails, and linux. open to new opportunities. i am a also a design
            enthusiast and love to work with tools like figma, krita, and
            blender. i am also a linux user and love to work with tools like
            neovim, tmux, and zsh.
          </p>
          <p className="text-xl max-sm:text-base pt-8">
            im currently a <span className="font-bold">computer science</span>{" "}
            student at{" "}
            <span className="font-bold whitespace-nowrap">
              <a
                href="https://www.uopeople.edu/"
                target="_blank"
                className="bg-[#4D3660] hover:text-white px-1"
              >
                University of the People <PiArrowUpRight className="inline" />
              </a>
            </span>
            , and an <span className="font-bold">electronics</span> student at{" "}
            <span className="font-bold whitespace-nowrap">
              <a
                href="http://gcu.edu.pk/"
                target="_blank"
                className="bg-[#800000] hover:text-white px-1"
              >
                Government College University Lahore{" "}
                <PiArrowUpRight className="inline" />
              </a>
            </span>
            . im also an alumni of{" "}
            <span className="font-bold whitespace-nowrap">
              <a
                href="https://www.microverse.org/"
                target="_blank"
                className="bg-[#743CFF] hover:text-white px-1"
              >
                microverse <PiArrowUpRight className="inline" />
              </a>
            </span>
            , a global school for remote software developers.
          </p>
        </div>

        {/* bad mein krty */}
        {/* <div className="interests h-screen" id="interests">
          interests
          <div className="[&>*]:w-16">
            <Image src={neovim} alt="neovim" />
            <Image src={linux} alt="linux" />
            <Image src={android} alt="android" />
            <Image src={blender} alt="blender" />
            <Image src={krita} alt="krita" />
            <Image src={obsidian} alt="obsidian" />
          </div>
        </div> */}

        <div
          className="h-screen snap-start snap-always flex-shrink-0"
          id="work"
        >
          <div className="no-scrollbar flex flex-nowrap w-full h-full overflow-x-auto snap-x snap-mandatory">
            {works.map((work) => (
              <div
                key={work.id}
                className="relative flex items-center lg:items-start gap-4 flex-shrink-0 w-screen h-screen snap-center px-20 max-sm:px-10 pt-28"
              >
                <div className="h-full flex flex-col pb-24">
                  <div className="mb-6">
                    <h2
                      className={`text-4xl max-sm:text-2xl font-bold mb-8 ${
                        work.name === "BalloonGame"
                          ? `text-[#5CB338] ${fontdiner_swanky.className}`
                          : ""
                      }`}
                    >
                      {work.name}
                    </h2>
                    <div className="pb-4 block md:hidden w-full">
                      <Link href={work.links.live || "#"} passHref>
                        <Image
                          src={work.image}
                          alt={work.name}
                          width={1200}
                          height={630}
                          className="rounded-xl cursor-pointer"
                        />
                      </Link>
                    </div>
                    <p className="text-xl max-sm:text-base max-w-xl">
                      {work.description
                        .split("BalloonGame")
                        .map((part, index, arr) => (
                          <React.Fragment key={index}>
                            {part}
                            {index < arr.length - 1 && (
                              <span
                                className={`text-[#5CB338] ${fontdiner_swanky.className}`}
                              >
                                BalloonGame
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                    </p>
                  </div>
                  <div className="tech flex flex-wrap gap-2">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm max-sm:text-xs border border-accent px-4 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pb-8 text-xl max-sm:text-base mt-6">
                    {work.links.live && (
                      <Link
                        href={work.links.live}
                        passHref
                        target="_blank"
                        className="hover:underline flex items-center gap-1 border border-current px-4 py-1 rounded-xl"
                      >
                        visit
                        <PiArrowUpRight />
                      </Link>
                    )}
                    {work.links.github && (
                      <Link
                        href={work.links.github}
                        passHref
                        target="_blank"
                        className="hover:underline flex items-center gap-1 border border-current px-4 py-1 rounded-xl"
                      >
                        code
                        <PiArrowUpRight />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="pt-0 lg:pt-8 hidden md:block w-full">
                  <Link href={work.links.live || "#"} passHref>
                    <Image
                      src={work.image}
                      alt={work.name}
                      width={1200}
                      height={630}
                      className="rounded-xl cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="contact h-screen px-20 max-sm:px-10 pt-24 snap-start snap-always flex-shrink-0"
          id="contact"
        >
          <h1 className="text-3xl max-sm:text-2xl">you can find me on</h1>
          <ul className="flex flex-col gap-4 pt-8 text-xl max-sm:text-base pl-4 [&_a]:p-1">
            <li>
              <a
                href="https://github.com/shasherazi"
                target="_blank"
                className="bg-[#2B3137] text-[#FAFBFC]"
              >
                github <PiArrowUpRight className="inline text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shasherazi"
                target="_blank"
                className="bg-[#0876B3] text-white"
              >
                linkedin <PiArrowUpRight className="inline text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/shasherazi"
                target="_blank"
                className="bg-[#ffe299] text-[#1d3ee2]"
              >
                instagram <PiArrowUpRight className="inline text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="mailto:hassanrandomz@gmail.com"
                target="_blank"
                className="bg-[#C71610] text-white"
              >
                email <PiArrowUpRight className="inline text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
