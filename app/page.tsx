"use client";
import "./App.css";
import { abrilFatface } from "./fonts";
import { PiArrowUpRight } from "react-icons/pi";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("intro");
  const [previousSection, setPreviousSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

      <div className="flex flex-col after-main snap-y snap-mandatory overflow-y-scroll">
        <div className="intro h-screen px-20 max-sm:px-10 pt-24 snap-start snap-always" id="intro">
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

        <div className="h-screen snap-start snap-always" id="work">
          <div className="flex flex-nowrap w-full h-full overflow-x-auto snap-x snap-mandatory">
            <div className="flex-shrink-0 flex justify-center items-center text-4xl w-screen bg-red-400 snap-center">
              work 1
            </div>
            <div className="flex-shrink-0 flex justify-center items-center text-4xl w-screen bg-accent snap-center">
              work 2
            </div>
            <div className="flex-shrink-0 flex justify-center items-center text-4xl w-screen snap-center">
              work 3
            </div>
          </div>
        </div>

        <div className="contact h-screen px-20 max-sm:px-10 pt-24 snap-start snap-always" id="contact">
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
