import Image from "next/image";
import Link from "next/link";
import { Work } from "../../../../types";
import React from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { fontdiner_swanky } from "../../../utils/fonts";

export default function WorkCard({ work }: { work: Work }) {
  return (
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
            {work.description.split("BalloonGame").map((part, index, arr) => (
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
  );
}
