import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Icon } from "@iconify/react";

export default function Reviews() {
  return (
    <div className="text-center my-20 relative">
      <h2 className="text-2xl md:text-3xl text-pink font-bold mb-20">
        Our Reviews
      </h2>
      <div className="h-92 sm:h-72 bg-pink rounded-t-[50px] w-screen -rotate-3 relative flex items-center text-white justify-center">
        <Carousel
          className="rotate-3 mt-16 w-5/6"
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute top-16 z-20 p-2 rounded-full bg-black cursor-pointer opacity-60 hover:opacity-100"
            >
              {" "}
              <Icon
                icon="material-symbols:arrow-back-ios-new-rounded"
                className="h-6 w-6"
              />
            </div>
          )}
          renderArrowNext={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute right-0 top-16 z-20 p-2  rounded-full bg-black cursor-pointer opacity-60 hover:opacity-100"
            >
              <Icon
                icon="material-symbols:arrow-forward-ios-rounded"
                className="h-6 w-6"
              />
            </div>
          )}
        >
          <div className="text-left mx-auto w-4/6 md:3/6">
            <h2 className="text-xl font-bold mb-8">John </h2>
            <p>
              The convenience and affordability are what makes me the happiest
              about this store. My custom neon sign turned out to be great!!!
            </p>
          </div>
          <div className="text-left mx-auto w-2/6">
            <h2 className="text-xl font-bold mb-8">Jane Doe</h2>
            <p>
              The convenience and affordability are what makes me the happiest
              about this store. My custom neon sign turned out to be great!!!
            </p>
          </div>
        </Carousel>
      </div>
      <div className="h-44 bg-pink absolute w-full -bottom-8 -z-10"></div>
    </div>
  );
}
