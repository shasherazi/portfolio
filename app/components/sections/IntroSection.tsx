import { PiArrowUpRight } from "react-icons/pi";

export default function IntroSection() {
  return (
    <>
      <h1 className="text-3xl max-sm:text-2xl">
        hi, im <br />
        <span className="font-bold">Syed Hassan Askri</span>
      </h1>
      <p className="text-xl max-sm:text-base pt-8">
        i am a full-stack developer experienced in javascript, react, ruby on
        rails, and linux. open to new opportunities. i am a also a design
        enthusiast and love to work with tools like figma, krita, and blender. i
        am also a linux user and love to work with tools like neovim, tmux, and
        zsh.
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
    </>
  );
}
