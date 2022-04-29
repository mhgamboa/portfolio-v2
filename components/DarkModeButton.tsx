import React from "react";

interface props {
  dark: string;
  toggleDark: React.Dispatch<React.SetStateAction<string>>;
}

function DarkModeButton({ toggleDark, dark }: props) {
  return (
    <button
      className="absolute top-5 right-5 w-10 h-5 md:w-12 md:h-6 rounded-2xl bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={() => toggleDark((dark) => (dark === "dark" ? "" : "dark"))}
    >
      <div
        id="switch-toggle"
        className="w-6 h-6 md:w-7 md:h-7 relative rounded-full transition duration-500 transform p-1 text-white bg-yellow-500 -translate-x-2 dark:bg-gray-700 dark:translate-x-full"
      >
        {dark === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </div>
    </button>
  );
}

export default DarkModeButton;
