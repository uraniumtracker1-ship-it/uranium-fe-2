import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MOST_FOLLOWED, URANIUM_STOCK_DETAIL } from "@/src/api/uraniumAPI";
import { SECTION_HEADERS } from "@/lib/constants";
import axios from "axios";

const FALLBACK_DATA = {
  most_watched: [
    { id: "1", ticker: "CCJ", name: "Cameco Corporation", current_price: 0, intraday_percentage: 0 },
    { id: "2", ticker: "NXE", name: "NexGen Energy", current_price: 0, intraday_percentage: 0 },
    { id: "3", ticker: "UEC", name: "Uranium Energy Corp", current_price: 0, intraday_percentage: 0 },
    { id: "4", ticker: "UUUU", name: "Energy Fuels Inc", current_price: 0, intraday_percentage: 0 },
    { id: "5", ticker: "DNN", name: "Denison Mines Corp", current_price: 0, intraday_percentage: 0 },
    { id: "6", ticker: "URNM", name: "Sprott Uranium Miners ETF", current_price: 0, intraday_percentage: 0 },
    { id: "7", ticker: "URA", name: "Global X Uranium ETF", current_price: 0, intraday_percentage: 0 },
    { id: "8", ticker: "EU", name: "enCore Energy Corp", current_price: 0, intraday_percentage: 0 },
    { id: "9", ticker: "URG", name: "Ur-Energy Inc", current_price: 0, intraday_percentage: 0 },
    { id: "10", ticker: "SRUUF", name: "Sprott Physical Uranium Trust", current_price: 0, intraday_percentage: 0 },
  ],
  north_american_leaders: [
    { id: "11", ticker: "CCJ", name: "Cameco Corporation", current_price: 0, intraday_percentage: 0 },
    { id: "12", ticker: "NXE", name: "NexGen Energy", current_price: 0, intraday_percentage: 0 },
    { id: "13", ticker: "UEC", name: "Uranium Energy Corp", current_price: 0, intraday_percentage: 0 },
    { id: "14", ticker: "DNN", name: "Denison Mines Corp", current_price: 0, intraday_percentage: 0 },
    { id: "15", ticker: "UUUU", name: "Energy Fuels Inc", current_price: 0, intraday_percentage: 0 },
    { id: "16", ticker: "EU", name: "enCore Energy Corp", current_price: 0, intraday_percentage: 0 },
    { id: "17", ticker: "URG", name: "Ur-Energy Inc", current_price: 0, intraday_percentage: 0 },
    { id: "18", ticker: "UROY", name: "Uranium Royalty Corp", current_price: 0, intraday_percentage: 0 },
    { id: "19", ticker: "FCU.V", name: "Fission Uranium Corp", current_price: 0, intraday_percentage: 0 },
    { id: "20", ticker: "ISO.V", name: "IsoEnergy Ltd", current_price: 0, intraday_percentage: 0 },
  ],
  global_market_leaders: [
    { id: "21", ticker: "PDN.AX", name: "Paladin Energy", current_price: 0, intraday_percentage: 0 },
    { id: "22", ticker: "BOE.AX", name: "Boss Energy", current_price: 0, intraday_percentage: 0 },
    { id: "23", ticker: "DYL.AX", name: "Deep Yellow", current_price: 0, intraday_percentage: 0 },
    { id: "24", ticker: "BMN.AX", name: "Bannerman Energy", current_price: 0, intraday_percentage: 0 },
    { id: "25", ticker: "LOT.AX", name: "Lotus Resources", current_price: 0, intraday_percentage: 0 },
    { id: "26", ticker: "PEN.AX", name: "Peninsula Energy", current_price: 0, intraday_percentage: 0 },
    { id: "27", ticker: "AGE.AX", name: "Alligator Energy", current_price: 0, intraday_percentage: 0 },
    { id: "28", ticker: "ERA.AX", name: "Energy Resources of Australia", current_price: 0, intraday_percentage: 0 },
    { id: "29", ticker: "GTR.AX", name: "GTI Energy", current_price: 0, intraday_percentage: 0 },
    { id: "30", ticker: "VMY.AX", name: "Vimy Resources", current_price: 0, intraday_percentage: 0 },
  ],
};

