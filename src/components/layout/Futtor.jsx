import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import futtar from '../../assets/futtar.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router'
import { SiDiscover} from "react-icons/si";
import { RiMastercardLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

const Futtor = () => {
  return (
   <>
    <Container>
   <div className="mt-20 bg-FuttorbgColor h-[400px]">
        <Flex className={"flex justify-evenly items-center"}>
            <div className="mt-10">
               <Link to="/"><Image ImgSrc={futtar} AltSrc={"futtar"}/></Link>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] pt-2.5">1418 River Drive, Suite 35 Cottonhall,<br></br> CA 9622 United States</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">sale@uomo.com</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">+1 246-345-0695</p>
              <div className="flex gap-x-5 mt-7">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaYoutube />
                    <FaPowerOff />
              </div>
            </div>
            <div className="mt-10">
               <h4 className='font-HeaderText font-bold text-sm text-HeadrColor'>COMPANY</h4>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] pt-2.5">About Us</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Careers</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Affiliates</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Blog</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Contact Us</p>
            </div>
            <div className="mt-10">
              <Link to={"/Shop"}><h4 className='font-HeaderText font-bold text-sm text-HeadrColor'>SHOP</h4></Link>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] pt-2.5">New Arrivals</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Accessories</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Men</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Women</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Shop All</p>
            </div>
            <div className="mt-15">
               <h4 className='font-HeaderText font-bold text-sm text-HeadrColor'>Help</h4>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] pt-2.5">Customer Service</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">My Account</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Find a Store</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Legal & Privacy</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Contact</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Gift Card</p>
            </div>
            <div className="mt-35">
                <h4 className='font-HeaderText font-bold text-sm text-HeadrColor'>SUBSCRIBE</h4>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] pt-2.5">Be the first to get the latest news about trends, <br></br>promotions, and much more!</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">sale@uomo.com</p>
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">+1 246-345-0695</p>
              <input type="text" placeholder=" YOUR GMAIL ADRRES" className="input bg-white shadow-xs h-[40px] w-[300px]" />
              <p className="font-HeaderText font-normal text-HeadrColor text-sm leading-[24px] ">Secure payments</p>
              <Flex className={'flex gap-5'}>
                <SiDiscover className={'text-7xl text-HeadrColor'} />
                <RiMastercardLine className={'text-5xl text-VennarTextColor'} />
                <FaCcPaypal className={'text-4xl text-blue-500'} />
                <FaCcVisa className={'text-4xl text-blue-500'} />
              </Flex>
            </div>
        </Flex>
   </div>
    </Container>
   </>
  )
}

export default Futtor