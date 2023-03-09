import React from "react";
import { Link } from "react-router-dom";
import FooterMenu from "./footerMenu";
// import Logo from "../../../assets/Logo.png";

function Footer() {
  return (
    <footer className="py-6 flex flex-col items-center bg-black">
      <div className="h-28">
        <Link to={"/"}>
          <img
            src="./Logo.png"
            alt="Pick A Neon logo"
            className="h-full w-auto"
          />
        </Link>
      </div>
      <FooterMenu />
      <p className="font-sm text-[#E7E7E7]">
        Copyright © 2018-2022 Pick A Neon®, All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
