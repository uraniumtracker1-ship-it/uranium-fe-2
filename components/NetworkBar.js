import React from "react";

const TRACKERS = [
  { label: "Platinum",        href: "https://www.pgmtracker.com/",              color: "#a0a0a0" },
  { label: "Lithium",         href: "https://www.lithiumtracker.com/",           color: "#4ade80" },
  { label: "Copper",          href: "https://www.coppertracker.com/",            color: "#f97316" },
  { label: "Nickel",          href: "https://www.nickelmetaltracker.com/",       color: "#60a5fa" },
  { label: "Uranium",         href: "https://www.uraniumtracker.com/",           color: "#facc15" },
  { label: "Gold & Silver",   href: "https://www.goldandsilvertracker.com/",     color: "#fbbf24" },
];

const NetworkBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-1.5 px-4 flex items-center gap-x-4 overflow-x-auto custom-scrollbar-hidden text-xs">
      {/* NETWORK label */}
      <span className="shrink-0 text-[10px] font-semibold text-gray-400 uppercase tracking-widest mr-1">
        Network
      </span>

      {TRACKERS.map((t) => (
        <a
          key={t.href}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-x-1.5 text-gray-600 hover:text-accent transition-colors whitespace-nowrap"
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: t.color }}
          />
          <span className="text-[12px] font-medium">{t.label}</span>
          <span className="text-gray-300 text-[10px]">/</span>
        </a>
      ))}
    </div>
  );
};

export default NetworkBar;
