import React from "react";

const Bage = ({className,text}) => {
  return (
    <>
      <div className={`h-[30px] w-[60px] bg-black text-center text-white  ${className}`}>{text}</div>
    </>
  );
};

export default Bage;
