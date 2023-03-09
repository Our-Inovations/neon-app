import React from "react";
import { Icon } from "@iconify/react";

function FooterSocialLinks() {
  return (
    <div className="flex justify-center sm:justify-start text-2xl gap-4 mt-4">
     <a href="https://www.facebook.com/pickaneon" target="_blank" > <Icon icon="ic:baseline-facebook" /></a>
     <a href="https://www.instagram.com/pickaneon/" target="_blank" ><Icon icon="mdi:instagram" /></a> 
    </div>
  );
}

export default FooterSocialLinks;
