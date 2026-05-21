import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import InvestmentHero from "@/components/Investment/InvestmentHero";
import IInsiderTransactions from "@/components/Investment/IInsiderTransactions";
import SEO from "@/components/SEO";
import React from "react";

const InsiderTrades = ({ hasData }) => {
  return (
    <div>
      <SEO
        title="Uranium Insider Transactions — Director & Officer Trades | Uranium Tracker"
        description="Track insider buying and selling across US, Canadian, and ASX uranium stocks — SEC EDGAR Form 4, SEDI Canada, and ASX disclosures."
        keywords="uranium insider trading, uranium director buying, uranium insider transactions, SEC Form 4 uranium"
        canonicalPath="/investments/insider-trades"
        robots={hasData ? undefined : "noindex,follow"}
      />
      <Navbar />
      <div className="pt-[80px]">
        <InvestmentHero
          title="Uranium Insider Transactions"
          description="Track director and officer buying and selling across US, Canadian, and ASX-listed uranium companies."
        />
      </div>
      <div className="px-3 md:px-12 mt-6 mb-24">
        <h1 className="cambay text-3xl font-bold mb-6">Uranium Insider Transactions</h1>
        <IInsiderTransactions />
      </div>
      <Footer />
    </div>
  );
};

export default InsiderTrades;

export async function getServerSideProps() {
  try {
    const { query } = await import("../../lib/database");
    const result = await query(
      `SELECT COUNT(*) as cnt FROM api_app_insidertransactions
       WHERE LOWER(ticker) NOT IN ('test','tesdt')
       AND insider_name NOT ILIKE '%test%'`
    );
    const hasData = parseInt(result.rows[0]?.cnt ?? 0) > 0;
    return { props: { hasData } };
  } catch {
    return { props: { hasData: true } }; // fail open — don't noindex on DB error
  }
}
