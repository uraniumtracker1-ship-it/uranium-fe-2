import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import ISnapshot from "@/components/Investment/ISnapshot";
import IInsiderTransactions from "@/components/Investment/IInsiderTransactions";
import IETF from "@/components/Investment/ETF/IETF";
import IUraniumAssets from "@/components/Investment/IUraniumAssets";
import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import { STOCK_SCREENER } from "@/src/api/uraniumAPI";

const PAGE_SIZE = 15;

const investments = () => {
  const { query } = useRouter();
  const currentTab = query.tab || "snapshot";

  // Stock screener data — fetched client-side when tab is active
  const [stockData, setStockData] = useState([]);
  const [stockLoading, setStockLoading] = useState(false);
  const [stockError, setStockError] = useState(null);

  useEffect(() => {
    if (currentTab !== "stock-screener") return;
    if (stockData.length > 0) return; // already loaded
    fetchStocks();
  }, [currentTab]);

  const fetchStocks = async () => {
    setStockLoading(true);
    setStockError(null);
    try {
      const res = await fetch(STOCK_SCREENER);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setStockData(data);
    } catch (err) {
      console.error("Stock screener fetch error:", err);
      setStockError(err.message);
    } finally {
      setStockLoading(false);
    }
  };

  // Filters
  const [filters, setFilters] = useState({
    stock_type: "All",
    exchange: "All",
    domiciled: "All",
    mine_location: "All",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("market_cap");
  const [sortDirection, setSortDirection] = useState("desc");

  const uniqueOptions = useMemo(() => {
    if (!stockData || stockData.length === 0) return {};
    return {
      stock_type: ["All", ...new Set(stockData.map(item => item.stock_type).filter(Boolean))],
      exchange: ["All", ...new Set(stockData.map(item => item.exchange).filter(Boolean))],
      domiciled: ["All", ...new Set(stockData.map(item => item.domiciled).filter(Boolean))],
      mine_location: ["All", ...new Set(stockData.map(item => item.mine_location).filter(Boolean))],
    };
  }, [stockData]);

  const filteredAndSortedData = useMemo(() => {
    if (!stockData) return [];
    let filtered = stockData.filter((stock) =>
      Object.entries(filters).every(([key, value]) => {
        if (value === "All") return true;
        return stock[key]?.toString().toLowerCase() === value.toLowerCase();
      })
    );
    filtered.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      const aNum = parseFloat(String(aValue).replace(/[$,]/g, ""));
      const bNum = parseFloat(String(bValue).replace(/[$,]/g, ""));
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortDirection === "asc" ? aNum - bNum : bNum - aNum;
      }
      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();
      return sortDirection === "asc" ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });
    return filtered;
  }, [stockData, filters, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredAndSortedData.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredAndSortedData, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedData.length / PAGE_SIZE);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const formatPercentage = (value) => {
    if (!value || value === "N/A") return "0.00%";
    if (typeof value === "string" && value.includes("%")) return value;
    return `${parseFloat(value).toFixed(2)}%`;
  };

  const getPercentageColor = (value) => {
    const num = parseFloat(String(value).replace("%", ""));
    if (isNaN(num)) return "";
    return num >= 0 ? "text-green-500" : "text-red-500";
  };

  const renderScreenerBody = () => {
    if (stockLoading) {
      return (
        <div className="flex justify-center items-center py-24">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-accent" />
          <span className="ml-4 text-gray-500 font-medium">Loading stock data…</span>
        </div>
      );
    }
    if (stockError) {
      return (
        <div className="flex flex-col items-center py-24 text-center">
          <p className="text-red-500 font-semibold mb-2">Failed to load stock data</p>
          <p className="text-gray-400 text-sm mb-4">{stockError}</p>
          <button
            onClick={() => { setStockData([]); fetchStocks(); }}
            className="px-4 py-2 bg-accent text-white rounded-md text-sm hover:bg-accent/90"
          >
            Retry
          </button>
        </div>
      );
    }
    if (paginatedData.length === 0) {
      return (
        <div className="flex justify-center items-center py-24 text-gray-400">
          No stocks match the selected filters.
        </div>
      );
    }
    return (
      <>
        <div className="overflow-x-auto custom-scrollbar-hidden relative">
          <table className="w-full min-w-[1200px] bg-white border rounded-md">
            <thead className="font-bold border-b">
              <tr>
                {[
                  ["stock_type", "STOCK TYPE"],
                  ["company_name", "COMPANY NAME"],
                  ["ticker", "TICKER"],
                  ["exchange", "EXCHANGE"],
                  ["domiciled", "DOMICILED"],
                  ["mine_location", "MINE LOCATION"],
                  ["primary_resource", "PRIMARY RESOURCE"],
                  ["market_cap", "MARKET CAP"],
                  ["last_price", "LAST PRICE"],
                  ["intraday_percentage", "INTRADAY %"],
                  ["volume", "VOLUME"],
                  ["ytd_percentage", "YTD %"],
                  ["week_52_low", "52W LOW"],
                  ["week_52_high", "52W HIGH"],
                ].map(([col, label]) => (
                  <th
                    key={col}
                    className="px-4 py-[15px] text-left text-[11px] font-semibold uppercase tracking-wider cursor-pointer hover:bg-gray-50 whitespace-nowrap"
                    onClick={() => handleSort(col)}
                  >
                    {label} {sortColumn === col && (sortDirection === "asc" ? "↑" : "↓")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-bg text-lightgray">
              {paginatedData.map((stock, index) => (
                <tr key={index} className="hover:bg-accent/10 border-b border-date/10 text-[13px] cursor-pointer">
                  <td className="px-4 py-[12px]">{stock.stock_type || "N/A"}</td>
                  <td className="px-4 py-[12px] whitespace-nowrap truncate max-w-[200px]" title={stock.company_name}>{stock.company_name}</td>
                  <td className="px-4 py-[12px] font-semibold">{stock.ticker}</td>
                  <td className="px-4 py-[12px]">{stock.exchange}</td>
                  <td className="px-4 py-[12px]">{stock.domiciled}</td>
                  <td className="px-4 py-[12px]">{stock.mine_location}</td>
                  <td className="px-4 py-[12px]">{stock.primary_resource}</td>
                  <td className="px-4 py-[12px] font-semibold">{stock.market_cap}</td>
                  <td className="px-4 py-[12px] font-semibold">{stock.last_price}</td>
                  <td className={`px-4 py-[12px] font-semibold ${getPercentageColor(stock.intraday_percentage)}`}>{formatPercentage(stock.intraday_percentage)}</td>
                  <td className="px-4 py-[12px]">{stock.volume}</td>
                  <td className={`px-4 py-[12px] font-semibold ${getPercentageColor(stock.ytd_percentage)}`}>{formatPercentage(stock.ytd_percentage)}</td>
                  <td className="px-4 py-[12px]">{stock.week_52_low}</td>
                  <td className="px-4 py-[12px]">{stock.week_52_high}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-600">
            Showing {filteredAndSortedData.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1} to{" "}
            {Math.min(currentPage * PAGE_SIZE, filteredAndSortedData.length)} of{" "}
            {filteredAndSortedData.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            >
              Previous
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = Math.max(1, currentPage - 2) + i;
              if (pageNum > totalPages) return null;
              return (
                <button
                  key={pageNum}
                  className={`px-3 py-1 text-sm rounded ${pageNum === currentPage ? "bg-accent text-white" : "border hover:bg-gray-50"}`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <SEO
        title="Uranium Stocks, ETFs & Insider Trading | Uranium Tracker"
        description="Uranium investment data hub — top stocks, ETF holdings (URNM, URA, URNJ), insider trading (US/Canada/Australia), stock screener, and uranium projects database."
        keywords="uranium stocks, uranium ETFs, URNM, URA, uranium insider trading, uranium stock screener, uranium projects database, CCJ, NexGen, uranium investment"
        canonicalUrl="https://www.uraniumtracker.com/investments"
      />

      <Navbar />

      <div className="pt-[80px]">
        <InvestmentHero />
      </div>

      <div className="px-3 md:px-12 mt-6">
        {/* Tabs */}
        <div className="flex space-x-4 border-b border-gray-200 overflow-x-auto custom-scrollbar-hidden">
          {[
            { tab: "snapshot", label: "Market Leaders" },
            { tab: "stock-screener", label: "Stock Screener" },
            { tab: "insider-transactions", label: "Insider Trading" },
            { tab: "etf-trust-holdings", label: "ETF Holdings" },
            { tab: "uranium-assets", label: "Projects Database" },
          ].map(({ tab, label }) => (
            <a
              key={tab}
              href={`/investments?tab=${tab}`}
              className={`py-2 px-4 whitespace-nowrap shrink-0 ${
                currentTab === tab
                  ? "border-b-2 border-accent text-accent"
                  : "text-gray-600 hover:text-accent"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="mt-6">
          {currentTab === "snapshot" && <ISnapshot stockData={[]} />}

          {currentTab === "stock-screener" && (
            <div className="py-5">
              <h1 className="cambay text-[22px] sm:text-3xl font-semibold">Stock Screener</h1>
              <div className="mt-1 md:mt-5">
                <div className="w-full bg-accent/10 border border-date/20 p-2 py-4 md:p-8 rounded-lg mb-24">
                  {/* Filters — only shown when data is loaded */}
                  {!stockLoading && !stockError && stockData.length > 0 && (
                    <div className="overflow-x-auto pb-2 custom-scrollbar-hidden mb-4">
                      <div className="flex gap-x-4 mt-3">
                        {[
                          { key: "stock_type", label: "Stock Type" },
                          { key: "exchange", label: "Stock Exchange" },
                          { key: "domiciled", label: "Domiciled" },
                          { key: "mine_location", label: "Mine Location" },
                        ].map(({ key, label }) => (
                          <div key={key} className="min-w-[120px]">
                            <label className="block text-xs font-medium text-teal-600 mb-1">{label}</label>
                            <select
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                              value={filters[key]}
                              onChange={(e) => handleFilterChange(key, e.target.value)}
                            >
                              {uniqueOptions[key]?.map(option => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {renderScreenerBody()}
                </div>
              </div>
            </div>
          )}

          {currentTab === "insider-transactions" && <IInsiderTransactions />}
          {currentTab === "etf-trust-holdings" && <IETF />}
          {currentTab === "uranium-assets" && <IUraniumAssets />}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default investments;
