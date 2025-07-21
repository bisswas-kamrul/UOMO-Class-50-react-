import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import our from '../../assets/our.png';
import our1 from '../../assets/our-1.png';
import our2 from '../../assets/our-2.png';
import oure3 from '../../assets/oure-3.png';
import our4 from '../../assets/our-4.png';
import our5 from '../../assets/our-5.png';
import our6 from '../../assets/our-6.png';
import our7 from '../../assets/our-7.png';
import lemited1 from '../../assets/lemited-1.png';
import lemited2 from '../../assets/lemited-2.png';
import lemited3 from '../../assets/lemited-3.png';
import lemited4 from '../../assets/lemited-4.png';

const Uomo = () => {
  // Tailwind hover effect classes
  const hoverClass = "transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg";

  return (
    <div className="mt-20">
      <Container>
        <div className="text-center">
          <h4 className="font-HeaderText font-normal text-4xl text-HeadrColor">
            @UOMO
          </h4>
        </div>

        <Flex className="flex justify-evenly gap-x-5 mt-10 ">
          <div>
            <Image ImgSrc={our} AltSrc="our" className={` duration-1000 ${hoverClass}`} />
            <Image ImgSrc={lemited1} AltSrc="lemited-1" className={`mt-5 duration-1000 ${hoverClass}`} />
          </div>
          <div>
            <Image ImgSrc={our1} AltSrc="our-1" className={` duration-700 ${hoverClass}`} />
            <Image ImgSrc={lemited2} AltSrc="lemited-2" className={`mt-5 duration-700 ${hoverClass}`} />
          </div>
          <div>
            <Image ImgSrc={oure3} AltSrc="oure-3" className={`duration-700 ${hoverClass}`} />
            <Image ImgSrc={lemited3} AltSrc="lemited-3" className={`mt-5 duration-700 ${hoverClass}`} />
          </div>
          <div>
            <Image ImgSrc={our4} AltSrc="our-4" className={` duration-700 ${hoverClass}`} />
            <Image ImgSrc={lemited4} AltSrc="lemited-4" className={`mt-5 duration-700 ${hoverClass}`} />
          </div>
          <div>
            <Image ImgSrc={our5} AltSrc="our-5" className={` duration-700  ${hoverClass}`} />
            <Image ImgSrc={our6} AltSrc="our-6" className={`mt-5 duration-700 ${hoverClass}`} />
          </div>
          <div>
            <Image ImgSrc={our7} AltSrc="our-7" className={` duration-700 ${hoverClass}`} />
            <Image ImgSrc={our2} AltSrc="our-2" className={`mt-5 duration-700 ${hoverClass}`} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Uomo;