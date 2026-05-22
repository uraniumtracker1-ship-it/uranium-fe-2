import axios from "axios";
import React, { useState, useEffect } from "react";

const UraniumPrice = () => {
  const [uraniumData, setUraniumData] = useState(null);

  useEffect(() => {
    // Fetch CME uranium spot price data from the API

    async function getData() {
      const response = await axios.get("/api/cme-uranium-spot");
      console.log(response.data);
      if (!response.data) {
        setUraniumData([]);
      }
      setUraniumData(response.data[0]);
    }
    getData();
  }, []);

  // If uraniumData is not yet available, render a loading state
  if (!uraniumData) {
    return (
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
        <div className="text-center text-red-400">
          <p>CME uranium spot price data unavailable</p>
          <p className="text-sm text-gray-400">
            Real-time data only - no fallback data
          </p>
        </div>
      </div>
    );
  }

  // Extract and format the required values, with fallback to 0.00 if data is invalid
  const price = uraniumData.price ? parseFloat(uraniumData.price) : 0;
  const uraniumSpotPrice =
    price > 1000
      ? price.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : price.toFixed(4);

  const changeValue = uraniumData.day_change
    ? parseFloat(uraniumData.day_change)
    : 0;
  const change =
    changeValue > 1000
      ? changeValue.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : changeValue.toFixed(4);

  const changePercentage = uraniumData.percent_change ?? "0%";

  // Format the change to display the dollar sign before the negative sign if necessary
  const formattedChange = `${changeValue > 0 ? "+" + change : change}`;

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex flex-row gap-10">
        {/* Uranium Spot Price */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Uranium Spot Price</h2>
          <p className="text-base mt-1">${uraniumSpotPrice}</p>
        </div>
        {/* Change in Yuan */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Change</h2>
          <p
            className={`text-base mt-1 ${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            ${formattedChange}
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
            {changePercentage}
          </p>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden space-y-2">
        <p className="text-base font-bold text-white">
          Uranium Spot Price:{" "}
          <span className="font-normal">${uraniumSpotPrice}</span>
        </p>

        <p className="text-base font-bold text-white">
          Change:{" "}
          <span
            className={`${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            } font-normal`}
          >
            ${formattedChange}
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

export default UraniumPrice;
