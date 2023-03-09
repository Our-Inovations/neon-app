import React from "react";
import brand1 from "../../assets/brands/img1.png";
import brand2 from "../../assets/brands/img2.png";
import brand3 from "../../assets/brands/img3.png";
import brand4 from "../../assets/brands/img4.png";

export default function Brands() {
  return (
    <div className="text-center my-20">
      <h2 className="md:text-3xl text-2xl font-bold text-pink">
        Brands that Choose Us
      </h2>
      <div className="flex gap-10 flex-wrap justify-center mt-6">
        {[brand1, brand2, brand3, brand4, brand1].map((brand, i) => (
          <img key={i + 1308} src={brand} alt="logo of brand" />
        ))}
      </div>
    </div>
  );
}
