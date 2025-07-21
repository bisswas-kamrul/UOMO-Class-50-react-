import React from 'react'
import Container from '../Container'
import Image from '../Image'
import our from '../../assets/our.png'
import our1 from '../../assets/our-1.png'
import our4 from '../../assets/our-4.png'
import our5 from '../../assets/our-5.png'
import our6 from '../../assets/our-6.png'
import our2 from '../../assets/our-2.png'
import our3 from '../../assets/oure-3.png'
import our7 from '../../assets/our-7.png'
import { CiHeart } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const Our = () => {
    var settings = {
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
     autoplaySpeed: 2000,
     autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
   <>
   <div className="mt-20">
    <Container>
        <h4 className="font-HeaderText font-medium text-HeadrColor text-4xl text-center">OUR TRENDY <span className={"font-bold"}>PRODUCTS</span></h4>
        <div className={"mt-10"}>
            <Slider {...settings}>
           <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our} AltSrc={"our"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                    <CiHeart />
                </div>
             </div>
             </div>
           <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our1} AltSrc={"our-1"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                        <CiHeart />
                </div>
             </div>
        </div>
           <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our4} AltSrc={"our-4"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                        <CiHeart />
                </div>
             </div>
        </div>
           <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our5} AltSrc={"our-5"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                        <CiHeart />
                </div>
             </div>
        </div>
           <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our6} AltSrc={"our6"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                        <CiHeart />
                </div>
             </div>
        </div>
        </Slider>
        </div>
        <div className={"flex mt-10"}>
                   <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our2} AltSrc={"our-2"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                        <CiHeart />
                </div>
             </div>
        </div>
           <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our3} AltSrc={"our-3"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                        <CiHeart />
                </div>
             </div>
        </div>
           <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our7} AltSrc={"our-7"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                        <CiHeart />
                </div>
             </div>
        </div>
           <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our1} AltSrc={"our-1"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                        <CiHeart />
                </div>
             </div>
        </div>
           <div className=" group relative overflow-hidden px-3">
             <Image ImgSrc={our5} AltSrc={"our-5"}/>
             <h4 className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 opacity-0 translate-y-6
                 uppercase font-HeaderText font-bold text-sm text-HeadrColor 
                 bg-white h-[50px] w-[180px] shadow-sm text-center pt-4 
                 transition-all duration-500 ease-in-out
                 group-hover:opacity-100 group-hover:translate-y-0">add to card</h4>
             <div className="flex justify-between">
                <div className="">
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Dresses</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">Colorful Jacket</h6>
                    <h6 className="font-HeaderText font-normal text-sm text-HeadrColor">$29</h6>
                </div>
                <div className="">
                        <CiHeart />
                </div>
             </div>
        </div>
        </div>
    </Container>
   </div>
   </>
  )
}

export default Our
