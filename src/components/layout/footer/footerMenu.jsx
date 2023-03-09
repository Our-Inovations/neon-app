import React from "react";
import FooterSocialLinks from "./footerSocial";
import { Link } from "react-router-dom";

function FooterMenu() {
  return (
    <div className="flex flex-col text-center sm:text-left sm:flex-row text-white w-4/6 mx-auto flex-wrap gap-10 sm:gap-4 my-16 ">
      <ul className="footerli text-yellow ">
        <Link to={`/about-us`}>About</Link>
        <Link to={`/contact`}>Contact Us</Link>
        <Link to={`/collections`}>Visit Our Site</Link>
        <Link to={`/`}>Showcase</Link>
        {/* <li>Showcase</li> */}
      </ul>
      <ul className="footerli text-pink">
        <Link to={`/faq`}>FAQs</Link>
        <Link to={`/privacy-policy`}>Privacy</Link>
        <Link to={`/terms-and-condition`}>Terms & Conditions</Link>
        <Link to={`/retrun-policy`}>Returns Policy</Link>
      </ul>
      <div className="flex-1">
        <h2 className="text-yellow font-medium mb-4">Pick A Neon</h2>
        <p>
         Order In this Website
        </p>
      </div>
      <div className="flex-1">
        <h2 className="footerHeading">Contact Info</h2>
        <a href="mailto:official@pickaneon.com" className="inline-block">
          official@pickaneon.com
        </a>
        <a href="tel:+447535776728">+447535776728</a>
        <FooterSocialLinks />
      </div>
    </div>
  );
}

export default FooterMenu;
