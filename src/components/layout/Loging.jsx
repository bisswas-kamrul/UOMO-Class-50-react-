import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Loging = () => {
  return (
    <>
      <div className="bg-white pt-20">
        <Container>
          <Flex className={"flex gap-6 justify-center "}>
            <ul className="group inline-block">
              <li
                className={
                  "font-HeaderText font-bold text-2xl text-HeadrColor uppercase"
                }>
                loging
              </li>
              <div
                className={
                  "h-[2px] w-0 group-hover:w-20 bg-black transition-all duration-1000"
                }></div>
            </ul>
            <ul className="group inline-block">
              <li
                className={
                  "font-HeaderText font-bold text-2xl text-HeadrColor uppercase"
                }>
                rigister
              </li>
              <div
                className={
                  "h-[2px] w-0 group-hover:w-20 bg-black transition-all duration-1000"
                }></div>
            </ul>
          </Flex>
          <div className="">
            <input
              type="text"
              placeholder=" Email address"
              className={
                "h-[50px] w-[350px] bg-white shadow-xs border-1  text-black uppercase mt-10 ml-[410px]"
              }
            />
            <input
              type="number"
              placeholder=" password"
              className={
                "h-[50px] w-[350px] bg-white shadow-xs border-1  text-black uppercase mt-5 ml-[410px]"
              }
            />
            <button
              className={
                "h-[50px] w-[350px] bg-black shadow-xs border-1  text-white uppercase mt-5 ml-[410px]"
              }>
              loging
            </button>
          </div>
          <div className="hidden">
            <input
              type="text"
              placeholder=" username"
              className={
                "h-[50px] w-[350px] bg-white shadow-xs border-1  text-black uppercase mt-10 ml-[410px]"
              }
            />
            <input
              type="text"
              placeholder=" Email address"
              className={
                "h-[50px] w-[350px] bg-white shadow-xs border-1  text-black uppercase mt-10 ml-[410px]"
              }
            />
            <input
              type="number"
              placeholder=" password"
              className={
                "h-[50px] w-[350px] bg-white shadow-xs border-1  text-black uppercase mt-5 ml-[410px]"
              }
            />
            <p
              className={
                "font-HeaderText font-medium text-base text-HeadrColor pl-[410px] pt-4"
              }>
              Your personal data will be used to support your <br></br>
              experience throughout this website, to manage<br></br> access to
              your account, and for other purposes <br></br>described in our
              privacy policy.
            </p>
            <button
              className={
                "h-[50px] w-[350px] bg-black shadow-xs border-1  text-white uppercase mt-5 ml-[410px]"
              }>
              loging
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Loging;
