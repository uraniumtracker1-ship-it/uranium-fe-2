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
import DirectUraniumPrice from "@/components/Home/DirectUraniumPrice";
import DirectHomeUraniumPrice from "@/components/Home/DirectHomeUraniumPrice";
import HomeInsiderTransactions from "@/components/Home/HomeInsiderTransactions";
import SEO from "@/components/SEO";
import StocksMarquee from "@/components/Home/StocksMarquee";
import MostFollowedStocksTable from "@/components/Home/MostFollowedStocksTable";

const home = () => {
  return (
    <div>
      <SEO
        title="Lithium Tracker - Real-time News, Prices & Analysis"
        description="Stay ahead with real-time Lithium market news, price updates, and in-depth analysis. Get accurate insights into the lithium market trends."
        keywords="Lithium prices, Lithium news, Lithium market analysis, Industrial metals, Lithium trading, Lithium updates, Lithium investment, Real-time Lithium updates,investment"
        canonicalUrl="https://musical-panda-75f15d.netlify.app/"
      />

      <Navbar />
      <div className="mt-[80px]">
        <StocksMarquee />
      </div>

      <Hero />

      {/* 3 cols  */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 px-3 md:px-10 lg:px-12 py-8 mb-8">
        {/* 1  */}
        <div className="w-full lg:w-[24%] flex flex-col space-y-6">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Lithium Price Chart
            </h1>
            <TVUraniumCFD />
          </div>
        </div>

        {/* 2  */}
        <div className="w-full lg:w-[40%] flex flex-col space-y-6">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Prices
            </h1>
            <DirectHomeUraniumPrice />
          </div>
          <div>
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

        {/* 3  */}
        <div className="w-full lg:w-[24%] flex flex-col space-y-6">
          <div>
            <h1 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Lithium Futures
            </h1>
            <TVUranium />
          </div>

          <Substacks />

          <DailyNewsletterAd />
        </div>
      </div>

      {/* 2 cols  */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 px-3 md:px-10 lg:px-12 py-8 mb-8">
        {/* left  */}
        <div className="w-full lg:w-[66%] flex flex-col space-y-12">
          <LatestNews />
          <PressReleaseNews />
          <StockNews />
          <MostPopularNews />
        </div>
        {/* right  */}
        <div className="w-full lg:w-[26%] space-y-12">
          <DirectUraniumPrice />
          {/* <LithiumTradingviewChart /> */}
          <PopularIntradayReturn />
          <PopularTools />
          {/* <DailyNewsletterAd /> */}
          {/* <Substacks /> */}
        </div>
      </div>
      
      {/* Most Followed Stocks Table */}
      <MostFollowedStocksTable />
      
      {/* Stay ahead section */}
      <div className="mb-8">
        <StayAhead />
      </div>

      {/* footer -------------------------------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
};

export default home;
