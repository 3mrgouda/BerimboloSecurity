import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  MdAccountCircle,
  MdClose,
  MdDarkMode,
  MdLightMode,
  MdMenu,
  MdShoppingCart,
  MdSupportAgent,
} from "react-icons/md";

export default function Navbar1() {
  const [open, setOpen] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Services",
      url: "#services",
    },
    {
      id: 3,
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: 4,
      title: "Contact",
      url: "#contact",
    },
  ];

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header data-aos="fade-down" className="">
      <nav
        className={`max-[350px]:gap-0 flex items-center justify-around py-4 gap-10 md:gap-0 max-[350px]:h-16 h-20 dark:bg-black border-b-2 border-black dark:border-white bg-white dark:border-b dark:text-white mb-10 fixed z-50 w-full`}
      >
        <div className="logo flex items-center gap-3 sm:gap-10">
          <button
            className="max-[350px]:text-3xl text-4xl md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
          <a className="max-[350px]:text-xl text-2xl lg:text-4xl " href="#">
            <span className="font-bold text-orange-500">Berimbolo</span>Security{" "}
          </a>
        </div>
        <div className="links hidden md:flex">
          <ul className={`md:flex md:gap-5 text-xl lg:text-2xl`}>
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-orange-500"
                onClick={() => setOpen(false)} // Close nav on click
              >
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <button className="text-xl" onClick={handleThemeSwitch}>
          {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </nav>

      <nav
        className={`NavigationForMobile duration-300 ${
          !open ? "hidden" : "block"
        } dark:bg-black dark:border-b-white border-b-black border-b-2 bg-white py-4 mt-16 max-[350px]:mt-10 md:hidden fixed z-40 w-full`}
      >
        <div className="links md:hidden">
          <ul className="flex flex-col items-center w-full">
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:bg-orange-500 flex my-4 justify-center dark:text-white w-full"
                onClick={() => setOpen(false)} // Close nav on click
              >
                <a className="text-3xl w-32" href={link.url}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="w-full h-32 dark:bg-black"></div>
    </header>
  );
}
