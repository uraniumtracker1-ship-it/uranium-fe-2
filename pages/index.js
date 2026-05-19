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
import { SEO_COPY, SECTION_HEADERS } from "@/lib/constants";

const Home = ({ spotPrice }) => {
  return (
    <div>
      <SEO
        title={SEO_COPY.home.title}
        description={SEO_COPY.home.description}
        keywords={SEO_COPY.home.keywords}
        canonicalPath="/"
        ogImagePath="/og-home.jpg"
        h1={SEO_COPY.home.h1}
        spotPrice={spotPrice}
      />

      <Navbar />
      <div className="mt-[80px]">
        <StocksMarquee />
      </div>

      <Hero spotPrice={spotPrice} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4">
        <div className="col-span-1 md:col-span-3">
          <div className="border rounded-md px-3 py-4">
            <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Uranium ETF (URA)
            </h2>
            <TVUraniumCFD />
          </div>
        </div>
        <div className="col-span-1 md:col-span-6">
          <div className="border rounded-md px-3 py-4">
            <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Prices
            </h2>
            <div className="border rounded-md my-2">
              <DirectHomeUraniumPrice />
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="border rounded-md px-3 py-4">
            <h2 className="text-[21px] cambay font-bold mb-3 border-b border-black/10 pb-1">
              Uranium Miners ETF (URNM)
            </h2>
            <TVUranium />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 px-4 gap-8 mt-8">
        <div className="col-span-1 md:col-span-7">
          <div className="border rounded-md px-3 py-4">
            <div className="flex justify-between items-center mb-3 border-b border-black/10 pb-1">
              <h2 className="text-[21px] cambay font-bold">
                {SECTION_HEADERS.insiderTransactions}
              </h2>
              <a
                href="/investments?tab=insider-transactions"
                className="text-sm text-accent hover:text-accent/80 transition-colors"
              >
                View all
              </a>
            </div>
            <HomeInsiderTransactions />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
          <div className="border rounded-md px-3 py-4">
            <Substacks />
          </div>
          <DailyNewsletterAd />
        </div>
      </div>

      <div className="grid md:grid-cols-9 px-4 gap-8 mt-8">
        <div className="md:col-span-7 border rounded-md px-3 py-4">
          <LatestNews />
        </div>
        <div className="md:col-span-2 border rounded-md px-3 py-4">
          <DirectUraniumPrice spotPrice={spotPrice} />
        </div>
      </div>

      <div className="grid md:grid-cols-9 px-4 gap-8 mt-8">
        <div className="md:col-span-7 border rounded-md px-3 py-4">
          <PressReleaseNews />
        </div>
        <div className="md:col-span-2 border rounded-md px-3 py-4">
          <PopularTools />
        </div>
      </div>

      <div className="grid md:grid-cols-9 px-4 gap-8 mt-8">
        <div className="md:col-span-7 border rounded-md px-3 py-4">
          <StockNews />
        </div>
        <div className="md:col-span-2 border rounded-md px-3 py-4">
          <PopularIntradayReturn />
        </div>
      </div>

      <div className="mx-4">
        <div className="border rounded-md py-4 mt-8 px-4">
          <MostPopularNews />
        </div>
      </div>

      <div className="mt-8">
        <MostFollowedStocksTable />
      </div>

      <div className="mb-8">
        <StayAhead />
      </div>

      <Footer />
    </div>
  );
};

export async function getServerSideProps({ req }) {
  let spotPrice = null;
  try {
    // Fetch live spot price server-side so the hero eyebrow renders in HTML
    // (important for crawlers and LLM citation bots).
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host;
    const res = await fetch(`${protocol}://${host}/api/uranium-prices`);
    if (res.ok) {
      const data = await res.json();
      // Normalise: the API returns either { uranium: price } or an array
      if (Array.isArray(data)) {
        const entry = data.find(
          (d) =>
            d.name?.toLowerCase().includes("uranium") ||
            d.symbol?.toLowerCase().includes("uranium")
        );
        spotPrice = entry?.price ?? entry?.last_price ?? null;
      } else {
        spotPrice =
          data.uranium ?? data.price ?? data.spot_price ?? null;
      }
    }
  } catch (_) {
    // Non-fatal — page still renders, price loads client-side
  }

  return { props: { spotPrice } };
}

export default Home;
