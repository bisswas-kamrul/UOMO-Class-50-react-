
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import lemited1 from "../../assets/lemited-1.png";
import lemited2 from "../../assets/lemited-2.png";
import lemited3 from "../../assets/lemited-3.png";
import lemited4 from "../../assets/lemited-4.png";
import { CiHeart } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className,  onClick } = props;
  return (
    <div className={className} onClick={onClick}/>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return ( <div className={className} onClick={onClick}/>
  );
}

const Lemited = () => {
   var settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
     autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="mt-20">
        <Container>
          <div className="text-center">
            <h4
              className={
                "font-HeaderText font-normal text-4xl text-HeadrColor"
              }>
              LIMITED <span className={"font-bold"}>EDITION</span>
            </h4>
          </div>
           <Slider {...settings} className="mt-10">
            <div className=" group relative overflow-hidden px-3">
              <Image ImgSrc={lemited1} AltSrc={"lemited-1"} />
              <h4
                className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">
                add to card
              </h4>
              <div className="flex justify-between">
                <div className="">
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Dresses
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Colorful Jacket
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    $29
                  </h6>
                </div>
                <div className="">
                  <CiHeart />
                </div>
              </div>
            </div>
            <div className=" group relative overflow-hidden px-3">
              <Image ImgSrc={lemited2} AltSrc={"lemited-2"} />
              <h4
                className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">
                add to card
              </h4>
              <div className="flex justify-between">
                <div className="">
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Dresses
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Colorful Jacket
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    $29
                  </h6>
                </div>
                <div className="">
                  <CiHeart />
                </div>
              </div>
            </div>
            <div className=" group relative overflow-hidden px-3">
              <Image ImgSrc={lemited3} AltSrc={"lemited-3"} />
              <h4
                className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">
                add to card
              </h4>
              <div className="flex justify-between">
                <div className="">
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Dresses
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Colorful Jacket
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    $29
                  </h6>
                </div>
                <div className="">
                  <CiHeart />
                </div>
              </div>
            </div>
            <div className=" group relative overflow-hidden px-3">
              <Image ImgSrc={lemited4} AltSrc={"lemited-4"} />
              <h4
                className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">
                add to card
              </h4>
              <div className="flex justify-between">
                <div className="">
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Dresses
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Colorful Jacket
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    $29
                  </h6>
                </div>
                <div className="">
                  <CiHeart />
                </div>
              </div>
            </div>
            <div className=" group relative overflow-hidden px-3">
              <Image ImgSrc={lemited4} AltSrc={"lemited-4"} />
              <h4
                className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">
                add to card
              </h4>
              <div className="flex justify-between">
                <div className="">
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Dresses
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    Colorful Jacket
                  </h6>
                  <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">
                    $29
                  </h6>
                </div>
                <div className="">
                  <CiHeart />
                </div>
              </div>
            </div>
            </Slider>
     
        </Container>
      </div>
    </>
  );
};

export default Lemited;
