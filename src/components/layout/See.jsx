import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Countdown from "react-countdown";

const See = () => {
  const targetDate = new Date("2025-07-26T23:59:59");

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>🎉 Time's up!</span>;
    } else {
      return (
        <>
         <Flex className={"flex gap-x-5 mt-[150px]"}>
            <div className="">
              <h5
                className={
                  "pl-[133px] font-HeaderText font-normal text-HeadrColor uppercase leading-[30px]"
                }>
                {days} :
              </h5>
              <h6
                className={
                  "pl-[133px] font-HeaderText font-medium text-HeadrColor uppercase"
                }>
                DAYS
              </h6>
            </div>
            <div className="">
              <h5
                className={
                  "font-HeaderText font-normal text-HeadrColor uppercase leading-[30px]"
                }>
                {hours} :
              </h5>
              <h6
                className={
                  "font-HeaderText font-medium text-HeadrColor uppercase"
                }>
                HOURS
              </h6>
            </div>
            <div className="">
              <h5
                className={
                  "font-HeaderText font-normal text-HeadrColor uppercase leading-[30px]"
                }>
                {minutes} :
              </h5>
              <h6
                className={
                  "font-HeaderText font-medium text-HeadrColor uppercase"
                }>
                MINS
              </h6>
            </div>
            <div className="">
              <h5
                className={
                  "font-HeaderText font-normal text-HeadrColor uppercase leading-[30px]"
                }>
                {seconds} 
              </h5>
              <h6
                className={
                  "font-HeaderText font-medium text-HeadrColor uppercase"
                }>
                SEC
              </h6>
            </div>
          </Flex>
        </>       
      );
    }
  };
  return (
    <>
      <div className="mt-20 h-[450px] w-[1170px] m-auto bg-no-repeat bg-center bg-cover" style={{backgroundImage:'url(/img/see.jpg)'}}>
        <Container>
          <div className="w-[580px]">
            <p
              className={
                "font-medium font-HeaderText text-sm text-VennarTextColor pt-[100px] pl-[133px]"
              }>
              -------DEAL OF THE WEEK
            </p>
            <h1
              className={
                "font-medium font-HeaderText text-4xl leading-16 text-HeadrColor pl-[133px]"
              }>
              Spring<span className={"font-bold"}> Collection</span>
            </h1>
            <h6
              className={
                "font-medium font-HeaderText text-HeadrColor pl-[133px] leading-6"
              }>
              SHOP NOW
            </h6>
          </div>
           <Countdown date={targetDate} renderer={renderer} />
                    
        </Container>
      </div>
    </>
  );
};

export default See;
