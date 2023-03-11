import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <div className="rotate-90 right-[-43px] sm:right-[-73px] bg-pink bg-opacity-75" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', position: 'fixed', top: '50%', padding: '15px', zIndex: 99 }}>
        <h1 className="text-sm sm:text-[25px]" style={{ color: 'white', fontWeight: "bold" }} >GET 10% OFF</h1>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 md:bottom-20 flex justify-center items-center flex-col pt-4">
        <h2 style={{fontFamily:"Poppins"}} className="text-center text-[15px] md:text-4xl sm:text-3xl text-white font-medium leading-normal mb-0 lg:mb-10 ">Turn your idea into an
          
          eye-catching <br className="hidden lg:flex" /> LED neon sign
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-row">
             <Link
            to={"/collections"}
            style={{fontFamily:"Poppins"}}
            className="text-center w-[135px]  md:w-[300px] bg-pink text-[8px] md:text-lg py-2 lg:py-3 px-3 lg:px-6 rounded-full text-white font-bold mt-6"
          >
            Design Your Own Sign
          </Link>
          <Link
           style={{fontFamily:"Poppins"}}
            to={"/collections"}
            className="text-center w-[135px]  md:w-[200px] bg-pink text-[8px] md:text-lg pt-2 lg:py-3 px-3 lg:px-6 rounded-full text-white font-bold mt-6 mx-5"
          >
            Shop Now
          </Link>
          </div>
         
          <Link
           style={{fontFamily:"Poppins"}}
            to={"/collections"}
            className="text-center w-[135px]  md:w-[300px] bg-pink text-[8px] md:text-lg py-2 lg:py-3 px-3 lg:px-6 rounded-full text-white font-bold mt-6"
          >
            Upload An Image
          </Link>
        </div>
      </div>
      <video width={'100%'} id="background-video" loop autoPlay muted>
        <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm" />
      </video> 
    </div>
  );
}

export default HeroSection;
