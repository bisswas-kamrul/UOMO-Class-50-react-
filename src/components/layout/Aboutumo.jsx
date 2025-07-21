import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import about from "../../assets/about-2.jpg";
import brant1 from "../../assets/brand1.png";
import brant2 from "../../assets/brand2.png";
import brant3 from "../../assets/brand3.png";
import brant4 from "../../assets/brand4.png";
import brant5 from "../../assets/brand5.png";
import Slider from "react-slick";

const Aboutumo = () => {
 const settings = {
  autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-white mt-20">
        <Container>
          <h1
            className={
              "font-HeaderText font-bold text-2xl text-HeadrColor uppercase pl-[150px]"
            }>
            about uomo
          </h1>
          <Flex className={"flex mt-10"}>
            <div className="w-[580px]">
              <Image ImgSrc={about} AltSrc={"about-2"} />
            </div>
            <div className="w-[580px]">
              <p
                className={
                  "font-HeaderText  text-base font-bold text-HeadrColor"
                }>
                The Company
              </p>
              <h4
                className={
                  "font-HeaderText font-medium text-[20px] text-HeadrColor pt-2.5"
                }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                sapien dignissim a elementum. Sociis metus, hendrerit mauris id
                in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
                sodales orci etiam phasellus lacus id leo. Amet turpis nunc,
                nulla massa est viverra interdum. Praesent auctor nulla morbi
                non posuere mattis. Arcu eu id maecenas cras.
              </h4>
            </div>
          </Flex>  
             <p
                className={
                  "font-HeaderText  text-2xl font-bold text-HeadrColor pt-20"
                }>
                Company Partners
              </p>    
              <Slider {...settings} className="mt-20">            
                <Image ImgSrc={brant1} AltSrc={"brant-1"}/>
                <Image ImgSrc={brant2} AltSrc={"brant-2"}/>
                <Image ImgSrc={brant3} AltSrc={"brant-3"}/>
                <Image ImgSrc={brant4} AltSrc={"brant-4"}/>
                <Image ImgSrc={brant5} AltSrc={"brant-5"}/> 
            </Slider>       
        </Container>
      </div>
    </>
  );
};

export default Aboutumo;
