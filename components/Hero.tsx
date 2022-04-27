import React from "react";

interface props {
  dark: string;
  toggleDark: React.Dispatch<React.SetStateAction<string>>;
}

const Hero = ({ dark, toggleDark }: props) => {
  return (
    <section className="h-screen w-full flex flex-col items-center dark:bg-gray-900 justify-center lg:items-start lg:pl-28"></section>
  );
};

export default Hero;
