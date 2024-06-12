import "./App.css";
import { abrilFatface } from "./fonts";
import { PiArrowUpRight } from "react-icons/pi";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="left-bar px-10 text-3xl border-r border-[#393E46] sticky min-h-screen h-screen top-0">
        <ul
          className={`flex flex-col h-full justify-center gap-8 ${abrilFatface.className} underline decoration-[#00ADB5] decoration-4`}
        >
          <li>
            <a href="#intro">about</a>
          </li>
          <li>
            <a href="#interests">interests</a>
          </li>
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div className="right-bar w-full [&>div]:pl-20 [&>div]:pt-20 [&>div]:snap-start">
        <div className="intro h-screen" id="intro">
          <h1 className="text-3xl">hi, im Syed Hassan Askri</h1>
          <p className="text-xl pt-8">I am a full stack developer</p>
        </div>

        <div className="interests h-screen" id="interests">
          interests
          {/* split screen in half, one side shows creative interest and other shows coding.
          google which brain side is responsible for what*/}
        </div>

        <div className="worK h-screen" id="work">
          worK
        </div>

        <div className="contact h-screen" id="contact">
          <h1 className="text-3xl">you can find me on</h1>

          <ul className="flex flex-col gap-4 pt-8 text-xl pl-4 [&_a]:p-1">
            <li>
              <a
                href="https://github.com/shasherazi"
                target="_blank"
                className="hover:bg-[#2B3137] hover:text-[#FAFBFC]"
              >
                github <PiArrowUpRight className="inline text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shasherazi"
                target="_blank"
                className="hover:bg-[#0876B3] hover:text-white"
              >
                linkedin <PiArrowUpRight className="inline text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/shasherazi"
                target="_blank"
                className="hover:bg-[#ffe299] hover:text-[#1d3ee2]"
              >
                instagram <PiArrowUpRight className="inline text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
