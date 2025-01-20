import { PiArrowUpRight } from "react-icons/pi";

export default function ContactSection() {
  return (
    <>
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
    </>
  );
}
