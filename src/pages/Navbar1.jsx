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
      src: "https://images.ctfassets.net/v6awd0kabi65/148Q9UYNpQPM30oWEley12/48ecbccb32b5f6318ecfa82c6dfb1589/M-hero.jpg?w=750&h=700&fl=progressive&q=90&fm=jpg",
      url: "/",
    },
    {
      id: 2,
      title: "Products",
      src: "https://images.ctfassets.net/v6awd0kabi65/148Q9UYNpQPM30oWEley12/48ecbccb32b5f6318ecfa82c6dfb1589/M-hero.jpg?w=750&h=700&fl=progressive&q=90&fm=jpg",
      url: "/about",
    },
    {
      id: 3,
      title: "Services",
      src: "https://images.ctfassets.net/v6awd0kabi65/148Q9UYNpQPM30oWEley12/48ecbccb32b5f6318ecfa82c6dfb1589/M-hero.jpg?w=750&h=700&fl=progressive&q=90&fm=jpg",
      url: "/services",
    },
    {
      id: 4,
      title: "Contact",
      src: "https://images.ctfassets.net/v6awd0kabi65/148Q9UYNpQPM30oWEley12/48ecbccb32b5f6318ecfa82c6dfb1589/M-hero.jpg?w=750&h=700&fl=progressive&q=90&fm=jpg",
      url: "/contact",
    },
  ];
  const icons = [
    {
      id: 1,
      src: <MdAccountCircle />,
    },
    {
      id: 2,
      src: <MdShoppingCart />,
    },
    {
      id: 3,
      src: <MdSupportAgent />,
    },
  ];

  const [theme, setTheme] = useState("light");
  localStorage.setItem("theme", JSON.stringify(theme));
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
   setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <header className="">
      <nav
        className={` max-[350px]:gap-0 flex items-center justify-around py-4 gap-10 md:gap-0  max-[350px]:h-16 h-20 dark:bg-black border-b-2 border-black dark:border-white bg-white dark:border-b dark:text-white mb-10 fixed z-50 w-full`}
      >
        <div className="logo flex items-center gap-3 sm:gap-10">
          <button className="max-[350px]:text-3xl text-4xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <MdClose /> : <MdMenu />}
          </button>
          <a className="max-[350px]:text-xl text-2xl lg:text-4xl " href="#">
            <span className="font-bold text-orange-500">Berimbolo</span>Security{" "}
          </a>
        </div>
        <div className="links hidden md:flex">
          <ul className={` md:flex md:gap-5 text-xl lg:text-2xl`}>
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-orange-500"
              >
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex bottom-0 gap-4 sm:gap-10">
          <button className="text-xl lg:hidden" onClick={() => setOpenIcon(!openIcon)}>
            {!openIcon ? <FaPlus /> : <FaMinus />}{" "}
          </button>
          <div
            className={`${
              !openIcon ? "hidden" : "flex flex-col"
            } icons max-[350px]:top-[4rem] top-[4.95rem] lg:flex lg:static lg:border-0 lg:dark:border-0  absolute gap-4  justify-between text-2xl  md:text-3xl dark:bg-black bg-white dark:text-white dark:border border-2 border-t-0 border-black dark:border-t-0 dark:border-white`}
          >
            {icons.map((icon) => (
              <a key={icon.id} className="cursor-pointer " href="">
                {icon.src}
              </a>
            ))}
          </div>
          <button
            className="text-xl"
            onClick={handleThemeSwitch}
          >
            {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>
      </nav>
     
      <nav
        className={`Navigation duration-300   ${
          !open ? "hidden" : "block"
        } dark:bg-black dark:border-b-white   border-b-black border-b-2 bg-white py-4 mt-16 max-[350px]:mt-10   md:hidden fixed z-40 w-full`}
      >
        <div className="links md:hidden">
          <ul className="flex flex-wrap justify-around">
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer flex my-4 items-center dark:text-white "
              >
                <a className="text-3xl  w-32" href={link.url}>
                  {link.title}
                </a>
                <img
                  className="w-[130px] dark:border hover:scale-105 aspect-video object-cover rounded-md cursor-pointer"
                  src={link.src}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="w-full h-32 dark:bg-black"></div>
    </header>
  );
}
