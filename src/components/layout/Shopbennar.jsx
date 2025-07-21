import React from 'react'
import Flex from '../Flex'

const Shopbennar = () => {
  return (
   <>
    <div className="h-[400px] w-[1170px] m-auto bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url("/img/shop-banner.jpg")`}}>
    <h1 className={'text-center pt-[120px] text-white font-bold text-7xl font-ShopTBennarText'}>Jackets & Coats</h1>
    <Flex className={'flex gap-4 pl-[250px]'}>
        <div className=" group inline-block pt-6">
            <h4 className={'font-ShopTBennarText font-medium text-white text-base'}>StayHome</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-18'}></div>
        </div>
        <div className=" group inline-block pt-6">
            <h4 className={'font-ShopTBennarText font-medium text-white text-base '}>New In</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-12'}></div>
        </div>
        <div className=" group inline-block pt-6">
            <h4 className={'font-ShopTBennarText font-medium text-white text-base '}>Jackets</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-12'}></div>
        </div>
        <div className=" group inline-block pt-6">
            <h4 className={'font-ShopTBennarText font-medium text-white text-base '}>Hoodies</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-14'}></div>
        </div>
        <div className=" group inline-block pt-6">
            <h4 className={'font-ShopTBennarText font-medium text-white text-base '}>Men</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-5'}></div>
        </div>
        <div className=" group inline-block pt-6">
            <h4 className={'font-ShopTBennarText font-medium text-white text-base '}>Women</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-12'}></div>
        </div>
        <div className=" group inline-block pt-6">
            <h4 className={'font-ShopTBennarText font-medium text-white text-base '}>Trousers</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-12'}></div>
        </div>
        <div className=" group inline-block pt-6">
            <h4 className={'font-ShopTBennarText font-medium text-white text-base '}>Accessories</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-12'}></div>
        </div>
        <div className=" group inline-block pt-6">
            <h4 className={'font-ShopTBennarText font-medium text-white text-base '}>Shoes</h4>
                <div className={'h-1 w-0 bg-teal-600 transition-all duration-1000 group-hover:w-12'}></div>
        </div>

    </Flex>
    </div>
   </>
  )
}

export default Shopbennar