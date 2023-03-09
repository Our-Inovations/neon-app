import React from "react";
import { galleryImage } from "../data/galleryImgs";

export default function ImgGallery() {
  return (
    <div className="flex flex-wrap">
      {galleryImage.map((img, i) => (
        <div className="w-2/6" key={i + 1098}>
          <img
            src={img.imgSource}
            alt="gallery images"
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
