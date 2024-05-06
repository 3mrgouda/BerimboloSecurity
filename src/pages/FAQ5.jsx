import React, { useState } from "react";
import { FaM, FaMinus, FaPlus } from "react-icons/fa6";
import { questions } from "../api/QS";

export default function FAQ5() {
  const [openStates, setOpenStates] = useState(
    Array(questions.length).fill(false)
  );

  const handleClick = (index) => {
    const updatedOpenStates = [...openStates];
    updatedOpenStates[index] = !openStates[index];
    setOpenStates(updatedOpenStates);
  };

  return (
    <div className="mb-10 ">
      <h2 data-aos="fade-up" className="max-[350px]:text-lg font-bold text-2xl font-poppins text-center text-orange-500 mb-10">
        Frequently asked questions about BerimboloSecurity
      </h2>
      {questions.map((item, i) => (
        <div data-aos="fade-up" key={i}>
          <div className="question border flex items-center justify-between p-3 dark:text-white">
            <h4>{item.question}</h4>
            <button onClick={() => handleClick(i)}>
              {openStates[i] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <div className={`answer ${openStates[i] ? "block" : "hidden"}  p-3 border text-gray-700 dark:text-gray-300`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
