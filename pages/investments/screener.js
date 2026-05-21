import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import IStockScreener from "@/components/Investment/IStockScreener";
import SEO from "@/components/SEO";
import React from "react";

const Screener = ({ stockData, hasData }) => {
  return (
    <div>
      <SEO
        title="Uranium Stock Screener — Filter by Exchange, Market Cap & Region | Uranium Tracker"
        description="Screen 60+ uranium mining stocks by jurisdiction, stock exchange, market cap, mine location, and development stage. Find the right uranium investment for your portfolio."
        keywords="uranium stock screener, uranium stock filter, uranium mining stocks, uranium stock comparison"
        canonicalPath="/investments/screener"
        robots={hasData ? undefined : "noindex,follow"}
      />
      <Navbar />
      <div className="pt-[80px]">
        <InvestmentHero
          title="Uranium Stock Screener"
          description="Filter 60+ uranium mining stocks by jurisdiction, exchange, market cap, and development stage."
        />
      </div>
      <IStockScreener stockData={stockData} />
      <div className="mb-24" />
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const { query } = await import("../../lib/database");
    const result = await query(
      `SELECT ticker, company_name, stock_type, exchange, domiciled, mine_location,
       primary_resource, market_cap, last_price, intraday_percentage, volume,
       ytd_percentage, week_52_low, week_52_high, last_updated
       FROM api_app_stockmetrics ORDER BY company_name ASC`
    );
    const stockData = result.rows.map((row) => ({
      ...row,
      last_updated: row.last_updated ? row.last_updated.toISOString() : null,
    }));
    return { props: { stockData, hasData: stockData.length > 0 } };
  } catch {
    return { props: { stockData: [], hasData: false } };
  }
}

export default Screener;
