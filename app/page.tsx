"use client";
import React from "react";
import "./App.css";
import { abrilFatface } from "./fonts";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";
import works from "./data/work";
import { fontdiner_swanky } from "./utils/fonts";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "./components/sections/ContactSection";
import IntroSection from "./components/sections/IntroSection";
import WorkCard from "./components/sections/work/WorkCard";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("intro");
  const [previousSection, setPreviousSection] = useState("");
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    scrollToWork(currentWorkIndex);
  }, [currentWorkIndex]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      // minimum swipe distance
      if (diff > 0) {
        setCurrentWorkIndex((prev) => Math.min(works.length - 1, prev + 1));
      } else {
        setCurrentWorkIndex((prev) => Math.max(0, prev - 1));
      }
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };

  const scrollToWork = (index: number) => {
    const container = document.querySelector(".no-scrollbar");
    const items = container?.querySelectorAll(".snap-center");
    if (container && items && items[index]) {
      container.scrollTo({
        left: (items[index] as HTMLElement).offsetLeft,
        behavior: "smooth",
      });
      setCurrentWorkIndex(index);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setCurrentWorkIndex((prev) => Math.max(0, prev - 1));
    } else if (e.key === "ArrowRight") {
      setCurrentWorkIndex((prev) => Math.min(works.length - 1, prev + 1));
    }
  };

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
          <IntroSection />
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
          className="h-screen snap-start snap-always flex-shrink-0 relative"
          id="work"
        >
          <div
            className="no-scrollbar flex flex-nowrap w-full h-full overflow-x-auto snap-x snap-mandatory"
            onTouchStart={(e) => handleTouchStart(e as unknown as TouchEvent)}
            onTouchEnd={(e) => handleTouchEnd(e as unknown as TouchEvent)}
            onTouchMove={(e) => handleTouchMove(e as unknown as TouchEvent)}
          >
            {works.map((work) => (
              <WorkCard work={work} key={work.id} />
            ))}
          </div>
          {currentWorkIndex > 0 && (
            <button
              onClick={() => setCurrentWorkIndex((prev) => prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full z-10"
              aria-label="Previous work"
            >
              <FaCircleArrowLeft className="max-md:text-2xl text-4xl" />
            </button>
          )}

          {currentWorkIndex < works.length - 1 && (
            <button
              onClick={() =>
                setCurrentWorkIndex((prev) =>
                  Math.min(works.length - 1, prev + 1),
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full z-10"
              aria-label="Next work"
            >
              <FaCircleArrowRight className="max-md:text-2xl text-4xl" />
            </button>
          )}
        </div>

        <div
          className="contact h-screen px-20 max-sm:px-10 pt-24 snap-start snap-always flex-shrink-0"
          id="contact"
        >
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
