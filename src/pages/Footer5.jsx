import React from "react";
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer5() {
  return (
    <footer className="dark:bg-black font-sans border-t-2 border-black dark:border-white dark:border-t mt-10">
      <div  className="container px-6 py-10  mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div data-aos="fade-up" className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold  tracking-tight dark:text-white xl:text-2xl">
              Subscribe our newsletter to get an update.
            </h1>
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 dark:text-gray-700 dark:bg-white border-black border     focus:border-orange-500  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orange-300"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider dark:text-white text-black transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-orange-500  hover:bg-orange-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>
          <div data-aos="fade-up">
            <p className="font-semibold text-black dark:text-white">
              Quick Link
            </p>
            <div className="flex flex-col items-start mt-2 space-y-2">
              <p className="dark:text-white  transition-colors duration-300 text-gray-700 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-black">
                Home
              </p>
              <p className="dark:text-white transition-colors duration-300 text-gray-700 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-black">
                Who We Are
              </p>
              <p className="dark:text-white transition-colors duration-300 text-gray-700 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-black">
                Our Philosophy
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <p className="font-semibold text-black dark:text-white">
              Industries
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="dark:text-white transition-colors duration-300 text-gray-700 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-black">
                Retail &amp; E-Commerce
              </p>
              <p className="dark:text-white transition-colors duration-300 text-gray-700 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-black">
                Information Technology
              </p>
              <p className="dark:text-white transition-colors duration-300 text-gray-700 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-black">
                Finance &amp; Insurance
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6  md:my-8 dark:border-gray-700 h-2" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-4 hover:cursor-pointer">
            <FaGithub className="w-10 h-10 text-black dark:text-white" />

            <FaLinkedin className="w-10 h-10 text-black dark:text-white" />
          </div>
        
        <p  className="font-sans py-8 text-start md:text-center md:text-lg md:p-4 text-black dark:text-white">
          <FaCopyright className="inline-block" /> 2023{" "}
          <a
            className=" border-b  border-black dark:border-white md:text-xl "
            href="#"
          >
            <span className="font-bold text-orange-500 ">Berimbolo</span>Security{" "}
          </a>{" "}
          Inc. All rights reserved.
        </p></div>
      </div>
    </footer>
  );
}

export default Footer5;
