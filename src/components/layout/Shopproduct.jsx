import React from "react";
import Container from "../Container";
import Image from "../Image";
import our from "../../assets/our.png";
import our1 from "../../assets/our-1.png";
import shopic3 from "../../assets/shoppic-3.jpg";
import shopic4 from "../../assets/shoppic-4.jpg";
import shopic5 from "../../assets/product_4.jpg";
import Flex from "../Flex";
import Bage from "../Bage";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Shopproduct = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="mt-20">
        <Container>
          <Slider {...settings}>
            <div className=" relative group overflow-hidden px-2">
              <Image ImgSrc={our} AltSrc={"our"} />
              <Bage
                text={"20%"}
                className={"absolute right-5 top-2 bg-red-500"}
              />
              <div
                className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                add to card
              </div>
            </div>
            <div className=" relative group overflow-hidden px-2">
              <Image ImgSrc={our1} AltSrc={"our-1"} />
              <Bage
                text={"10%"}
                className={"absolute right-5 top-2 bg-green-500"}
              />
              <div
                className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                add to card
              </div>
            </div>
            <div className=" relative group overflow-hidden px-2">
              <Image ImgSrc={shopic3} AltSrc={"shoppic-3"} />
              <Bage text={"50%"} className={"absolute right-5 top-2"} />
              <div
                className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                add to card
              </div>
            </div>
            <div className=" relative group overflow-hidden px-2">
              <Image ImgSrc={shopic4} AltSrc={"shoppic-4"} />
              <Bage
                text={"40%"}
                className={"absolute right-5 top-2 bg-pink-500"}
              />
              <div
                className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                add to card
              </div>
            </div>
            <div className=" relative group overflow-hidden px-2">
              <Image ImgSrc={shopic5} AltSrc={"shoppic-5"} />
              <Bage
                text={"30%"}
                className={"absolute right-5 top-2 bg-teal-500"}
              />
              <div
                className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                add to card
              </div>
            </div>
            <div className=" relative group overflow-hidden px-2">
              <Image ImgSrc={shopic5} AltSrc={"shoppic-5"} />
              <Bage
                text={"35%"}
                className={"absolute right-5 top-2 bg-yellow-500"}
              />
              <div
                className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                add to card
              </div>
            </div>
          </Slider>
          <Flex className={"flex gap-5 justify-between"}>
            <div className="h-[130px] w-[215px] bg-white shadow-xs">
              <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
              <h6 className={"font-HeaderText text-base"}>
                Cropped Faux Leather Jacket
              </h6>
              <del className={"text-base font-HeaderText"}>$ 29</del>
              <div className="flex gap-2 items-center ">
                <FaStar className={"text-yellow-500 text-[15px] "} />
                <FaStar className={"text-yellow-500 text-[15px] "} />
                <FaStar className={"text-yellow-500 text-[15px] "} />
                <FaStar className={"text-yellow-500 text-[15px] "} />
                <FaStar className={"text-yellow-500 text-[15px] "} />
                <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
              </div>
            </div>
            <div className="h-[130px] w-[215px] bg-white shadow-xs">
              <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
              <h6 className={"font-HeaderText text-base"}>Calvin Shorts</h6>
              <del className={"text-base font-HeaderText"}>$ 62</del>
              <div className="flex gap-2 items-center">
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
              </div>
            </div>
            <div className="h-[130px] w-[215px] bg-white shadow-xs">
              <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
              <h6 className={"font-HeaderText text-base"}>Kirby T-Shirt</h6>
              <del className={"text-base font-HeaderText"}>$ 17</del>
              <div className="flex gap-2 items-center">
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
              </div>
            </div>
            <div className="h-[130px] w-[215px] bg-white shadow-xs">
              <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
              <h6 className={"font-HeaderText text-base"}>Cableknit Shawl</h6>
              <del className={"text-base font-HeaderText"}>$ 129</del>
              <div className="flex gap-2 items-center">
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
              </div>
            </div>
            <div className="h-[130px] w-[215px] bg-white shadow-xs">
              <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
              <h6 className={"font-HeaderText text-base"}>Colorful Jacket</h6>
              <del className={"text-base font-HeaderText"}>$ 29</del>
              <div className="flex gap-2 items-center">
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <FaStar className={"text-yellow-500 text-[15px]"} />
                <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
              </div>
            </div>
          </Flex>
          <div className="mt-20">
            <Slider {...settings}>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={our} AltSrc={"our"} />
                <Bage
                  text={"20%"}
                  className={"absolute right-5 top-2 bg-red-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={our1} AltSrc={"our-1"} />
                <Bage
                  text={"10%"}
                  className={"absolute right-5 top-2 bg-green-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={shopic3} AltSrc={"shoppic-3"} />
                <Bage text={"50%"} className={"absolute right-5 top-2"} />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={shopic4} AltSrc={"shoppic-4"} />
                <Bage
                  text={"40%"}
                  className={"absolute right-5 top-2 bg-pink-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={shopic5} AltSrc={"shoppic-5"} />
                <Bage
                  text={"30%"}
                  className={"absolute right-5 top-2 bg-teal-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={shopic5} AltSrc={"shoppic-5"} />
                <Bage
                  text={"35%"}
                  className={"absolute right-5 top-2 bg-yellow-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
            </Slider>
            <Flex className={"flex gap-5 justify-between"}>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>
                  Cropped Faux Leather Jacket
                </h6>
                <del className={"text-base font-HeaderText"}>$ 29</del>
                <div className="flex gap-2 items-center ">
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>Calvin Shorts</h6>
                <del className={"text-base font-HeaderText"}>$ 62</del>
                <div className="flex gap-2 items-center">
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>Kirby T-Shirt</h6>
                <del className={"text-base font-HeaderText"}>$ 17</del>
                <div className="flex gap-2 items-center">
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>Cableknit Shawl</h6>
                <del className={"text-base font-HeaderText"}>$ 129</del>
                <div className="flex gap-2 items-center">
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>Colorful Jacket</h6>
                <del className={"text-base font-HeaderText"}>$ 29</del>
                <div className="flex gap-2 items-center">
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
            </Flex>
          </div>
          <div className="mt-20">
            <Slider {...settings}>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={our} AltSrc={"our"} />
                <Bage
                  text={"20%"}
                  className={"absolute right-5 top-2 bg-red-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={our1} AltSrc={"our-1"} />
                <Bage
                  text={"10%"}
                  className={"absolute right-5 top-2 bg-green-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={shopic3} AltSrc={"shoppic-3"} />
                <Bage text={"50%"} className={"absolute right-5 top-2"} />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={shopic4} AltSrc={"shoppic-4"} />
                <Bage
                  text={"40%"}
                  className={"absolute right-5 top-2 bg-pink-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={shopic5} AltSrc={"shoppic-5"} />
                <Bage
                  text={"30%"}
                  className={"absolute right-5 top-2 bg-teal-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
              <div className=" relative group overflow-hidden px-2">
                <Image ImgSrc={shopic5} AltSrc={"shoppic-5"} />
                <Bage
                  text={"35%"}
                  className={"absolute right-5 top-2 bg-yellow-500"}
                />
                <div
                  className=" absolute bottom-2 left-6 h-[50px] w-[170px] bg-white shadow-xs text-center text-base pt-2 uppercase  translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-1000 ease-in-out">
                  add to card
                </div>
              </div>
            </Slider>
            <Flex className={"flex gap-5 justify-between"}>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>
                  Cropped Faux Leather Jacket
                </h6>
                <del className={"text-base font-HeaderText"}>$ 29</del>
                <div className="flex gap-2 items-center ">
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <FaStar className={"text-yellow-500 text-[15px] "} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>Calvin Shorts</h6>
                <del className={"text-base font-HeaderText"}>$ 62</del>
                <div className="flex gap-2 items-center">
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>Kirby T-Shirt</h6>
                <del className={"text-base font-HeaderText"}>$ 17</del>
                <div className="flex gap-2 items-center">
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>Cableknit Shawl</h6>
                <del className={"text-base font-HeaderText"}>$ 129</del>
                <div className="flex gap-2 items-center">
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
              <div className="h-[130px] w-[215px] bg-white shadow-xs">
                <p className={`font-HeaderText text-base pt-4`}>Dresses</p>
                <h6 className={"font-HeaderText text-base"}>Colorful Jacket</h6>
                <del className={"text-base font-HeaderText"}>$ 29</del>
                <div className="flex gap-2 items-center">
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <FaStar className={"text-yellow-500 text-[15px]"} />
                  <h6 className=" text-[15px] font-HeaderText">8k+ reviews</h6>
                </div>
              </div>
            </Flex>
          </div>
          <div className="mt-20">
            <h5 className="text-center font-HeaderText">SHOWING 36 of 497 items</h5>
            <div className="bg-gradient-to-r from-black  to-white shadow-sm rounded-2xl ml-[450px] mt-[10px] h-[10px] w-[300px]"></div>
            <button className="h-[40px] w-[120px] bg-black rounded-[10px] ml-[500px] text-white uppercase mt-[10px]">Show more</button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Shopproduct;
