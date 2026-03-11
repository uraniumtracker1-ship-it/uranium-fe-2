import React, { useState, useEffect } from "react";

const LithiumPrice = () => {
  const [lithiumData, setLithiumData] = useState(null);

  useEffect(() => {
    // Fetch CME lithium spot price data from the API
    fetch('/api/cme-lithium-spot')
      .then((response) => response.json())
      .then((response) => {
        if (response.success && response.data) {
          setLithiumData(response.data);
        } else {
          console.error("Failed to fetch CME lithium data:", response.message);
          // No fallback data - show error state
          setLithiumData(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching CME lithium data:", error);
        // No fallback data - show error state
        setLithiumData(null);
      });
  }, []);

  // If lithiumData is not yet available, render a loading state
  if (!lithiumData) {
    return (
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
        <div className="text-center text-red-400">
          <p>CME lithium spot price data unavailable</p>
          <p className="text-sm text-gray-400">Real-time data only - no fallback data</p>
        </div>
      </div>
    );
  }

  // Extract and format the required values, with fallback to 0.00 if data is invalid
  const price = lithiumData.last_price ? parseFloat(lithiumData.last_price) : 0;
  const lithiumSpotPrice = price > 1000
    ? price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    : price.toFixed(4);
  
  const changeValue = lithiumData.price_change ? parseFloat(lithiumData.price_change) : 0;
  const change = changeValue > 1000
    ? changeValue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    : changeValue.toFixed(4);
  
  const changePercentage = lithiumData.price_change_percent
    ? parseFloat(lithiumData.price_change_percent).toFixed(2)
    : "0.00";

  // Format the change to display the dollar sign before the negative sign if necessary
  const formattedChange = `${changeValue > 0 ? "+" + change : change}`;

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex flex-row gap-10">
        {/* Lithium Spot Price */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">
            Lithium Spot Price
          </h2>
          <p className="text-base mt-1">¥{lithiumSpotPrice}</p>
        </div>
        {/* Change in Yuan */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Change</h2>
          <p
            className={`text-base mt-1 ${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            ¥{formattedChange}
          </p>
        </div>
        {/* Change Percentage */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">% Change</h2>
          <p
            className={`text-base mt-1 ${
              parseFloat(changePercentage) > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {parseFloat(changePercentage) > 0
              ? `+${changePercentage}%`
              : `${changePercentage}%`}
          </p>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden space-y-2">
        <p className="text-base font-bold text-white">
          Lithium Spot Price:{" "}
          <span className="font-normal">¥{lithiumSpotPrice}</span>
        </p>

        <p className="text-base font-bold text-white">
          Change:{" "}
          <span
            className={`${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            } font-normal`}
          >
            ¥{formattedChange}
          </span>
        </p>
        <p className="text-base font-bold text-white">
          Change %:{" "}
          <span
            className={`${
              parseFloat(changePercentage) > 0
                ? "text-green-400"
                : "text-red-400"
            } font-normal`}
          >
            {parseFloat(changePercentage) > 0
              ? `+${changePercentage}%`
              : `${changePercentage}%`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LithiumPrice;
