import React from "react";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import Navbar from "@/components/Navbar";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import StayAhead from "@/components/Home/StayAhead";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import PopularTools from "@/components/Home/PopularTools";
import MostPopularNews from "@/components/Home/MostPopularNews";
import Substacks from "@/components/Home/Substacks";
import Footer from "@/components/Footer";
import TVUraniumCFD from "@/components/Home/TVUraniumCFD";
import TVUranium from "@/components/Home/TVUranium";
import DirectHomeUraniumPrice from "@/components/Home/DirectHomeUraniumPrice";
import HomeInsiderTransactions from "@/components/Home/HomeInsiderTransactions";
import SEO from "@/components/SEO";
import StocksMarquee from "@/components/Home/StocksMarquee";
import MostFollowedStocksTable from "@/components/Home/MostFollowedStocksTable";

const home = () => {
  return (
    <div>
      <SEO
        title="Uranium Tracker — Live U3O8 Price, Stocks & Nuclear News"
        description="Live U3O8 spot price, top uranium stocks (CCJ, NXE, UEC), ETFs (URNM, URA, URNJ), insider trades, and nuclear news. The data hub for uranium investors."
        keywords="uranium price today, U3O8 spot price, uranium stocks, uranium ETFs, URNM, URA, CCJ, NexGen, uranium news, nuclear energy"
        canonicalUrl="https://www.uraniumtracker.com/"
      />

      <Navbar />
      <div className="mt-[80px]">
        <StocksMarquee />
      </div>

      <Hero />

      {/* ── Row 1: Charts + Prices ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 mt-6">
        <div className="md:col-span-3">
          <div className="border rounded-md px-3 py-4 h-full">
            <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Uranium Price Chart
            </h2>
            <TVUraniumCFD />
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="border rounded-md px-3 py-4 h-full">
            <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Prices
            </h2>
            <DirectHomeUraniumPrice />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="border rounded-md px-3 py-4 h-full">
            <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Uranium Futures
            </h2>
            <TVUranium />
          </div>
        </div>
      </div>

      {/* ── Row 2: Insider Transactions + Sidebar ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 mt-6">
        <div className="md:col-span-9">
          <div className="border rounded-md px-3 py-4">
            <div className="flex justify-between items-center mb-3 border-b border-black/10 pb-1">
              <h2 className="text-[21px] cambay font-bold">
                Recent Canadian Company Insider Transactions
              </h2>
              <a
                href="/investments"
                className="text-sm text-accent hover:text-accent/80 transition-colors shrink-0 ml-4"
              >
                view all
              </a>
            </div>
            <HomeInsiderTransactions />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col gap-6">
          <div className="border rounded-md px-3 py-4">
            <Substacks />
          </div>
        </div>
      </div>

      {/* ── Row 3: Latest News (full width) ── */}
      <div className="px-4 mt-6">
        <div className="border rounded-md px-3 py-4">
          <LatestNews />
        </div>
      </div>

      {/* ── Rows 4 + 5: Main content + sticky right sidebar ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 mt-6 items-start">
        {/* Left: Press Release + Stock News stacked */}
        <div className="md:col-span-9 flex flex-col gap-6">
          <div className="border rounded-md px-3 py-4">
            <PressReleaseNews />
          </div>
          <div className="border rounded-md px-3 py-4">
            <StockNews />
          </div>
        </div>

        {/* Right: sticky sidebar with Popular Tools + Most Watched */}
        <div className="md:col-span-3 flex flex-col gap-6 md:sticky md:top-[88px]">
          <div className="border rounded-md px-3 py-4">
            <PopularTools />
          </div>
          <div className="border rounded-md px-3 py-4">
            <PopularIntradayReturn />
          </div>
        </div>
      </div>

      {/* ── Most Popular News (full width) ── */}
      <div className="px-4 mt-6">
        <div className="border rounded-md py-4 px-4">
          <MostPopularNews />
        </div>
      </div>

      {/* ── Most Followed Stocks Table ── */}
      <div className="mt-6">
        <MostFollowedStocksTable />
      </div>

      {/* ── SEO Content Section ── */}
      <div className="px-4 md:px-12 py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="cambay text-2xl font-bold mb-4 text-gray-800">
            About Uranium Tracker
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600 leading-7">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Live U3O8 Spot Price & Market Data</h3>
              <p>
                Uranium Tracker provides real-time U3O8 spot prices sourced from the CME Group, alongside long-term contract price benchmarks. The uranium spot price reflects the current market rate for physical uranium oxide concentrate — the primary feedstock for nuclear fuel. Our live price feed updates continuously so investors can track intraday movements, daily changes, and percentage shifts at a glance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Top Uranium Stocks & ETFs</h3>
              <p>
                Track the world's leading uranium mining companies including Cameco (CCJ), NexGen Energy (NXE), Uranium Energy Corp (UEC), Paladin Energy (PDN), Boss Energy (BOE), Deep Yellow (DYL), and Denison Mines (DNN). Monitor uranium ETFs including URNM (Sprott Uranium Miners ETF), URA (Global X Uranium ETF), and URNJ (Sprott Junior Uranium Miners ETF) — all in one place.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Uranium Insider Trading Database</h3>
              <p>
                Our insider trading tracker aggregates Form 4 filings from the SEC (US), SEDI filings from Canada, and ASX disclosures from Australia. Monitor when company directors, officers, and major shareholders buy or sell uranium stocks — a key signal for retail and institutional investors tracking the uranium investment thesis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Nuclear Energy & Uranium Market Outlook</h3>
              <p>
                Nuclear energy is experiencing a global renaissance driven by decarbonisation targets, energy security concerns, and the rise of small modular reactors (SMRs). Uranium demand is forecast to grow significantly through 2030 and beyond as new reactor builds accelerate in the US, Europe, China, India, and the Middle East. Uranium Tracker covers the full supply-demand picture — from Kazakh production to US enrichment capacity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <StayAhead />
      </div>

      <Footer />
    </div>
  );
};

export default home;
