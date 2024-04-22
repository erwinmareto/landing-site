import { useEffect, useState } from "react";
import { attLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header className="padding-x absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={attLogo}
            alt="logo"
            width={75}
            height={29}
            className="object-cover"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat font-bold leading-normal text-lg text-white hover:text-white-400"
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="m-4 py-2 px-4 bg-white-400 rounded transition-colors dark:bg-slate-900 dark:text-white"
          >
            Toggle Dark Mode
          </button> */}
          <label className="relative inline-flex gap-2 items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onClick={() => setDarkMode(!darkMode)}
            />
            <div className="w-12 h-7 peer bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[2px] dark:after:bg-white after:bg-slate-900 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </label>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;

//* Note for the toggle switch:
// Here’s a breakdown of the classes used:

// relative inline-flex items-center cursor-pointer: These classes are used for the label to position the elements correctly and make the entire label clickable.

// sr-only peer: These classes are used for the input checkbox. The sr-only class hides the checkbox, and the peer class is used to style the sibling div based on the state of the checkbox.

// w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600: These classes are used for the div to style the toggle switch. The peer-checked classes are applied when the checkbox is checked.

// Let’s break down the classes used for the div:
// w-11 h-6 bg-gray-200: These classes set the width, height, and background color of the toggle switch.

// peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300: These classes remove the default outline and add a blue ring around the toggle switch when it’s focused.

// rounded-full: This class makes the toggle switch rounded.

// peer-checked:after:translate-x-full: This class moves the toggle switch to the right when it’s checked.

// after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all: These classes style the toggle switch handle.

// peer-checked:bg-blue-600: This class changes the background color of the toggle switch to blue when it’s checked.
