import React, { useState, useEffect } from "react";
import { URANIUM_PRICES_EXTENDED } from "@/src/api/uraniumAPI";

const UraniumLivePrice = () => {
  const [uraniumData, setUraniumData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUraniumPrice = async () => {
      try {
        const response = await fetch(URANIUM_PRICES_EXTENDED);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Find the Uranium data from the response
        const uraniumInfo = data.find(
          (item) =>
            item.metal_name === "Uranium" || item.pgm_name === "Uranium",
        );
        setUraniumData(uraniumInfo);
      } catch (error) {
        console.error("Error fetching uranium price:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUraniumPrice();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Uranium Price
        </h2>
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
          <span className="ml-3 text-gray-800 font-semibold">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Uranium Price
        </h2>
        <div className="text-center py-8 text-red-500">
          Error loading uranium price: {error}
        </div>
      </div>
    );
  }

  if (!uraniumData) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Uranium Price
        </h2>
        <div className="text-center py-8 text-gray-500">
          No uranium price data available
        </div>
      </div>
    );
  }

  // Format large numbers (CNY) with commas, small numbers (USD) with decimals
  const price = parseFloat(uraniumData.price || 0);
  const uraniumSpotPrice =
    price > 1000
      ? price.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : price.toFixed(2);

  const changeValue = parseFloat(uraniumData.price_change || 0);
  const change =
    changeValue > 1000
      ? changeValue.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : changeValue.toFixed(2);

  const changePercentage = parseFloat(
    uraniumData.price_change_percent || 0,
  ).toFixed(2);

  return (
    <div className="text-center">
      <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
        Live Uranium Price
      </h2>

      {/* Price card — stacked rows, no overlap */}
      <div className="bg-accent/30 p-4 w-full border border-accent/30 rounded-md">
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <img
            className="w-28 h-auto object-contain"
            src="/logo.jpg"
            alt="Uranium Tracker Logo"
          />
        </div>

        {/* Header row */}
        <div className="flex items-center justify-between border-b border-accent/20 pb-2 mb-2">
          <span className="text-[11px] text-black1/50 font-semibold uppercase tracking-wide w-1/3">Metric</span>
          <span className="text-[11px] text-black1/50 font-semibold uppercase tracking-wide text-right w-2/3">Value</span>
        </div>

        {/* Data rows */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-black1/60 font-medium">Price</span>
            <span className="text-sm font-bold text-green">{uraniumSpotPrice}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-black1/60 font-medium">Change</span>
            <span className={`text-sm font-bold ${changeValue >= 0 ? "text-green-600" : "text-red-500"}`}>
              {changeValue >= 0 ? `+${change}` : `${change}`}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-black1/60 font-medium">% Change</span>
            <span className={`text-sm font-bold ${parseFloat(changePercentage) >= 0 ? "text-green-600" : "text-red-500"}`}>
              {parseFloat(changePercentage) >= 0 ? `+${changePercentage}%` : `${changePercentage}%`}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-2 text-start font-medium text-date text-sm md:text-xs lg:text-sm">
        <a
          target="_blank"
          className="text-accent hover:text-accent/60 transition-all duration-200"
          href="https://tradingeconomics.com/commodity/uranium"
          rel="noopener noreferrer"
        >
          tradingeconomics.com/uranium
        </a>
      </p>
    </div>
  );
};

export default UraniumLivePrice;
