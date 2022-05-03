import React from "react";
// import portrait from "../public/portrait.jpg"; //TODO: Find the best folder to store images
import Image from "next/image";

function About() {
  return (
    <section
      id="about-me"
      className="about-me font-medium pb-20 py-10 px-4 text-white flex flex-wrap min-h-full w-full justify-around dark:bg-gray-700 bg-blue-500"
    >
      <h1 className="h1 text-center mt-2 mb-12 w-full ">About Me</h1>
      <Image
        src="/portrait.jpg"
        height={44}
        width={200}
        alt="Myself"
        className="pb-1 self-center max-w-sm sm:max-w-none md:max-w-none object-cover rounded-lg w-full  sm:w-1/2 lg:w-1/3"
      />
      <div className="w-auto sm:w-1/2 text-lg text-center sm:text-left md:text-xl lg:text-2xl xl:text-3xl self-center">
        <p className="py-5 sm:leading-snug 2xl:leading-normal">
          I graduated from BYU in August 2019 with a degree in Entrepreneural Management.
        </p>

        <p className="py-5 2xl:py-18 sm:leading-snug 2xl:leading-normal">
          After working a year of working I left my job to become a self-taught software
          developer.
        </p>
        <p className="py-5 sm:leading-snug 2xl:leading-normal">
          After having built some projects, I&apos;m now hoping to get a job as a developer.
        </p>
      </div>
    </section>
  );
}

export default About;
