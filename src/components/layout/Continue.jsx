import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";

const Continue = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-white">
        <Container>
          <Flex className={"flex gap-x-5"}>
            <div className="w-[580px] mt-20">
              <Image ImgSrc={blog1} AltSrc={"blog-1"} />
            </div>
            <div className="w-[580px] pt-10">
              <p
                className={
                  "font-HeaderText font-normal text-base text-FuttorbgColor"
                }>
                By Admin Aprial 05, 2023
              </p>
              <h4
                className={
                  "font-HeaderText font-medium text-2xl text-HeadrColor pt-2.5"
                }>
                Us yielding Fish sea night night the said him two
              </h4>
              <p
                className={
                  "font-HeaderText font-medium text-sm text-HeadrColor pt-2.5"
                }>
                Midst one brought greater also morning green saying had good.
                Open stars day let over gathered, grass face one every light of
                under.
              </p>
              <div className="group inline-block">
                <h4
                  className={
                    "font-HeaderText font-bold text-HeadrColor pt-2.5"
                  }>
                  Continue Reading
                </h4>
                <div
                  className={
                    "h-[2px] w-0 group-hover:w-30 bg-HeadrColor transition-all duration-1000"
                  }></div>
              </div>
            </div>
          </Flex>
          <Flex className={"flex gap-x-5"}>
            <div className="w-[580px] mt-20">
              <Image ImgSrc={blog2} AltSrc={"blog-2"} />
            </div>
            <div className="w-[580px] pt-10">
              <p
                className={
                  "font-HeaderText font-normal text-base text-FuttorbgColor"
                }>
                By Admin Aprial 05, 2023
              </p>
              <h4
                className={
                  "font-HeaderText font-medium text-2xl text-HeadrColor pt-2.5"
                }>
                Given Set was without from god divide rule Hath
              </h4>
              <p
                className={
                  "font-HeaderText font-medium text-sm text-HeadrColor pt-2.5"
                }>
                Midst one brought greater also morning green saying had good.
                Open stars day let over gathered, grass face one every light of
                under.
              </p>
              <div className="group inline-block">
                <h4
                  className={
                    "font-HeaderText font-bold text-HeadrColor pt-2.5"
                  }>
                  Continue Reading
                </h4>
                <div
                  className={
                    "h-[2px] w-0 group-hover:w-30 bg-HeadrColor transition-all duration-1000"
                  }></div>
              </div>
            </div>
          </Flex>
          <Flex className={"flex gap-x-5"}>
            <div className="w-[580px] mt-20">
              <Image ImgSrc={blog3} AltSrc={"blog-3"} />
            </div>
            <div className="w-[580px] pt-10">
              <p
                className={
                  "font-HeaderText font-normal text-base text-FuttorbgColor"
                }>
                By Admin Aprial 05, 2023
              </p>
              <h4
                className={
                  "font-HeaderText font-medium text-2xl text-HeadrColor pt-2.5"
                }>
                Woman with good shoes is never be ugly place
              </h4>
              <p
                className={
                  "font-HeaderText font-medium text-sm text-HeadrColor pt-2.5"
                }>
                Midst one brought greater also morning green saying had good.
                Open stars day let over gathered, grass face one every light of
                under.
              </p>
              <div className="group inline-block">
                <h4
                  className={
                    "font-HeaderText font-bold text-HeadrColor pt-2.5"
                  }>
                  Continue Reading
                </h4>
                <div
                  className={
                    "h-[2px] w-0 group-hover:w-30 bg-HeadrColor transition-all duration-1000"
                  }></div>
              </div>
            </div>
          </Flex>
          <div className="flex justify-between pt-20">
            <button
              className="px-4 py-2 bg-white text-black rounded mr-4"
              onClick={scrollToTop}>
              PREV
            </button>
            <button
              className="px-4 py-2 bg-white text-black rounded"
              onClick={scrollToTop}>
              NEXT
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Continue;
