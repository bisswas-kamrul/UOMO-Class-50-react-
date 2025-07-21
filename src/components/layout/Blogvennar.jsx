import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Blogvennar = () => {
  return (
    <>
    <Container>
    <div className="h-[400px] w-[1170px] bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url("/img/blog.jpg")`}}>
        <h1 className={'font-HeaderText font-bold text-5xl text-HeadrColor uppercase pl-[135px] pt-[150px]'}>The Blog</h1>
        <Flex className={'flex gap-x-4 pl-[135px] pt-[20px]'}>
            <div className="group inline-block">
                <h6 className={'font-HeaderText font-medium text-base text-HeadrColor'}>ALL</h6>
                <div className={'h-[2px] w-0 group-hover:w-5 bg-amber-500 transition-all duration-1000'}></div>
            </div>
            <div className="group inline-block">
                <h6 className={'font-HeaderText font-medium text-base text-HeadrColor'}>COMPANY</h6>
                <div className={'h-[2px] w-0 group-hover:w-18 bg-amber-500 transition-all duration-1000'}></div>
            </div>
            <div className="group inline-block">
                <h6 className={'font-HeaderText font-medium text-base text-HeadrColor'}>FASHION</h6>
                <div className={'h-[2px] w-0 group-hover:w-18 bg-amber-500 transition-all duration-1000'}></div>
            </div>
            <div className="group inline-block">
                <h6 className={'font-HeaderText font-medium text-base text-HeadrColor'}>STYLE</h6>
                <div className={'h-[2px] w-0 group-hover:w-10 bg-amber-500 transition-all duration-1000'}></div>
            </div>
            <div className="group inline-block">
                <h6 className={'font-HeaderText font-medium text-base text-HeadrColor'}>TRENDS</h6>
                <div className={'h-[2px] w-0 group-hover:w-12 bg-amber-500 transition-all duration-1000'}></div>
            </div>
            <div className="group inline-block">
                <h6 className={'font-HeaderText font-medium text-base text-HeadrColor'}>BEAUTY</h6>
                <div className={'h-[2px] w-0 group-hover:w-12 bg-amber-500 transition-all duration-1000'}></div>
            </div>
        </Flex>
    </div>
    </Container>
    </>
  )
}

export default Blogvennar
