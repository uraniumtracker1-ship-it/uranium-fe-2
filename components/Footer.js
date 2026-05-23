import React from "react";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-5 py-10">

        <div className="flex flex-col xl:flex-row  gap-8">

          <div className="w-full">
            <h2 className="text-[clamp(1.4rem,5vw,2.5rem)] font-semibold leading-snug mb-4 text-white frank">
              Everything You Need to Navigate the Uranium Market – All in One Place
            </h2>
            <p className="text-[clamp(0.8rem,2.5vw,0.95rem)] text-white/70 leading-7 max-w-[600px]">
              With demand for clean energy on the rise, many investors are
              looking for the next big opportunity in Uranium. We're here to help.
            </p>
          </div>

          <div className="w-full max-w-[500px]">
            <img
              src="/mockup.png"
              alt="Uranium Tracker platform — live uranium price dashboard and market data"
              className="w-full h-auto block"
            />
          </div>

        </div>
      </div>
      <Footer2 />
    </footer>
  );
};

export default Footer;