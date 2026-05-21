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
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4">
        <div className="col-span-1 md:col-span-3">
          <div className="border rounded-md  px-3 py-4 ">
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Uranium Price Chart
            </h1>
            <TVUraniumCFD />
          </div>
        </div>
        <div className="col-span-1 md:col-span-6">
          <div className="border rounded-md  px-3 py-4 ">
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Prices
            </h1>
            <div className="border rounded-md my-2">
              <DirectHomeUraniumPrice />
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="border rounded-md  px-3 py-4 ">
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Uranium Futures
            </h1>
            <TVUranium />
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-9 px-4 gap-8 mt-8">
        <div className="col-span-1 md:col-span-7">
          <div className="border rounded-md  px-3 py-4 ">
            <div className="flex justify-between items-center mb-3 border-b border-black/10 pb-1">
              <h1 className="text-[21px] cambay font-bold">
                Recent Canadian Company Insider Transactions
              </h1>
              <a
                href="/investments"
                className="text-sm text-accent hover:text-accent/80 transition-colors"
              >
                view all
              </a>
            </div>
            <HomeInsiderTransactions />
          </div>
        </div>
        <div className="col-span-1  md:col-span-2 flex flex-col gap-8 ">
          <div className="border rounded-md  px-3 py-4 ">
            <Substacks />
          </div>

          <DailyNewsletterAd />
        </div>
      </div>

      <div className="grid md:grid-cols-9 px-4 gap-8 mt-8">
        <div className="md:col-span-9 border rounded-md  px-3 py-4 ">
          <LatestNews />
        </div>
      </div>

      <div className="grid md:grid-cols-9 px-4 gap-8 mt-8">
        <div className="md:col-span-7 border rounded-md  px-3 py-4 ">
          <PressReleaseNews />
        </div>
        <div className="md:col-span-2 border rounded-md  px-3 py-4 ">
          <PopularTools />
        </div>
      </div>

      <div className="grid md:grid-cols-9 px-4 gap-8 mt-8">
        <div className="md:col-span-7 border rounded-md  px-3 py-4 ">
          <StockNews />
        </div>
        <div className="md:col-span-2 border rounded-md  px-3 py-4 ">
          <PopularIntradayReturn />
        </div>
      </div>

      <div className="mx-4">
        {" "}
        <div className="border rounded-md py-4 mt-8 px-4 ">
          <MostPopularNews />
        </div>
      </div>

      <div className="mt-8">
        <MostFollowedStocksTable />
      </div>

      <div className="mb-8">
        <StayAhead />
      </div>

      {/* footer -------------------------------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
};

export default home;
