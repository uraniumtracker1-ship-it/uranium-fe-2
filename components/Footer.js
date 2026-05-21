import React from "react";
import Footer2 from "./Footer2";
import { FOOTER_DISCLAIMER, FOOTER_SOURCE_ATTRIBUTION } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-5 py-10">

        <div className="flex flex-col xl:flex-row gap-8">

          <div className="w-full">
            <h2 className="text-[clamp(1.4rem,5vw,2.5rem)] font-semibold leading-snug mb-4 text-white frank">
              Everything You Need to Navigate the Uranium Market — All in One Place
            </h2>
            <p className="text-[clamp(0.8rem,2.5vw,0.95rem)] text-white/70 leading-7 max-w-[600px]">
              With nuclear energy demand accelerating globally, uranium is
              attracting serious capital. Uranium Tracker gives investors
              real-time U3O8 prices, stock data, insider trades, and
              news — all in one place.
            </p>
          </div>

        </div>

        {/* Disclaimer + source attribution */}
        <div className="mt-10 pt-8 border-t border-white/10 space-y-3">
          <p className="text-xs text-white/40 leading-relaxed">{FOOTER_DISCLAIMER}</p>
          <p className="text-xs text-white/30 leading-relaxed">{FOOTER_SOURCE_ATTRIBUTION}</p>
        </div>

      </div>
      <Footer2 />
    </footer>
  );
};

export default Footer;
