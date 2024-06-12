import "./App.css";
import { abrilFatface } from "./fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="left-bar px-10 text-2xl border-r border-[#393E46] sticky min-h-screen h-screen top-0">
        <ul
          className={`flex flex-col h-full justify-center gap-8 ${abrilFatface.className} underline decoration-[#00ADB5] decoration-4`}
        >
          <li>
            <a href="#intro">about</a>
          </li>
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div className="right-bar  w-full">
        <div className="intro h-screen snap-start pl-20" id="intro">
          <h1 className="text-3xl pt-20">hi, im Syed Hassan Askri</h1>
          <p className="text-xl pt-8">I am a full stack developer</p>
        </div>

        <div className="worK h-screen snap-start" id="work">
          worK
        </div>

        <div className="contact h-screen snap-start" id="contact">
          contact
        </div>
      </div>
    </main>
  );
}
