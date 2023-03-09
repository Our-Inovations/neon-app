import React from "react";

export default function Features({ imgSource, title, desc }) {
  return (
    <div className="flex text-center flex-col items-center w-80">
      <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mb-5">
        <img src={imgSource} alt={`img of ${title}`} className="w-10 h-10" />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
