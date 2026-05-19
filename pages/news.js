import Footer from "@/components/Footer";
import DailyNewsletterAd from "@/components/Home/DailyNewsletterAd";
import LatestNews from "@/components/Home/LatestNews";
import StockNews from "@/components/Home/StockNews";
import PressReleaseNews from "@/components/Home/PressReleaseNews";
import Substacks from "@/components/Home/Substacks";
import Navbar from "@/components/Navbar";
import Hero from "@/components/News/Hero";
import React from "react";
import MoreNews from "@/components/News/MoreNews";
import PopularIntradayReturn from "@/components/Home/MostFollowed";
import SEO from "@/components/SEO";

const news = () => {
  return (
    <div>
      <SEO
        title="Uranium News — Latest Nuclear Market Headlines | Uranium Tracker"
        description="Latest uranium and nuclear energy news — mining company updates, reactor developments, U3O8 price moves, and nuclear policy from around the world."
        keywords="uranium news, nuclear energy news, uranium mining news, U3O8 news, nuclear reactor news, uranium stock news"
        canonicalPath="/news"
      />
      <Navbar />
      <div className="mt-14">
        <Hero />
      </div>

      <div className="flex justify-between flex-wrap px-3 md:px-10 lg:px-16 py-12 mt-6">
        {/* left */}
        <div className="w-full lg:w-[66%] flex flex-col space-y-20">
          <LatestNews />
          <PressReleaseNews />
          <StockNews />
        </div>
        {/* right */}
        <div className="w-full lg:w-[26%] space-y-20">
          <DailyNewsletterAd />
          <Substacks />
          <PopularIntradayReturn />
        </div>
      </div>

      {/* More News Section */}
      <MoreNews />

      {/* Footer Section */}
      <div className="mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default news;
