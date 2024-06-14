import React from "react";
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer5() {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thank you! We will contact you later.");
  };

  return (
    <footer
      id="contact"
      className="dark:bg-black font-sans border-t-2 border-black dark:border-white dark:border-t mt-10"
    >
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div data-aos="fade-up" className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight dark:text-white xl:text-2xl">
              Subscribe to our newsletter to get an update.
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"
            >
              <input
                id="email"
                type="text"
                required
                className="px-4 py-2 dark:text-gray-700 dark:bg-white border-black border focus:border-orange-500 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orange-300"
                placeholder="Email Address"
              />
              <button
                type="submit"
                className="w-full px-6 py-2.5 text-sm font-medium tracking-wider dark:text-white text-black transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-orange-500 hover:bg-orange-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div data-aos="fade-up">
            <p className="font-semibold text-black dark:text-white">
              Quick Link
            </p>
            <div className="flex flex-col items-start mt-2 space-y-2">
              <p className="dark:text-white transition-colors duration-300 text-gray-700 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-black">
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
              Contact Information
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="dark:text-white transition-colors duration-300 text-gray-700 hover:text-black">
                Address: 123 Main St, Anytown, USA
              </p>
              <p className="dark:text-white transition-colors duration-300 text-gray-700 hover:text-black">
                Phone: (123) 456-7890
              </p>
              <p className="dark:text-white transition-colors duration-300 text-gray-700 hover:text-black">
                Email: contact@berimbolosecurity.com
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 md:my-8 dark:border-gray-700 h-2" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-4 hover:cursor-pointer">
            <a
              href="https://github.com/3mrgouda/BerimboloSecurity"
              target="_blank"
            >
              <FaGithub className="w-10 h-10 text-black dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/3mrgouda/" target="_blank">
              <FaLinkedin className="w-10 h-10 text-black dark:text-white" />
            </a>
          </div>
          <p className="font-sans py-8 text-start md:text-center md:text-lg md:p-4 text-black dark:text-white">
            <FaCopyright className="inline-block" /> 2023{" "}
            <a
              className="border-b border-black dark:border-white md:text-xl"
              href="https://www.linkedin.com/in/3mrgouda/"
              target="_blank"
            >
              <span className="font-bold text-orange-500">Berimbolo</span>
              Security{" "}
            </a>{" "}
            Inc. All rights reserved.
          </p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
}

export default Footer5;
