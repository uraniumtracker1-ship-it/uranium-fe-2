import { useEffect, useState, useRef } from "react";
import { MOST_FOLLOWED, URANIUM_STOCK_DETAIL } from "@/src/api/uraniumAPI";
import { useRouter } from "next/navigation";
import axios from "axios";

const MostFollowed = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const existsCache = useRef({});
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MOST_FOLLOWED);
        const data = await response.json();
        console.log("msdncb", data.data);
        setStockData(data.data.most_watched || []);
      } catch (err) {
        console.error("fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const checkSubpageExists = async (ticker) => {
    if (existsCache.current[ticker] !== undefined) {
      return existsCache.current[ticker];
    }
    try {
      const res = await axios.get(
        `${URANIUM_STOCK_DETAIL}?stock_ticker=${ticker}`,
      );
      const result = res.data.exists ?? true;
      existsCache.current[ticker] = result;
      return result;
    } catch {
      existsCache.current[ticker] = false;
      return false;
    }
  };

  const handleStockClick = async (ticker) => {
    const exists = await checkSubpageExists(ticker);
    if (exists) {
      router.push(`/stock-detail/${ticker}`);
    } else {
      setErrorMessage(`Details for ${ticker} are not available.`);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  const sorted = [...stockData].sort(
    (a, b) => (b.intraday_percentage || 0) - (a.intraday_percentage || 0),
  );

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-full">
      <div className="flex justify-between border-b">
        <h2 className="text-xl font-bold text-black mb-3">Most Watched</h2>
        <div className="text-left">
          <a
            href="/investments"
            className="inline-flex items-center text-sm font-bold text-accent hover:underline"
          >
            View More <span className="ml-1">&gt;</span>
          </a>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded shadow-md w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-2">Not Available</h2>
            <p className="text-sm mb-4">{errorMessage}</p>
            <button
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Table */}
      <table className="w-full text-left mt-4 text-sm font-sans">
        <tbody>
          {sorted.map((stock) => (
            <tr
              key={stock.ticker || stock.id}
              className="border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              onClick={() => handleStockClick(stock.ticker?.split(".")[0])}
            >
              <td className="py-2">
                <div>
                  <strong className="text-accent">
                    {stock.ticker || "N/A"}
                  </strong>
                </div>
                <div className="text-gray-500">{stock.name || "N/A"}</div>
              </td>
              <td className="py-2 text-right">
                <div>${parseFloat(stock.current_price || 0).toFixed(2)}</div>
                <div
                  className={
                    parseFloat(stock.intraday_percentage || 0) < 0
                      ? "text-red-600"
                      : "text-green-500"
                  }
                >
                  {parseFloat(stock.intraday_percentage || 0).toFixed(2)}%
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* View More */}
    </div>
  );
};

export default MostFollowed;
