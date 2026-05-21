import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const trackers = [
  { label: "Lithium Tracker",      href: "https://www.lithiumtracker.com/" },
  { label: "Copper Tracker",       href: "https://www.coppertracker.com/" },
  { label: "Nickel Metal Tracker", href: "https://www.nickelmetaltracker.com/" },
  { label: "Uranium Tracker",      href: "https://www.uraniumtracker.com/" },
  { label: "PGM Tracker",          href: "https://www.pgmtracker.com/" },
  { label: "Gold & Silver Tracker",href: "https://www.goldandsilvertracker.com/" },
];

const Footer2 = () => {
  return (
    <div>
      <div className="bg-accent text-white w-full py-8 pb-10">
        <div className="container flex flex-col justify-center items-center mx-auto text-center px-3 space-y-4">
          {/* Logo and Title */}
          <div className="w-full flex justify-center items-center mb-4">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={140}
              height={10}
              priority
            />
          </div>

          {/* Contact Email */}
          <div className="flex flex-wrap justify-center items-center space-x-2 text-sm md:text-base">
            <MdEmail className="text-lg md:text-xl" />
            <span>info@uraniumtracker.com</span>
          </div>

          {/* Divider */}
          <div className="w-full md:w-2/3 lg:w-1/2 mx-auto border-t border-white/40 my-4"></div>

          {/* Bottom Links */}
          <div className="text-xs md:text-sm lg:text-base flex flex-wrap justify-center space-x-2">
            <span>© 2026 Uranium Tracker</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Disclaimer</span>
          </div>
        </div>
      </div>

      {/* Tracker Network Bar */}
      <div className="w-full bg-[#b5a46a] py-3">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 px-4 text-white text-xs md:text-sm">
          {trackers.map((t, i) => (
            <React.Fragment key={t.href}>
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline whitespace-nowrap"
              >
                {t.label}
              </a>
              {i < trackers.length - 1 && (
                <span className="opacity-50">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer2;
