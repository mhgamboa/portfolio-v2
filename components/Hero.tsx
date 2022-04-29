import React from "react";
import DarkModeButton from "./DarkModeButton";
import { SiLinkedin, SiGithub } from "react-icons/si";

interface props {
  dark: string;
  toggleDark: React.Dispatch<React.SetStateAction<string>>;
}

const Hero = ({ dark, toggleDark }: props) => {
  const iconClass = "text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl dark:text-zinc-300";
  return (
    <section className="h-screen w-full flex flex-col items-center dark:bg-gray-800 justify-center lg:items-start lg:pl-28">
      <DarkModeButton toggleDark={toggleDark} dark={dark} />
      <div className="flex flex-col">
        <h1 className="text-center lg:text-left font-medium dark:text-white mb-3">
          Hi, my name is{" "}
          <span className="text-transparent bg-clip-text main-gradient">Marcus</span>
        </h1>
        <h2 className="text-center lg:text-left dark:text-white mt-1">
          I&apos;m a Full Stack Developer
        </h2>
      </div>
      <a
        href="#about-me"
        className="p-3 w-1/2 md:w-1/3 lg:w-1/3 rounded mt-10 mb-10 main-gradient text-center"
      >
        <span className="text-white text-xl md:text-3xl lg:text-3xl font-bold">
          Get to Know Me
        </span>
      </a>
      <div className="flex justify-around mb-5 w-1/2 md:w-1/3 lg:w-1/3">
        <a href="https://www.linkedin.com/in/marcus-gamboa/" target="_blank" rel="noreferrer">
          <SiLinkedin className={iconClass} />
        </a>
        <a href="https://github.com/mhgamboa" target="_blank" rel="noreferrer">
          <SiGithub className={iconClass} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
