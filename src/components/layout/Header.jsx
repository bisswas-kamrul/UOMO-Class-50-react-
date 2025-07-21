import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import { Link } from 'react-router'
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiBars3CenterLeft } from "react-icons/hi2";
import 'aos/dist/aos.css'


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
   <>
   <div className={`p-5 sticky top-0 z-50 bg-white shadow-xs`}>
    <Container>
        <Flex className={"flex justify-evenly"}>
            <div className="">
                <Link to="/"><Image ImgSrc={logo} AltSrc={"logo"}/></Link>
            </div>
            <div className="flex gap-2.5">
                <ul>
                   <Link to={"/"}><li className='font-HeaderText font-medium text-sm text-HeadrColor hover:text-teal-500 duration-1000'>HOME</li></Link>
                </ul>
                <ul>
                    <Link to={"/Shop"}><li className='font-HeaderText font-medium text-sm text-HeadrColor hover:text-teal-500 duration-1000'>SHOP</li></Link>
                </ul>
                <ul>
                  <Link to={"/Blog"}><li className='font-HeaderText font-medium text-sm text-HeadrColor hover:text-teal-500 duration-1000'>BLOG</li></Link>
                </ul>
                <ul>
                  <Link to={"/Pages"}><li className='font-HeaderText font-medium text-sm text-HeadrColor hover:text-teal-500 duration-1000'>PAGES</li></Link>
                </ul>
                <ul>
                  <Link to={"/About"}><li className='font-HeaderText font-medium text-sm text-HeadrColor hover:text-teal-500 duration-1000'>ABOUT</li></Link>
                </ul>
                <ul>
                  <Link to={"/Contact"}><li className='font-HeaderText font-medium text-sm text-HeadrColor hover:text-teal-500 duration-1000'>CONTACT</li></Link> 
                </ul>
            </div>
            <div className="flex gap-3 ">
                <a href="#"><IoIosSearch className='text-base text-[20px]' /></a>
                <a href="#"><FaRegUser className='text-base text-[20px]' /></a>
                <a href="#"><FaRegHeart className='text-base text-[20px]' /></a>
                <a href="#"><IoIosNotificationsOutline className='text-base text-[20px]' /></a>
                <a href="#"><HiBars3CenterLeft className='text-base text-[20px]' /></a>
            </div>
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Header