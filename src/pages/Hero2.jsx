import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImgs = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/558630/pexels-photo-558630.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/5589597/pexels-photo-5589597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 4,
    src: "https://images.pexels.com/photos/7463021/pexels-photo-7463021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 5,
    src: "https://images.pexels.com/photos/7364948/pexels-photo-7364948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Hero2() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container font-poppins flex flex-col gap-5">
      <h2 className="font-medium capitalize text-lg text-center font-sans dark:text-white lg:text-2xl lg:text-uppercase ">
        We handle everything from installation to monitoring.
      </h2>
      <Slider
       arrows={false}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {sliderImgs.map((item) => (
          <div key={item.id} >
            <img
              className="w-full aspect-video object-cover dark:border "
              src={item.src}
              alt=""
            />
          </div>
        ))}
      </Slider>
      <h4 className="dark:text-white lg:text-xl">Our Products</h4>
      <Slider
       arrows={false} 
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {sliderImgs.map((item) => (
          <div key={item.id} className="hover:scale-105 duration-300">
            <img
              className="w-[80%] aspect-video object-cover rounded-lg mx-auto p-1 dark:border"
              src={item.src}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
