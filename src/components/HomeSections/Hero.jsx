import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div>
      <div className="rotate-90 right-[-42px] sm:right-[-72px]" style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', backgroundColor: 'pink', position: 'fixed', top: '50%', padding: '15px', zIndex: 99 }}>
        <h1 className="text-sm sm:text-[25px]" style={{ color: 'white', fontWeight: "bold" }} >GET 10% OFF</h1>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 flex justify-center items-center flex-col">
        <h2 className="md:text-4xl sm:text-3xl text-2xl text-white font-medium leading-normal mb-10">Turn your idea into an
          <br />
          eye-catching LED neon sign
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          <Link
            to={"/collections"}
            className="text-center w-[200px] md:w-[300px] bg-pink text-[14px] sm:text-lg py-3 px-6 rounded-full text-white font-bold mt-6"
          >
            Design Your Own Sign
          </Link>
          <Link
            to={"/collections"}
            className="text-center w-[200px] md:w-[300px] bg-pink text-[14px] sm:text-lg py-3 px-6 rounded-full text-white font-bold mt-6 mx-5"
          >
            Shop Now
          </Link>
          <Link
            to={"/collections"}
            className="text-center w-[200px] md:w-[300px] bg-pink text-[14px] sm:text-lg py-3 px-6 rounded-full text-white font-bold mt-6"
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
