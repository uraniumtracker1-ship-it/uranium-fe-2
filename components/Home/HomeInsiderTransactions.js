import React, { useState, useEffect } from "react";
import { formatInsiderTitle, formatTradeType } from "@/lib/constants";

const HomeInsiderTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/insider-transactions/");
        if (!response.ok) {
          console.warn(
            `Insider transactions API returned ${response.status} — showing empty state`,
          );
          setTransactions([]);
          setLoading(false);
          return;
        }
        const data = await response.json();
        setTransactions((Array.isArray(data) ? data : []).slice(0, 10));
      } catch (err) {
        console.error("Error fetching insider transactions:", err);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-accent mx-auto"></div>
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500 text-sm">
        No recent transactions available
      </div>
    );
  }

  return (
    <div className="overflow-x-auto custom-scrollbar-hidden">
      <table className="table-auto w-full border-collapse text-xs">
        <thead className="text-left">
          <tr className="text-black/60">
            <th className="border-t px-2 py-2 whitespace-nowrap">Country</th>
            <th className="border-t px-2 py-2 min-w-[120px]">Company</th>
            <th className="border-t px-2 py-2 whitespace-nowrap">Ticker</th>
            <th className="border-t px-2 py-2 min-w-[100px]">Insider</th>
            <th className="border-t px-2 py-2 min-w-[90px]">Title</th>
            <th className="border-t px-2 py-2 min-w-[60px]">Type</th>
            <th className="border-t px-2 py-2 whitespace-nowrap">Price</th>
            <th className="border-t px-2 py-2 whitespace-nowrap">Qty</th>
            <th className="border-t px-2 py-2 whitespace-nowrap">Amount</th>
            <th className="border-t px-2 py-2 whitespace-nowrap">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            const tradeType = formatTradeType(transaction.trade_type);
            return (
              <tr
                key={transaction.id || index}
                className="text-xs hover:bg-accent/10 transition-colors"
              >
                <td className="border-t px-2 py-2">
                  <span className="text-lg" title="Canada">
                    🇨🇦
                  </span>
                </td>
                <td
                  className="border-t px-2 py-2 max-w-[140px] truncate"
                  title={transaction.company_name}
                >
                  {transaction.company_name || "N/A"}
                </td>
                <td className="border-t px-2 py-2 font-semibold text-accent whitespace-nowrap">
                  {transaction.ticker || "N/A"}
                </td>
                <td
                  className="border-t px-2 py-2 max-w-[110px] truncate"
                  title={transaction.insider_name}
                >
                  {transaction.insider_name || "N/A"}
                </td>
                <td
                  className="border-t px-2 py-2 max-w-[110px] truncate"
                  title={transaction.title}
                >
                  {formatInsiderTitle(transaction.title)}
                </td>
                <td className={`border-t px-2 py-2 font-medium whitespace-nowrap ${tradeType.color}`}>
                  {tradeType.label}
                </td>
                <td className="border-t px-2 py-2 whitespace-nowrap">
                  {transaction.price || "$0.00"}
                </td>
                <td className={`border-t px-2 py-2 font-medium whitespace-nowrap ${tradeType.color}`}>
                  {transaction.qty || "0"}
                </td>
                <td className={`border-t px-2 py-2 font-medium whitespace-nowrap ${tradeType.color}`}>
                  {transaction.value || "$0"}
                </td>
                <td className="border-t px-2 py-2 whitespace-nowrap">
                  {formatDate(transaction.transaction_date)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeInsiderTransactions;
