import React, { useState, useEffect } from "react";

const HomeInsiderTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/insider-transactions/");
        // Gracefully handle non-200 — show empty state, don't crash
        if (!response.ok) {
          console.warn(`Insider transactions API returned ${response.status} — showing empty state`);
          setTransactions([]);
          setLoading(false);
          return;
        }
        const data = await response.json();
        
        // Filter for Canadian transactions and limit to 10 most recent
        const canadianTransactions = (Array.isArray(data) ? data : [])
          .filter(t => t.country === "Canada")
          .slice(0, 10);
        
        setTransactions(canadianTransactions);
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
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
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
            <th className="border-t px-2 py-2">Country</th>
            <th className="border-t px-2 py-2">Company</th>
            <th className="border-t px-2 py-2">Ticker</th>
            <th className="border-t px-2 py-2">Insider</th>
            <th className="border-t px-2 py-2">Title</th>
            <th className="border-t px-2 py-2">Type</th>
            <th className="border-t px-2 py-2">Price</th>
            <th className="border-t px-2 py-2">Qty</th>
            <th className="border-t px-2 py-2">Amount</th>
            <th className="border-t px-2 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr 
              key={transaction.id || index} 
              className="text-xs hover:bg-accent/10 transition-colors"
            >
              <td className="border-t px-2 py-2">
                <span className="text-lg" title="Canada">🇨🇦</span>
              </td>
              <td className="border-t px-2 py-2 max-w-[120px] truncate" title={transaction.company_name}>
                {transaction.company_name || "N/A"}
              </td>
              <td className="border-t px-2 py-2 font-semibold text-accent">
                {transaction.ticker || "N/A"}
              </td>
              <td className="border-t px-2 py-2 max-w-[100px] truncate" title={transaction.insider_name}>
                {transaction.insider_name || "N/A"}
              </td>
              <td className="border-t px-2 py-2 max-w-[100px] truncate" title={transaction.title}>
                {transaction.title || "N/A"}
              </td>
              <td className="border-t px-2 py-2">
                {transaction.trade_type || "N/A"}
              </td>
              <td className="border-t px-2 py-2">
                {transaction.price || "$0.00"}
              </td>
              <td className="border-t px-2 py-2 text-green-600 font-medium">
                {transaction.qty || "0"}
              </td>
              <td className="border-t px-2 py-2 text-green-600 font-medium">
                {transaction.value || "$0"}
              </td>
              <td className="border-t px-2 py-2 whitespace-nowrap">
                {formatDate(transaction.transaction_date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeInsiderTransactions;
