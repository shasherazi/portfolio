"use client";
import "./App.css";
import { abrilFatface } from "./fonts";
import { PiArrowUpRight } from "react-icons/pi";
import { useState, useEffect } from "react";
// import Image from "next/image";
// import blender from "../public/blender.png";
// import neovim from "../public/neovim.png";
// import linux from "../public/linux.png";
// import krita from "../public/krita.png";
// import android from "../public/android.png";
// import obsidian from "../public/obsidian.png";

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
    <main className="flex flex-col min-h-screen">
      <div className="nav-bar text-2xl max-sm:text-xl sticky top-0 bg-red-900 py-4 pr-8">
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
          {/* <li>
            <a href="#interests">interests</a>
          </li> */}
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
      </div>
      <div className="right-bar w-full [&>div]:pl-20 max-sm:[&>div]:pr-10 [&>div]:pr-[12%] max-sm:[&>div]:pl-10 [&>div]:pt-24 [&>div]:snap-start">
        <div className="intro h-screen" id="intro">
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

        <div
          className="worK h-screen flex justify-center items-center"
          id="work"
        >
          <p className="text-4xl font-bold relative bottom-14">
            this part of the website is <br />
            🚧under construction🚧
          </p>
        </div>

        <div className="contact h-screen" id="contact">
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
