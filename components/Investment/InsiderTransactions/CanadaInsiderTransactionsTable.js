import React, { useState } from "react";
import { flags } from "../../../public/static-data/flagsData";

// Map SEDI insider type codes to readable labels
const parseSEDITitle = (raw) => {
  if (!raw) return "N/A";
  const map = {
    "1": "Issuer",
    "2": "Subsidiary",
    "3": "10% Holder",
    "4": "Director",
    "5": "Officer",
    "6": "Director / Officer",
    "7": "Subsidiary Director",
    "8": "Other Insider",
  };
  // Try to extract leading number(s) from strings like "4 - Director of Issuer"
  const cleaned = raw.replace(/\d+\s*-\s*/g, (match) => {
    const num = match.match(/\d+/)[0];
    return map[num] ? map[num] + " / " : "";
  }).replace(/\s*\/\s*$/, "").trim();
  // If nothing matched, return the original trimmed
  return cleaned || raw.trim();
};

// Map SEDI Nature of Transaction codes to readable labels
const parseSEDITradeType = (raw) => {
  if (!raw) return "N/A";
  const lower = raw.toLowerCase().trim();
  const map = {
    "10": "Buy / Sell (Market)",
    "11": "Private Buy / Sell",
    "30": "Gift",
    "40": "Stock Split",
    "50": "Option Grant",
    "51": "Option Exercise",
    "52": "Option Expiration",
    "70": "Other Buy / Sell",
  };
  // Match leading code like "52 - expiration of options"
  const codeMatch = raw.match(/^(\d+)\s*-/);
  if (codeMatch && map[codeMatch[1]]) return map[codeMatch[1]];
  // Plain text fallbacks
  if (lower.includes("acquisition") || lower.includes("disposition")) return "Buy / Sell";
  if (lower.includes("exercise")) return "Option Exercise";
  if (lower.includes("expir")) return "Option Expiration";
  if (lower.includes("grant")) return "Option Grant";
  if (lower.includes("gift")) return "Gift";
  return raw.trim();
};

const TableCanadaInsiderTransactions = ({
  homeData,
  rows,
  sortColumn,
  sortDirection,
  onSort,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = rows || 10;

  const totalPages = Math.ceil(homeData.length / rowsPerPage);

  const getColorClass = (value) => {
    const num = parseFloat((String(value || "")).replace(/[^\d.-]/g, ""));
    if (isNaN(num)) return "";
    return num < 0 ? "text-red-500" : "text-green-500";
  };

  const formatLargeNumber = (value) => {
    const valueStr = String(value || "");
    const hasDollarSign = valueStr.includes("$");
    const num = parseFloat(valueStr.replace(/[^\d.-]/g, ""));
    if (isNaN(num)) return value;

    const absNum = Math.abs(num);
    let result;
    if (absNum >= 1000000000) {
      result = (num / 1000000000).toFixed(2) + "B";
    } else if (absNum >= 1000000) {
      result = (num / 1000000).toFixed(2) + "M";
    } else if (absNum >= 1000) {
      result = (num / 1000).toFixed(2) + "K";
    } else {
      result = num.toFixed(2);
    }
    return hasDollarSign ? `$${result}` : result;
  };

  const getCountryFlag = (countryName) => {
    const name = countryName || "Canada";
    const country = flags.countries.find(
      (flag) => flag.name.toLowerCase() === name.toLowerCase()
    );
    return country ? country.svg : name;
  };

  if (!homeData || homeData.length === 0) {
    return <p className="text-black1">No transactions available</p>;
  }

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const dataToShow = homeData.slice(startIndex, endIndex);

  const sortableColumns = ["price", "quantity", "amount", "owned"];

  return (
    <div className="w-full mb-10 lg:mb-0 " id="canada-table-section">
      <div
        id="canada-compo"
        className="overflow-x-auto bg-white custom-scrollbar-hidden"
      >
        <table className="w-full canada-stocks-table min-w-[600px] mb-8 custom-scrollbar-hidden">
          <thead className=" text-date/50 font-semibold border-b border-date/10">
            <tr>
              {[
                "Country",
                "Company Name",
                "Ticker",
                "Insider Name",
                "Title",
                "Trade Type",
                "Price",
                "Quantity",
                "Amount",
                "Transaction Date",
              ].map((heading) => (
                <th
                  key={heading}
                  className={`px-2 py-2 md:px-4 md:py-[16px] text-left text-[10px] md:text-[11px] font-semibold uppercase tracking-wider ${
                    sortableColumns.includes(heading.toLowerCase())
                      ? "cursor-pointer hover:bg-gray-100"
                      : ""
                  }`}
                  onClick={() =>
                    sortableColumns.includes(heading.toLowerCase()) &&
                    onSort(heading.toLowerCase())
                  }
                >
                  {heading}
                  {sortableColumns.includes(heading.toLowerCase()) && (
                    <span className="ml-2">
                      <span className="text-lightgray text-xs">
                        {sortColumn === heading.toLowerCase()
                          ? sortDirection === "asc"
                            ? "▲"
                            : "▼"
                          : "↕"}
                      </span>
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" text-black/90">
            {dataToShow.map((data, index) => (
              <tr
                key={data.id || index}
                className="hover:bg-accent/10 py-2 border-b border-date/10 text-[13px] text-start"
              >
                <td
                  className="px-4 py-[10px] scale-90"
                  dangerouslySetInnerHTML={{
                    __html: getCountryFlag(data.country),
                  }}
                />
                <td className="px-4 py-[10px]">{data.company_name || "N/A"}</td>
                <td className="px-4 py-[10px]">{data.ticker || "N/A"}</td>
                <td className="px-4 py-[10px]">{data.insider_name || "N/A"}</td>
                <td className="px-5 py-[10px]">{parseSEDITitle(data.title)}</td>
                <td className="px-5 py-[10px]">{parseSEDITradeType(data.trade_type)}</td>
                <td className="px-4 py-[10px] text-black">
                  {formatLargeNumber(data.price || "0.00")}
                </td>
                <td className={`px-4 py-[10px] ${getColorClass(data.qty)}`}>
                  {formatLargeNumber(data.qty || "0")}
                </td>
                <td className={`px-5 py-[10px] ${getColorClass(data.value)}`}>
                  {formatLargeNumber(data.value || "0.00")}
                </td>
                <td className="px-4 py-[10px]">
                  {data.transaction_date || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCanadaInsiderTransactions;
