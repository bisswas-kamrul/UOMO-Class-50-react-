import React from "react";
import Flex from "../Flex";
import Container from "../Container";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";


const Theshop = () => {
  return (
    <>
      <div className="mt-20">
        <Container>
          <Flex className={"flex justify-between"}>
            <div className="flex gap-2.5">
             <div className=" group inline-block pl-[130px]">
            <h4 className={'font-ShopTBennarText font-medium text-HeadrColor text-base'}>Home</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-10'}></div>
             </div>
             /
             <div className=" group inline-block">
            <h4 className={'font-ShopTBennarText font-medium text-HeadrColor text-base'}>The shop</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-12'}></div>
             </div>
            </div>
            <div className="flex gap-1.5">               
                    <div className="flex gap-1">
                        <h4 className={'font-HeaderText text-base'}>Default Sorting</h4>
                        <FaChevronDown className={'mt-1.5'} />
                    </div>
                    |
                    <div >
                        <h4 className={'font-HeaderText text-base'}>View 1 2 3</h4>
                    </div>
                    |
                    <div className=" group inline-block">
                        <div className="flex gap-1">
                        <HiOutlineBars3BottomLeft className={'mt-1.5'} />
                        <h4 className={'font-HeaderText text-base'}>Filter</h4>
                        </div>
                      <div className="h-1 w-0 bg-teal-500 transition-all duration-1000 group-hover:w-12"></div>
                    </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Theshop;
