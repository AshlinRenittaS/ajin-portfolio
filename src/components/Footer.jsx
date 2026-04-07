import React from "react";
import linkedin from "../assets/images/linkedin.webp";
import twitter from "../assets/images/Twitter.png";

const Footer = () => {
  return (
    <footer className="px-4 text-black dark:text-white">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Logo */}
        <h1 className="text-4xl font-semibold tracking-wide">
          Ajin<span className="text-purple-500">.</span>
        </h1>

        {/* Email */}
        <p className="mt-4 flex items-center justify-center gap-2 opacity-80">
          ✉️ ajinpv31@gmail.com
        </p>

        {/* Divider */}
        <div className="border-t border-purple-500/20 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-center items-center text-sm opacity-80">

          <div className="flex gap-6 pb-5">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ajinpv31/"
              className="flex items-center gap-2 hover:text-purple-400"
            >
              <img src={linkedin} alt="linkedin" className="w-5 h-5" />
              LinkedIn
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/aJinpv31"
              className="flex items-center gap-2 hover:text-purple-400"
            >
              <img src={twitter} alt="twitter" className="w-5 h-5" />
              Twitter
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;