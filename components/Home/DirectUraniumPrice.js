import axios from "axios";
import React, { useState, useEffect } from "react";

const DirectUraniumPrice = () => {
  const [uraniumData, setUraniumData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUraniumPrice = async () => {
      try {
        setLoading(true);

        const response = await axios("/api/cme-uranium-spot");

        if (!Array.isArray(response.data) || response.data.length === 0) {
          setUraniumData(null);
          return;
        }

        const cmeData = response.data[0];

        setUraniumData({
          price: parseFloat(cmeData.price),
          price_change: parseFloat(cmeData.day_change),
          price_change_percent: parseFloat(cmeData.percent_change),
          source: "CME Group",
          last_updated: cmeData.date,
        });
      } catch (error) {
        console.error("Error fetching CME uranium spot price:", error);
        setError(error.message);
        setUraniumData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUraniumPrice();

    const interval = setInterval(fetchUraniumPrice, 2 * 60 * 1000);
    return () => clearInterval(interval);
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

  if (!uraniumData) {
    return (
      <div className="text-center">
        <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
          Live Uranium Price
        </h2>
        <div className="text-center py-8 text-red-500">
          <p>CME uranium spot price data unavailable</p>
          <p className="text-sm text-gray-600 mt-2">
            Real-time data only - no fallback data
          </p>
          {error && <p className="text-xs text-red-400 mt-2">Error: {error}</p>}
        </div>
      </div>
    );
  }

  const { price, price_change, price_change_percent, source } = uraniumData;

  // Format large numbers (CNY) with commas
  const formattedPrice =
    price > 1000
      ? price.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : price.toFixed(2);

  const changeValue = parseFloat(price_change || 0);
  const formattedChange =
    Math.abs(changeValue) > 1000
      ? Math.abs(changeValue).toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : Math.abs(changeValue).toFixed(2);

  const formattedPercent = parseFloat(price_change_percent || 0).toFixed(2);

  return (
    <div className="text-center">
      <h2 className="flex text-[21px] md:text-[16px] lg:text-[21px] cambay font-bold text-black1/80 capitalize border-b border-black1/20 pb-2 mb-6 lg:mb-4">
        Live Uranium Price
      </h2>

      {/* Single row with all data */}
      <div className="bg-accent/30 p-4 md:p-3 lg:p-4 w-full border border-accent/30 rounded-md">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="w-24 md:w-28 lg:w-32 h-auto object-contain"
              src="/logo.jpg"
              alt="Uranium Tracker Logo"
            />
          </div>

          {/* Price Data */}
          <div className="flex-1 grid grid-cols-3 gap-1 text-center">
            {/* Price */}
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-[10px] text-black1/60 font-medium mb-1">
                Price
              </p>
              <p className="text-sm md:text-xs lg:text-sm font-bold text-green">
                ${formattedPrice}
              </p>
            </div>

            {/* Change */}
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-[10px] text-black1/60 font-medium mb-1">
                Change
              </p>
              <p
                className={`text-sm md:text-xs lg:text-sm font-bold ${
                  changeValue >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {changeValue >= 0
                  ? `+${formattedChange}`
                  : `-${formattedChange}`}
              </p>
            </div>

            {/* % Change */}
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-[10px] text-black1/60 font-medium mb-1">
                % Change
              </p>
              <p
                className={`text-sm md:text-xs lg:text-sm font-bold ${
                  parseFloat(formattedPercent) >= 0
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {parseFloat(formattedPercent) >= 0
                  ? `+${formattedPercent}%`
                  : `${formattedPercent}%`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 text-start">
        <p className="text-xs text-gray-600">Source: {source}</p>
        <p className="font-medium text-date text-sm md:text-xs lg:text-sm">
          <a
            target="_blank"
            className="text-accent hover:text-accent/60 transition-all duration-200"
            href="https://tradingeconomics.com/commodity/uranium"
            rel="noopener noreferrer"
          >
            CME Group - Uranium Futures
          </a>
        </p>
      </div>
    </div>
  );
};

export default DirectUraniumPrice;
