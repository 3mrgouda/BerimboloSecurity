import React from "react";

function Sections3(data) {
  const api = data.data;
  return (
    <div className="flex flex-col  gap-20">
      <h2
        data-aos="fade-up"
        className="max-[350px]:text-lg font-bold text-2xl font-poppins text-center text-orange-500"
      >
        How does BerimboloSecurity work?
      </h2>
      {api.map((item) => (
        <div key={item.id} className="lg:flex">
          <section
            data-aos="fade-right"
            className={`img mb-4 lg:w-1/2  `}
            style={{ order: `${item.order}` }}
          >
            <img src={`${item.src}`} className="dark:border" alt="" />
          </section>
          <section
            data-aos="fade-left"
            className="lg:w-1/2 p-5 lg:flex lg:flex-col lg:justify-center"
          >
            {item.fParagraph}
            {item.sParagraph}
          </section>
        </div>
      ))}
    </div>
  );
}

export default Sections3;
