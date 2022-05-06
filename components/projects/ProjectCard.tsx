import React from "react";
import Image from "next/image";

import {
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiD3Dotjs,
  SiBootstrap,
} from "react-icons/si";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

interface props {
  name: string;
  description: string;
  url: string;
  githubLink: string;
  technologies: string[];
  imageLink: string | StaticImageData;
}

function ProjectCard({ name, description, url, githubLink, technologies, imageLink }: props) {
  const iconClass = "text-5xl md:text-6xl 2xl:text-7xl dark:text-zinc-300";

  return (
    <div
      className={`flex flex-col justify-between pb-5 rounded-md overflow-hidden bg-white dark:bg-gray-900 dark:white-shadow shadow-md`}
      data-aos="fade-down"
    >
      <a href={url} target="_blank" rel="noreferrer">
        <div className="relative w-full h-40">
          <Image
            src={imageLink}
            alt={`${name} project`}
            layout="fill"
            className="w-full mb-3 h-36 object-cover"
          />
        </div>
      </a>

      <h2 className="h2 text-center mb-8">{name}</h2>
      {/* Render Icons for technologies */}
      <div className="flex justify-around mb-5 lg:mt-2">
        {technologies.includes("mongodb") && <SiMongodb className="iconClass" />}
        {technologies.includes("express") && <SiExpress className="iconClass" />}
        {technologies.includes("html") && <SiHtml5 className="iconClass" />}
        {technologies.includes("css") && <SiCss3 className="iconClass" />}
        {technologies.includes("javascript") && <SiJavascript className="iconClass" />}
        {technologies.includes("react") && <SiReact className="iconClass" />}
        {technologies.includes("node") && <SiNodedotjs className="iconClass" />}
        {technologies.includes("tailwindcss") && <SiTailwindcss className="iconClass" />}
        {technologies.includes("d3") && <SiD3Dotjs className="iconClass" />}
        {technologies.includes("bootstrap") && <SiBootstrap className="iconClass" />}
      </div>
      <p className="text-center mb-5 md:mb-10 md:mt-6 mx-5 text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
        {description}
      </p>
      <div className="w-full flex justify-around">
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className="border rounded-md border-black p-3 dark:border-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl"
        >
          See Live
        </a>
        <a
          href={githubLink}
          rel="noreferrer"
          target="_blank"
          className="border rounded-md border-black p-3 dark:border-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl"
        >
          See Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
