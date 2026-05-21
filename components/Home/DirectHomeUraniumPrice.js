import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa6";

const DirectHomeUraniumPrice = () => {
  const [uraniumPrices, setUraniumPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPricesFromDatabase = async () => {
      try {
        setLoading(true);

        // Fetch metal prices from our database API
        const response = await axios("/api/uranium-prices");

        if (!response.data) {
          console.warn(
            `Uranium prices API returned ${response.status} — showing empty state`,
          );
          setUraniumPrices([]);
          setLoading(false);
          return;
        }

        const data = response.data;

        // Filter to uranium-only rows, then map to component format
        const metalPrices = (Array.isArray(data) ? data : [])
          .filter((item) => item.metal_name?.toLowerCase() === "uranium")
          .map((item) => ({
            metal_name: item.metal_name,
            price: parseFloat(item.price),
            price_change: parseFloat(item.price_change),
            price_change_percent: parseFloat(item.price_change_percent),
          }));

        setUraniumPrices(metalPrices);
      } catch (err) {
        console.error("Error fetching prices from database:", err);
        setError(err.message);

        setUraniumPrices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPricesFromDatabase();

    // Refresh every 2 minutes
    const interval = setInterval(fetchPricesFromDatabase, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Format price to 2 decimal places with en-US locale (comma thousands separator)
  const fmtPrice = (value) => {
    const n = parseFloat(value);
    if (isNaN(n)) return "0.00";
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
  };

  // Format percentage to exactly 2 decimal places
  const fmtPct = (value) => {
    const n = parseFloat(value);
    if (isNaN(n)) return "0.00";
    return n.toFixed(2);
  };

  const getChangeClass = (value) => {
    const n = parseFloat(value);
    if (n > 0) return "text-green-500";
    if (n < 0) return "text-red-500";
    return "text-black";
  };

  const renderRow = (metalData) => (
    <tr className="text-md hover:bg-accent/10" key={metalData.metal_name}>
      <td className="border-t px-4 py-5 font-sm">
        {metalData.metal_name}
        {metalData.source && (
          <span className="text-sm text-gray-500 ml-2">
            ({metalData.source})
          </span>
        )}
      </td>
      <td className="border-t px-4 py-5">${fmtPrice(metalData.price)}</td>
      <td
        className={`border-t px-4 py-5 ${getChangeClass(metalData.price_change)}`}
      >
        {metalData.price_change > 0
          ? `$+${fmtPrice(metalData.price_change)}`
          : metalData.price_change < 0
            ? `${fmtPrice(metalData.price_change)}`
            : `$0.00`}
      </td>
      <td
        className={`border-t px-4 py-5 ${getChangeClass(metalData.price_change_percent)}`}
      >
        {fmtPct(metalData.price_change_percent)}%
      </td>
    </tr>
  );

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800 mx-auto"></div>
        <p className="mt-2 text-gray-600">Loading real-time prices...</p>
      </div>
    );
  }

  if (error && uraniumPrices.length === 0) {
    return (
      <div className="text-center py-4 text-red-500">
        Error: {error}
        <p className="text-sm text-gray-600 mt-2">Using fallback data</p>
      </div>
    );
  }

  // Empty state: no uranium rows after filtering
  if (uraniumPrices.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        No uranium price data available
      </div>
    );
  }

  const now = new Date();
  const displayTime = now.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <div className="overflow-x-auto custom-scrollbar-hidden">
      <table className="table-auto w-full border-collapse text-sm">
        <thead className="text-left">
          <tr className="text-black/60">
            <th className="border-t px-4 py-2">Metal</th>
            <th className="border-t px-4 py-2">Price (USD/lb)</th>
            <th className="border-t px-4 py-2">Change</th>
            <th className="border-t px-4 py-2">% Change</th>
          </tr>
        </thead>
        <tbody>
          {uraniumPrices.map((metalData) => renderRow(metalData))}
        </tbody>
      </table>

      {error && (
        <div className="mt-2 text-xs text-orange-600 text-center">
          Note: Some data may be simulated due to API restrictions
        </div>
      )}

      <div className="mt-2 mb-3 text-xs text-gray-500 text-center">
        <time dateTime={now.toISOString()}>
          Last updated: {displayTime} · Auto-refresh: 2 min
        </time>
      </div>
    </div>
  );
};

export default DirectHomeUraniumPrice;
