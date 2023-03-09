import React from "react";
import FeaturePro from "./featPro";
import { featureDataWithImg } from "../data/featuresdata";
import Features from "./featPro/features";
import { featuresContent } from "../data/featuresdata";

function FeaturesSection() {
  return (
    <div className="my-20">
      <div className="md:w-4/6 px-4 mx-auto text-center">
        <h2 className="text-pink text-2xl md:text-3xl font-semibold w-4/6 mx-auto mb-10">
          Pick A Neon is the most affordable supplier of LED neon light signs.
        </h2>
        <p>
          Let us light up your life with quality LED neon signs for home,
          business, weddings, events, & more. Take a business logo, song lyrics,
          a kid's name, or even the shape of your dog, & neon-ify it! We are
          helping make art accessible with easy-to-design, stylish neon lights.
          Now there's no excuse not to turn up the brightness!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-20 items-center md:items-stretch  justify-center mb-32">
        {featureDataWithImg.map((item, i) => (
          <FeaturePro {...item} key={i + 743} />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-20 w-4/6 justify-center mx-auto">
        {featuresContent.map((feature, i) => (
          <Features {...feature} key={i + 958} />
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
