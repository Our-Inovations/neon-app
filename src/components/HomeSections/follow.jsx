import React from "react";
import { Icon } from "@iconify/react";

export default function FollowSection() {
  return (
    <div className="text-center my-32">
      <h2 className="text-pink text-2xl md:text-3xl font-bold mb-2">
        Follow Us!
      </h2>
      <p className="text-sm">Follow us on social media</p>
      <div className="flex  gap-12 mx-auto w-1/2 items-center justify-center mt-8">
        <a href="https://www.facebook.com/pickaneon" target="_blank" >
        <div className="flex items-center gap-4 flex-col" >
          <Icon
            icon="ic:baseline-facebook"
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <p>Facebook</p>
        </div>
        </a>
        <a href="https://www.instagram.com/pickaneon/" target="_blank" >
        <div className="flex items-center gap-4 flex-col" >
          <Icon
            icon="mdi:instagram"
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <p>Instagram</p>
        </div>
        </a>
      </div>
    </div>
  );
}
