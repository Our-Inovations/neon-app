import React from "react";
import heroImg from "../../assets/heroImg.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div
      className="h-[38rem] bg-center bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent), url(${heroImg})`,
      }}
    >
      <div className="text-center mx-auto absolute bottom-14 left-1/2 -translate-x-1/2">
        <h2 className="md:text-4xl sm:text-3xl text-2xl text-white font-medium leading-normal mb-10">
          Turn your idea into an
          <br /> eye-catching LED neon sign
        </h2>
        <Link
          to={"/collections"}
          className="bg-pink text-lg py-3 px-6 rounded-full text-white font-bold mt-6"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
