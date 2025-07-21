import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import tshirt1 from '../../assets/tshirt-1.png'
import tshirt2 from '../../assets/tshirt-2.png'

const Tshirt = () => {
  return (
    <>
    <div className="mt-20">
        <Container>
            <Flex className={"flex justify-evenly"}>
                <div className="">
                    <Image ImgSrc={tshirt1} AltSrc={"tshirt-1"} className={"w-[450px] h-[250px]"}/>
                </div>
                <div className="">
                    <Image ImgSrc={tshirt2} AltSrc={"tshirt-2"} className={"w-[450px] h-[250px]"}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Tshirt