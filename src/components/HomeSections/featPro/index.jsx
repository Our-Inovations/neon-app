import React from "react";

function FeaturePro({ img, title, bgColor, scale }) {
  return (
    <div className={`h-88 w-80 p-6 ${bgColor} rounded-lg ${scale}`}>
      <img src={img} alt="image" className="rounded-lg mb-8" />
      <p className="text-white text-lg font-semibold">{title}</p>
    </div>
  );
}

export default FeaturePro;
