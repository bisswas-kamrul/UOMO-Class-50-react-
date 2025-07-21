
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import catagore1 from '../../assets/catagore-1.png';
import catagore2 from '../../assets/catagore-2.png';
import catagore3 from '../../assets/catagore-3.png';
import catagore4 from '../../assets/catagore-4.png';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Catagore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="mt-20">
      <Container>
        <Flex className={"flex justify-evenly gap-x-3"}>
          <div data-aos="fade-right">
            <Image
              ImgSrc={catagore1}
              AltSrc={"catagroe-1"}
              className={"w-[560px] h-[500px]"}
            />
          </div>
          <div data-aos="fade-left">
            <Image
              ImgSrc={catagore2}
              AltSrc={"catagore-2"}
              className={"w-[557px] h-[245px]"}
            />
            <div className="flex gap-x-3">
              <div data-aos="zoom-in" data-aos-delay="100">
                <Image
                  ImgSrc={catagore3}
                  AltSrc={"catagore-3"}
                  className={"w-[275px] h-[245px] mt-3"}
                />
              </div>
              <div data-aos="zoom-in" data-aos-delay="200">
                <Image
                  ImgSrc={catagore4}
                  AltSrc={"catagore-4"}
                  className={"w-[275px] h-[245px] mt-3"}
                />
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Catagore;