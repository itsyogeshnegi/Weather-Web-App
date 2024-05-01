import React from "react";

const Box = ({ name, weatherValue, caption, gridW }) => {
  return (
    <div
      className={`${gridW} bg-sky-800 text-white h-40  shadow-xl rounded-md my-2 flex justify-center items-center flex-col`}>
      <p className="text-3xl font-extralight">{name}</p>
      <b className="text-2xl">{weatherValue}{caption}</b>
    </div>
  );
};

export default Box;
