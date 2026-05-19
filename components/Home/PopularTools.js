import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { SECTION_HEADERS } from "@/lib/constants";

const TOOLS = [
  {
    href: "/investments/screener",
    title: "Uranium Stock Screener",
    description:
      "Filter and compare 60+ uranium mining companies by market cap, exchange, domicile, mine location, and performance metrics.",
  },
  {
    href: "/investments/insider-trades",
    title: "Uranium Insider Trading Screener",
    description:
      "Track insider buying and selling across uranium mining companies in the US, Canada, and Australia.",
  },
  {
    href: "/investments/projects",
    title: "Uranium Asset Screener",
    description:
      "Filter and explore 200+ uranium projects globally — by jurisdiction, mining method (ISR / underground / open pit), development stage, grade, and resource size.",
  },
];

const PopularTools = () => {
  return (
    <div>
      <div className="flex justify-between border-b border-black1/20 pb-2 mb-4">
        <h2 className="flex items-center text-[21px] font-bold cambay capitalize">
          {SECTION_HEADERS.popularTools}
        </h2>
        <a
          href="/investments"
          className="text-accent hover:text-accent/70 text-sm font-bold"
        >
          View all &gt;
        </a>
      </div>

      <div className="flex flex-col gap-y-3">
        {TOOLS.map((tool) => (
          <a key={tool.href} href={tool.href}>
            <div className="w-full bg-gray-100 p-4 py-7 border border-gray-300 rounded-sm relative group hover:bg-accent/15 hover:scale-[1.02] transition-all duration-200">
              <h3 className="text-[1.2rem] font-medium text-black/80 mb-2 group-hover:text-accent">
                {tool.title}
              </h3>
              <p className="text-[15px] group-hover:text-black/70">
                {tool.description}
              </p>
              <span className="absolute top-4 right-4 text-gray-400/80 font-extrabold text-[1.6rem] group-hover:text-green/60">
                <BsArrowUpRight />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularTools;
