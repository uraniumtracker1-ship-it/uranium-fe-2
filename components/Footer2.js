import React from "react";
import Image from "next/image";

const trackers = [
  { label: "Lithium Tracker",       href: "https://www.lithiumtracker.com/",         color: "#4ade80" },
  { label: "Copper Tracker",        href: "https://www.coppertracker.com/",           color: "#f97316" },
  { label: "Nickel Metal Tracker",  href: "https://www.nickelmetaltracker.com/",      color: "#60a5fa" },
  { label: "Uranium Tracker",       href: "https://www.uraniumtracker.com/",          color: "#facc15" },
  { label: "PGM Tracker",           href: "https://www.pgmtracker.com/",              color: "#a78bfa" },
  { label: "Gold & Silver Tracker", href: "https://www.goldandsilvertracker.com/",    color: "#fbbf24" },
];

const Footer2 = () => {
  return (
    <div>
      {/* ── Commodities Tracker Network Section ── */}
      <div className="w-full bg-[#0d1117] text-white py-12 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Label */}
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Commodities Tracker Network
          </p>

          {/* Heading + subtitle */}
          <h2 className="cambay text-2xl md:text-3xl font-bold text-white mb-1">
            Explore our suite of real-time commodity trackers
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Built for investors who move fast.
          </p>

          {/* Tracker Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {trackers.map((t) => (
              <a
                key={t.href}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#161b22] border border-white/10 rounded-lg p-4 flex flex-col gap-y-3 hover:border-white/30 hover:bg-[#1c2330] transition-all duration-200"
              >
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: t.color }}
                />
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
                  {t.label}
                </span>
                <span className="text-accent text-xs font-medium">
                  Visit →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div className="bg-accent text-white w-full py-8">
        <div className="container flex flex-col justify-center items-center mx-auto text-center px-4 space-y-5">

          {/* Logo */}
          <Image
            src="/logo.jpg"
            alt="Uranium Tracker Logo"
            width={200}
            height={40}
            priority
          />

          {/* Divider */}
          <div className="w-full md:w-2/3 lg:w-1/2 mx-auto border-t border-white/20" />

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
