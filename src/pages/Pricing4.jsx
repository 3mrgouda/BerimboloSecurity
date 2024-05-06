import React from "react";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";

export default function Pricing4() {
  return (
    <section class="py-24 ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          <div class="flex flex-col mx-auto max-w-sm text-white dark:border  bg-black p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-black/90">
            <h3 class="font-manrope text-2xl font-bold mb-3">
              Basic security package
            </h3>
            <div class="flex items-center mb-6">
              <span class="font-manrope mr-2 text-6xl font-semibold">$150</span>
            </div>
            <ul class="mb-12 space-y-6 text-left text-lg text-white/70">
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
            <a
              href="javascript:;"
              class="py-2.5 px-5 bg-orange-500 shadow-sm  transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-orange-700"
            >
              Basic plan
            </a>
          </div>
          <div class="flex flex-col mx-auto max-w-sm text-white dark:border  bg-black transition-all duration-500 hover:bg-black/90 ">
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
              <ul class="mb-8 space-y-6 text-left text-lg text-white/70 ">
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
            <a
              href="javascript:;"
              class="mb-4 py-2.5 px-5 bg-orange-500 shadow-sm  transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-orange-700"
            >
              Standard plan
            </a>
          </div>
          <div class="flex dark:border flex-col mx-auto max-w-sm text-white  bg-black p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-black/90">
            <h3 class="font-manrope text-2xl font-bold mb-3">
              Deluxe security package
            </h3>
            <div class="flex items-center mb-6">
              <span class="font-manrope mr-2 text-6xl font-semibold">$500</span>
            </div>
            <ul class="mb-12 space-y-6 text-left text-lg text-white/70 ">
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
            <a
              href="javascript:;"
              class="py-2.5 px-5 bg-orange-500 shadow-sm  transition-all duration-500 text-base text-white font-semibold text-center w-fit mx-auto hover:bg-orange-700"
            >
              Deluxe plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
