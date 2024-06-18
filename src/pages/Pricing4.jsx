import React from "react";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default function Pricing4() {
  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Our team will contact you.",
    });
  };
  return (
    <section class="py-24 " id="pricing">
      <h2
        data-aos="fade-up"
        className="max-[350px]:text-lg font-bold text-2xl font-poppins text-center text-orange-500 mb-10"
      >
        Pricing for your security needs
      </h2>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          <div
            data-aos="fade-up"
            class="flex flex-col mx-auto max-w-sm dark:text-white dark:border border-2 dark:border-white border-black dark:bg-black p-6 xl:py-9 xl:px-12 transition-all duration-500 "
          >
            <h3 class="font-manrope text-2xl font-bold mb-3">
              Basic security package
            </h3>
            <div class="flex items-center mb-6">
              <span class="font-manrope mr-2 text-6xl font-semibold">$150</span>
            </div>
            <ul class="mb-12 space-y-6 text-left text-lg text-black/70 dark:text-white/70">
              <li class="flex items-center space-x-4">
                <FaRegCircleCheck />
                <span>1 x Alarm system</span>
              </li>
              <li class="flex items-center space-x-4">
                <FaRegCircleCheck />
                <span>1 x surveillance camera </span>
              </li>
              <li class="flex items-center space-x-4">
                <FaRegCircleCheck />
                <span>Store local CCTV footage</span>
              </li>
              <li class="flex items-center space-x-4">
                <FaRegCircleXmark />
                <span>It is not centrally monitored</span>
              </li>
            </ul>
            <button
              class="py-2.5 px-5 bg-orange-500 shadow-sm  transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-orange-700"
              onClick={handleSubmit}
            >
              Basic plan
            </button>
          </div>
          <div
            data-aos="zoom-in"
            class="flex flex-col mx-auto max-w-sm dark:text-white dark:border border-2 border-black dark:border-white dark:bg-black transition-all duration-500   "
          >
            <div class="uppercase bg-gradient-to-r from-orange-500 to-orange-900  p-3 text-center text-white">
              MOST POPULAR
            </div>
            <div class="p-6 xl:py-9 xl:px-12">
              <h3 class="font-manrope text-2xl font-bold mb-3">
                Standard security package
              </h3>
              <div class="flex items-center mb-6">
                <span class="font-manrope mr-2 text-6xl font-semibold text-orange-500">
                  $300
                </span>
              </div>
              <ul class="mb-8 space-y-6 text-left text-lg text-black/70 dark:text-white/70 ">
                <li class="flex items-center space-x-4">
                  <FaRegCircleCheck />
                  <span>1 x Alarm system</span>
                </li>
                <li class="flex items-center space-x-4">
                  <FaRegCircleCheck />
                  <span>2 x surveillance camera </span>
                </li>
                <li class="flex items-center space-x-4">
                  <FaRegCircleCheck />
                  <span>Store CCTV footage online and local </span>
                </li>
                <li class="flex items-center space-x-4">
                  <FaRegCircleXmark />
                  <span>It is not centrally monitored</span>
                </li>
              </ul>
            </div>{" "}
            <button
              class="mb-4 py-2.5 px-5 bg-orange-500 shadow-sm  transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-orange-700"
              onClick={handleSubmit}
            >
              Standard plan
            </button>
          </div>
          <div
            data-aos="fade-up"
            class="flex dark:border flex-col mx-auto max-w-sm dark:text-white border-2 border-black dark:border-white dark:bg-black p-6 xl:py-9 xl:px-12 transition-all duration-500 "
          >
            <h3 class="font-manrope text-2xl font-bold mb-3">
              Deluxe security package
            </h3>
            <div class="flex items-center mb-6">
              <span class="font-manrope mr-2 text-6xl font-semibold">$500</span>
            </div>
            <ul class="mb-12 space-y-6 text-left text-lg text-black/70 dark:text-white/70 ">
              <li class="flex items-center space-x-4">
                <FaRegCircleCheck />
                <span>1 x Alarm system</span>
              </li>
              <li class="flex items-center space-x-4">
                <FaRegCircleCheck />
                <span>4 x surveillance camera </span>
              </li>
              <li class="flex items-center space-x-4">
                <FaRegCircleCheck />
                <span>Store CCTV footage online and local </span>
              </li>
              <li class="flex items-center space-x-4">
                <FaRegCircleCheck />
                <span>Central control</span>
              </li>
            </ul>
            <button
              class="py-2.5 px-5 bg-orange-500 shadow-sm  transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-orange-700"
              onClick={handleSubmit}
            >
              Deluxe plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
