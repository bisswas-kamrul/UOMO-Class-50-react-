import React from "react";
import Container from "../Container";

const Contactus = () => {
  return (
    <>
      <div className="bg-white mt-20">
        <Container>
          <h1
            className={
              "font-HeaderText font-bold text-2xl text-HeadrColor uppercase pl-[150px]"
            }>
            CONTACT US
          </h1>
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747160.54558576!2d87.70292927714281!3d23.48438724738814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1752928159578!5m2!1sen!2sbd"
              width="1170"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="rounded-lg shadow-md"></iframe>
          </div>
          <h1
            className={
              "font-HeaderText font-bold text-2xl text-HeadrColor uppercase pl-[150px] pt-20"
            }>
            Get In Touch
          </h1>
          <div className="">
            <input
              type="text"
              placeholder=" Email address"
              className={
                "h-[50px] w-[700px] bg-white shadow-xs border-1  text-black uppercase mt-10 ml-[150px]"
              }
            />
            <input
              type="number"
              placeholder=" password"
              className={
                "h-[50px] w-[700px] bg-white shadow-xs border-1  text-black uppercase mt-5 ml-[150px]"
              }
            />
            <textarea
              placeholder={" your text"}
              className={
                "h-[200px] w-[700px] ml-[150px] mt-5 border-1"
              }></textarea>
            <button
              className={
                "h-[50px] w-[350px] bg-black shadow-xs border-1  text-white uppercase  ml-[150px] mt-5"
              }>
              SUBMIT
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contactus;
