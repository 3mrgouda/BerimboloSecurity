import React from "react";
import house from "../assets/house.png";
import shop from "../assets/shop.png";
import apartment from "../assets/apartment.png";
export default function Places() {
  const placesIcons = [
    {
      id: 1,
      order: 0,
      name: "House",
      smallParagraph: (
        <p>
          If you're a homeowner looking to improve your security,
          BerimboloSecurity can help. <br /> They offer a variety of security
          systems, including alarms and CCTV cameras, that can be tailored to
          your specific needs.
        </p>
      ),

      src: house,
    },
    {
      id: 2,
      order: 1,
      name: "Business",
      smallParagraph: (
        <p>
          BerimboloSecurity understands the security needs of small businesses.{" "}
          <br /> They offer security systems that can help protect your
          property, inventory, and employees.
        </p>
      ),

      src: shop,
    },
    {
      id: 3,
      order: 0,
      name: "Apartment",
      smallParagraph: (
        <p>
          Even in an apartment building, you may want some extra security for
          your own space. <br /> BerimboloSecurity can install security systems
          specifically designed for apartments.
        </p>
      ),

      src: apartment,
    },
  ];
  return (
    <div id="services" className="my-36">
      <h2
        data-aos="fade-up"
        className="max-[350px]:text-lg font-bold text-3xl font-poppins text-center mb-10 text-orange-500"
      >
        What kind of property are you protecting?
      </h2>
      {placesIcons.map((item) => (
        <div className="p-10">
          <h4
            data-aos="fade-up"
            className="max-[350px]:text-lg font-bold text-xl dark:text-white"
          >
            BerimboloSecurity for {item.name}
          </h4>
          <div
            key={item.id}
            className="flex flex-col lg:flex-row    lg:justify-between lg:items-center lg:gap-20 "
          >
            {" "}
            <section
              data-aos="fade-right"
              style={{ order: `${item.order}` }}
              className={`img lg:w-1/2   pt-5 pb-0`}
            >
              <img src={`${item.src}`} className="mx-auto w-[90%]" alt="" />
            </section>
            <section
              data-aos="fade-left"
              className="lg:w-1/2  lg:flex lg:flex-col lg:justify-center"
            >
              <h5 className="font-bold text-xl  text-orange-500 font-poppins">
                {item.name}:
              </h5>
              <p
                className={`text-lg  font-poppins   text-gray-900 dark:text-white`}
              >
                {item.smallParagraph}
              </p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
