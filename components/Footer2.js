import React from "react";
import Image from "next/image";

const trackers = [
  { label: "Lithium Tracker",       href: "https://www.lithiumtracker.com/" },
  { label: "Copper Tracker",        href: "https://www.coppertracker.com/" },
  { label: "Nickel Metal Tracker",  href: "https://www.nickelmetaltracker.com/" },
  { label: "Uranium Tracker",       href: "https://www.uraniumtracker.com/" },
  { label: "PGM Tracker",           href: "https://www.pgmtracker.com/" },
  { label: "Gold & Silver Tracker", href: "https://www.goldandsilvertracker.com/" },
];

const Footer2 = () => {
  return (
    <div>
      <div className="bg-accent text-white w-full py-10 pb-12">
        <div className="container flex flex-col justify-center items-center mx-auto text-center px-4 space-y-6">

          {/* Logo */}
          <div className="w-full flex justify-center items-center">
            <Image
              src="/logo.jpg"
              alt="Uranium Tracker Logo"
              width={200}
              height={40}
              priority
            />
          </div>

          {/* Tagline */}
          <div className="space-y-1">
            <p className="text-white/50 text-xs uppercase tracking-[0.25em] font-semibold">
              Part of the
            </p>
            <h2 className="cambay text-2xl md:text-3xl font-bold text-white tracking-wide">
              Commodities Tracker Network
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Explore our suite of real-time commodity trackers — built for investors who move fast.
            </p>
          </div>

          {/* Tracker Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {trackers.map((t) => (
              <a
                key={t.href}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full border border-white/30 text-white/80 text-xs md:text-sm font-medium hover:bg-white hover:text-accent transition-all duration-200 whitespace-nowrap"
              >
                {t.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full md:w-2/3 lg:w-1/2 mx-auto border-t border-white/20 pt-4" />

          {/* Bottom Links */}
          <div className="text-xs md:text-sm flex flex-wrap justify-center gap-x-3 gap-y-1 text-white/60">
            <span>© 2026 Uranium Tracker</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white transition-colors">Disclaimer</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer2;
