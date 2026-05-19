import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import ISnapshot from "@/components/Investment/ISnapshot";
import SEO from "@/components/SEO";
import React from "react";

const Leaders = ({ stockData }) => {
  return (
    <div>
      <SEO
        title="Uranium Stock Leaders & Market Snapshot | Uranium Tracker"
        description="Live uranium stock movers, top performers, and market leaders across NYSE, TSX, and ASX — updated daily."
        keywords="uranium stock leaders, uranium market snapshot, top uranium stocks, uranium movers"
        canonicalPath="/investments/leaders"
      />
      <Navbar />
      <div className="pt-[80px]">
        <InvestmentHero />
      </div>
      <div className="px-3 md:px-12 mt-6 mb-24">
        <ISnapshot stockData={stockData} />
      </div>
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
    return { props: { stockData } };
  } catch {
    return { props: { stockData: [] } };
  }
}

export default Leaders;
