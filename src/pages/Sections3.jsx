import React from 'react';


function Sections3(data) {

  const api = data.data;
  return (
    <div className='flex flex-col  gap-20'>
      {api.map((item) => (
        <div key={item.id} className="lg:flex">
          <section className='img mb-4 lg:w-1/2'>
            <img src={`${item.src}`} className='dark:border' alt="" />
          </section>
          <section className='lg:w-1/2 p-5 lg:flex lg:flex-col lg:justify-center'>
            {item.fParagraph}
            {item.sParagraph}
          </section>
        </div>
      ))}
    </div>
  );
}

export default Sections3;
