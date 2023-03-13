import React from "react";
import { Link } from "react-router-dom";

function FeaturePro({ img, title, bgColor, scale }) {
  return (
    <div className={`h-88 w-80 p-6 ${bgColor} rounded-lg ${scale}`}>
    <Link
    to={
      title === 'Our Store' ? `/collections` : `/`||  title === 'Business and Logos' ? `/custom-design` : `/`}
    >
      <img src={img} alt="image" className="rounded-lg mb-8" />
      <p className="text-white text-lg font-semibold">{title}</p>
    </Link>
    </div>
  );
}

export default FeaturePro;