const MostFollowedStocksTable = () => {
  const [stocksData, setStocksData] = useState(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchMostFollowedStocks = async () => {
      try {
        setLoading(true);
        const response = await fetch(MOST_FOLLOWED);

        if (!response.ok) {
          console.warn(
            `Most followed stocks API returned ${response.status} — using fallback`,
          );
          setStocksData(FALLBACK_DATA);
          setLoading(false);
          return;
        }

        const result = await response.json();

        if (result.success && result.data) {
          setStocksData(result.data);
        } else {
          setStocksData(FALLBACK_DATA);
        }
      } catch (err) {
        console.error("Error fetching most followed stocks:", err);
        setStocksData(FALLBACK_DATA);
      } finally {
        setLoading(false);
      }
    };

    fetchMostFollowedStocks();
    const interval = setInterval(fetchMostFollowedStocks, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const checkSubpageExists = async (stockTicker) => {
    try {
      const response = await axios.get(
        `${URANIUM_STOCK_DETAIL}?stock_ticker=${stockTicker}`,
      );
      return response.data.exists ?? true;
    } catch {
      return false;
    }
  };

  const handleStockClick = async (stockTicker) => {
    setErrorMessage("");
    const exists = await checkSubpageExists(stockTicker);
    if (exists) {
      router.push(`/stock-detail/${stockTicker}`);
    } else {
      setErrorMessage(`Details for ${stockTicker} are not available.`);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  const formatPrice = (price) => {
    if (price === null || price === undefined || isNaN(price)) return "—";
    return `$${parseFloat(price).toFixed(2)}`;
  };

  const formatPercentage = (percentage) => {
    if (percentage === null || percentage === undefined || isNaN(percentage))
      return "—";
    const value = parseFloat(percentage);
    return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
  };

  const getPercentageColor = (percentage) => {
    const value = parseFloat(percentage);
    if (value > 0) return "text-green-600";
    if (value < 0) return "text-red-600";
    return "text-gray-500";
  };

  const renderStockRow = (stock, index) => (
    <div
      key={stock.id || `${stock.ticker}-${index}`}
      className="flex justify-between items-center py-2 px-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0"
      onClick={() => handleStockClick(stock.ticker?.split(".")[0])}
    >
      <div className="flex-1 min-w-0 mr-2">
        <div className="font-semibold text-sm text-accent">{stock.ticker}</div>
        <div className="text-xs text-gray-600 mt-0.5 truncate">{stock.name}</div>
      </div>
      <div className="text-right shrink-0">
        <div className="text-sm font-medium text-gray-900">
          {formatPrice(stock.current_price)}
        </div>
        <div className={`text-xs ${getPercentageColor(stock.intraday_percentage)}`}>
          {formatPercentage(stock.intraday_percentage)}
        </div>
      </div>
    </div>
  );

  const renderColumn = (stocks, title, subtitle) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h3 className="text-sm font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-xs text-gray-600">{subtitle}</p>
        <div className="w-8 h-0.5 bg-accent mt-2"></div>
      </div>

      <div className="px-4 py-2 bg-gray-25 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            COMPANY
          </span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            PRICE / 1D %
          </span>
        </div>
      </div>

      <div className="bg-white max-h-96 overflow-y-auto">
        {stocks.length > 0 ? (
          stocks.map((stock, index) => renderStockRow(stock, index))
        ) : (
          <div className="px-4 py-8 text-center text-gray-500 text-sm">
            No stocks available
          </div>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="w-full px-3 md:px-10 lg:px-12 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
            <span className="ml-3 text-gray-600">Loading stock data...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-3 md:px-10 lg:px-12 py-6 bg-gray-50">
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-colors"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4 text-gray-800">
              Stock Not Available
            </h2>
            <p className="text-sm mb-6 text-gray-600">{errorMessage}</p>
            <button
              className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accent/90 transition-colors"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderColumn(
            stocksData.most_watched,
            SECTION_HEADERS.mostFollowed,
            "Live Performance",
          )}
          {renderColumn(
            stocksData.north_american_leaders,
            "North American Uranium Leaders",
            "Market Performance",
          )}
          {renderColumn(
            stocksData.global_market_leaders,
            "ASX Uranium Leaders",
            "Live Tracking",
          )}
        </div>
      </div>
    </div>
  );
};

export default MostFollowedStocksTable;
