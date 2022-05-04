import React from "react";
import Image from "next/image";

// import { ReactComponent as ReactIcon } from "../../img/icons/react.svg";
// import { ReactComponent as JSIcon } from "../../img/icons/javascript.svg";
// import { ReactComponent as HTMLIcon } from "../../img/icons/html5.svg";
// import { ReactComponent as CSSIcon } from "../../img/icons/css.svg";
// import { ReactComponent as TailwindIcon } from "../../img/icons/tailwindcss.svg";
// import { ReactComponent as D3Icon } from "../../img/icons/d3.svg";
// import { ReactComponent as MongoDBIcon } from "../../img/icons/mongodb.svg";
// import { ReactComponent as NodeIcon } from "../../img/icons/node.svg";
// import { ReactComponent as ExpressIcon } from "../../img/icons/express.svg";
// import { ReactComponent as BootstrapIcon } from "../../img/icons/bootstrap.svg";

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

function ProjectCard({ name, description, url, githubLink, imageLink }: props) {
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
        {/* {technologies.includes("mongodb") && (
          <MongoDBIcon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("express") && (
          <ExpressIcon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("html") && (
          <HTMLIcon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("css") && (
          <CSSIcon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("javascript") && (
          <JSIcon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("react") && (
          <ReactIcon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("node") && (
          <NodeIcon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("tailwindcss") && (
          <TailwindIcon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("d3") && (
          <D3Icon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )}
        {technologies.includes("bootstrap") && (
          <BootstrapIcon className="h-10 xl:h-12 2xl:h-14" fill={isDark ? "white" : ""} />
        )} */}
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
