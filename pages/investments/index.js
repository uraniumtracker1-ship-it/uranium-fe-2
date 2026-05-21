import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import SEO from "@/components/SEO";
import Link from "next/link";
import React from "react";

const investmentSections = [
  {
    href: "/investments/leaders",
    title: "Market Snapshot",
    description: "Top uranium performers, market movers, and live price leaders across all exchanges.",
  },
  {
    href: "/investments/screener",
    title: "Stock Screener",
    description: "Filter 60+ uranium stocks by jurisdiction, exchange, market cap, and mine location.",
  },
  {
    href: "/investments/insider-trades",
    title: "Insider Transactions",
    description: "Monitor director and officer buying and selling across US, Canadian, and ASX-listed uranium companies.",
  },
  {
    href: "/investments/etfs",
    title: "ETF & Trust Holdings",
    description: "Explore holdings and allocations for URNM, URA, URNJ, HURA, NLR, NUKZ, and Sprott Physical Uranium Trust.",
  },
  {
    href: "/investments/projects",
    title: "Uranium Projects",
    description: "Browse 419 uranium development projects globally — filter by stage, country, and resource estimate.",
  },
];

const InvestmentsHub = () => {
  return (
    <div>
      <SEO
        title="Uranium Stocks & ETFs — Screener, Insider Trades | Uranium Tracker"
        description="Screen 60+ uranium mining stocks, track insider transactions, explore ETF holdings (URNM, URA, URNJ), and browse 419 uranium projects globally."
        keywords="uranium stocks, uranium ETF, uranium stock screener, uranium insider trades, uranium projects, URNM holdings, URA holdings"
        canonicalPath="/investments"
      />
      <Navbar />
      <div className="pt-[80px]">
        <InvestmentHero
          title="Uranium Stocks, ETFs & Projects"
          description="The complete uranium investment data suite — live stock screener, insider transaction tracker, ETF holdings, and 419 global uranium projects."
        />
      </div>

      <div className="px-3 md:px-12 mt-10 mb-24">
        <h1 className="cambay text-3xl font-bold mb-2">Uranium Investments — Stocks, ETFs &amp; Projects</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          The complete uranium investment data suite — live stock screener, insider transaction tracker, ETF holdings, and 419 global uranium projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {investmentSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="block border border-gray-200 rounded-lg p-6 hover:border-accent hover:shadow-md transition-all duration-200 group"
            >
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-accent mb-2 cambay">
                {section.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InvestmentsHub;
