import React, { useState, useEffect } from "react";

const DirectUraniumPrice = () => {
  const [uraniumData, setUraniumData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUraniumPrice = async () => {
      try {
        setLoading(true);
        
        // Fetch uranium price from CME Group API
        const response = await fetch('/api/cme-uranium-spot');
        
        if (!response.ok) {
          console.warn(`Uranium price API returned ${response.status} — showing empty state`);
          setUraniumData(null);
          setLoading(false);
          return;
        }
        
        const data = await response.json();
        
        if (!data.success || !data.data) {
          setUraniumData(null);
          setLoading(false);
          return;
        }
        
        // Use CME uranium data directly
        const cmeData = data.data;
        
        setUraniumData({
          price: parseFloat(cmeData.last_price),
          price_change: parseFloat(cmeData.price_change),
          price_change_percent: parseFloat(cmeData.price_change_percent),
          source: "CME Group",
          symbol: cmeData.globex_code,
          last_updated: cmeData.scraped_at
        });
        
      } catch (error) {
        console.error('Error fetching CME uranium spot price:', error);
        setError(error.message);
        
        // No fallback data - set to null to show error state
        setUraniumData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUraniumPrice();
    
    // Refresh every 2 minutes
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
          <p className="text-sm text-gray-600 mt-2">Real-time data only - no fallback data</p>
          {error && (
            <p className="text-xs text-red-400 mt-2">
              Error: {error}
            </p>
          )}
        </div>
      </div>
    );
  }

  const { price, price_change, price_change_percent, source } = uraniumData;

  // Format large numbers (CNY) with commas
  const formattedPrice = price > 1000 
    ? price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    : price.toFixed(2);
  
  const changeValue = parseFloat(price_change || 0);
  const formattedChange = Math.abs(changeValue) > 1000
    ? Math.abs(changeValue).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
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
              className="w-20 h-10 md:w-16 md:h-8 lg:w-20 lg:h-10 object-contain"
              src="/logo.jpg"
              alt="Uranium Tracker Logo"
            />
          </div>

          {/* Price Data */}
          <div className="flex-1 grid grid-cols-3 gap-2 text-center">
            {/* Price */}
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-[10px] text-black1/60 font-medium mb-1">Price</p>
              <p className="text-sm md:text-xs lg:text-sm font-bold text-green">
                ¥{formattedPrice}
              </p>
            </div>

            {/* Change */}
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-[10px] text-black1/60 font-medium mb-1">Change</p>
              <p
                className={`text-sm md:text-xs lg:text-sm font-bold ${
                  changeValue >= 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {changeValue >= 0 ? `¥+${formattedChange}` : `¥-${formattedChange}`}
              </p>
            </div>

            {/* % Change */}
            <div>
              <p className="text-[10px] md:text-[9px] lg:text-[10px] text-black1/60 font-medium mb-1">% Change</p>
              <p
                className={`text-sm md:text-xs lg:text-sm font-bold ${
                  parseFloat(formattedPercent) >= 0 ? "text-green-600" : "text-red-500"
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
        <p className="text-xs text-gray-600">
          Source: {source}
        </p>
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
