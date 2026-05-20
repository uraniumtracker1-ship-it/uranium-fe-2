import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { SITE_CONFIG } from "@/lib/constants";

const Footer2 = () => {
  return (
    <div className="bg-accent text-white w-full py-8 pb-10">
      <div className="container flex flex-col justify-center items-center mx-auto text-center px-3 space-y-4">
        <div className="w-full flex justify-center items-center mb-4">
          <Image
            src="/logo.jpg"
            alt={`${SITE_CONFIG.name} Logo`}
            width={140}
            height={10}
            priority
          />
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-2 text-sm md:text-base">
          <MdEmail className="text-lg md:text-xl" />
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="hover:underline"
          >
            {SITE_CONFIG.email}
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs md:text-sm">
          {[
            { label: "Lithium Tracker", href: "https://www.lithiumtracker.com/" },
            { label: "Copper Tracker", href: "https://www.coppertracker.com/" },
            { label: "Nickel Metal Tracker", href: "https://www.nickelmetaltracker.com/" },
            { label: "Uranium Tracker", href: "https://www.uraniumtracker.com/" },
            { label: "PGM Tracker", href: "https://www.pgmtracker.com/" },
            { label: "Gold & Silver Tracker", href: "https://www.goldandsilvertracker.com/" },
          ].map((link, i, arr) => (
            <React.Fragment key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline whitespace-nowrap">
                {link.label}
              </a>
              {i < arr.length - 1 && <span className="opacity-50">|</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto border-t border-white/40 my-4"></div>

        <div className="text-xs md:text-sm lg:text-base flex flex-wrap justify-center space-x-2">
          <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Disclaimer</span>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
