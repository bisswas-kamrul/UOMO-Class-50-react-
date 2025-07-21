import React from 'react'
import Flex from '../Flex'
import Container from '../Container'
import Image from '../Image'
import bgmanpic from '../../assets/bg.png'



const Vennar = () => {
  return (
    <>
    <div className="h-[800px] w-[1170px] m-auto bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url("/img/Fast-vennar.jpg")`}}>
    <Container>
        <Flex className={"flex"}>
        <div className="w-[580px]">
            <p className={"font-medium font-HeaderText text-sm text-VennarTextColor pt-[100px] pl-[133px]"}>-------NEW TREND</p>
            <h1 className={"font-medium font-HeaderText text-4xl leading-16 text-HeadrColor pl-[133px]"}>SUMMER SALE STYLISH <span className={"font-bold"}>WOMENS</span></h1>
            <h6 className={"font-medium font-HeaderText text-HeadrColor pl-[133px] leading-6"}>DISCOVER MORE</h6>
        </div>
        <div className="w-[580px]">
            <Image ImgSrc={bgmanpic} AltSrc={"bgmanpic"} className={"mt-[100px] h-[695px] ml-[100px]"}/>
        </div>
    </Flex>
    </Container>
    </div>
    </>
  )
}

export default Vennar